from fastapi import FastAPI
import joblib
import numpy as np
from pydantic import BaseModel
import joblib
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()





app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://traffic-warden.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = joblib.load("model/model.pkl")
scaler = joblib.load("model/scaler.pkl")
# label_encoder = joblib.load("label_encoder.pkl")
target_encoder = joblib.load('model/target_encoder.pkl')
le_protocol_type = joblib.load('model/le_protocol_type.pkl')
le_service = joblib.load('model/le_service.pkl')
le_flag = joblib.load('model/le_flag.pkl')
le_duration_bin = joblib.load('model/le_duration_bin.pkl')


class Features(BaseModel):
    duration : str
    protocol_type : str
    service : str
    flag  : str
    src_bytes  : float  
    dst_bytes  : float  
    land   : float
    wrong_fragment : float  
    urgent: float
    hot: float
    num_failed_logins : float
    logged_in    : float
    num_compromised  : float
    root_shell : float
    su_attempted: float
    num_root    : float
    num_file_creations : float   
    num_shells   : float
    num_access_files : float
    num_outbound_cmds    : float
    is_host_login: float
    is_guest_login    : float
    count   : float
    srv_count: float
    serror_rate: float
    srv_serror_rate: float
    rerror_rate    : float
    srv_rerror_rate   : float
    same_srv_rate: float
    diff_srv_rate: float
    srv_diff_host_rate: float
    dst_host_count   : float
    dst_host_srv_count    : float
    dst_host_same_srv_rate    : float
    dst_host_diff_srv_rate   : float
    dst_host_same_src_port_rate: float
    dst_host_srv_diff_host_rate    : float
    dst_host_serror_rate   : float
    dst_host_srv_serror_rate    : float
    dst_host_rerror_rate: float
    dst_host_srv_rerror_rate   : float     

@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI app!"}

@app.post('/predict')
async def predict(features : Features):
    print(features)

    encoded_protocol = le_protocol_type.transform([features.protocol_type])[0]
    encoded_service = le_service.transform([features.service])[0]
    encoded_flag = le_flag.transform([features.flag])[0]
    encoded_duration_bin = le_duration_bin.transform([features.duration])[0]

    encoded_cats = np.array([[encoded_protocol, encoded_service, encoded_flag, encoded_duration_bin]])

    input_array = np.array([[features.src_bytes , features.dst_bytes , features.land , features.wrong_fragment , features.urgent , features.hot , features.num_failed_logins , features.logged_in , features.num_compromised , features.root_shell , features.su_attempted , features.num_root , features.num_file_creations , features.num_shells , features.num_access_files , features.num_outbound_cmds , features.is_host_login , features.is_guest_login , features.count , features.srv_count , features.serror_rate , features.srv_serror_rate , features.rerror_rate , features.srv_rerror_rate , features.same_srv_rate , features.diff_srv_rate , features.srv_diff_host_rate , features.dst_host_count , features.dst_host_srv_count , features.dst_host_same_srv_rate , features.dst_host_diff_srv_rate , features.dst_host_same_src_port_rate , features.dst_host_srv_diff_host_rate , features.dst_host_serror_rate , features.dst_host_srv_serror_rate , features.dst_host_rerror_rate , features.dst_host_srv_rerror_rate ]])



    input_scaled = scaler.transform(input_array)

    final_input = np.hstack((input_scaled, encoded_cats))

    pred = model.predict(final_input)
    label = target_encoder.inverse_transform(pred)
    print(f"Prediction: {label[0]}")

    
    return {"prediction": label[0]}


    