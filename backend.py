from fastapi import FastAPI
import joblib
import numpy as np
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Features(BaseModel):
    duration : float
    protocol_type : str
    service : str
    flag  : str
    src_bytes  : float  
    dst_bytes  : float  
    land   : bool
    wrong_fragment : bool  
    urgent: bool
    hot: bool
    num_failed_logins : float
    logged_in    : bool
    num_compromised  : float
    root_shell : bool
    su_attempted: bool
    num_root    : float
    num_file_creations : float   
    num_shells   : float
    num_access_files : float
    num_outbound_cmds    : float
    is_host_login: bool
    is_guest_login    : bool
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



@app.post('/predict')
async def predict(features : Features):
    print(features)

    
    return features

    