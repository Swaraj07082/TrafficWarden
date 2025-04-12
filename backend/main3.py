
import pandas as pd




columns = [
    "duration", "protocol_type", "service", "flag", "src_bytes", "dst_bytes", "land", 
    "wrong_fragment", "urgent", "hot", "num_failed_logins", "logged_in", "num_compromised",
    "root_shell", "su_attempted", "num_root", "num_file_creations", "num_shells", 
    "num_access_files", "num_outbound_cmds", "is_host_login", "is_guest_login", "count", 
    "srv_count", "serror_rate", "srv_serror_rate", "rerror_rate", "srv_rerror_rate", 
    "same_srv_rate", "diff_srv_rate", "srv_diff_host_rate", "dst_host_count", 
    "dst_host_srv_count", "dst_host_same_srv_rate", "dst_host_diff_srv_rate", 
    "dst_host_same_src_port_rate", "dst_host_srv_diff_host_rate", "dst_host_serror_rate", 
    "dst_host_srv_serror_rate", "dst_host_rerror_rate", "dst_host_srv_rerror_rate", "class","difficulty"
]









train = pd.read_csv('KDDTrain+.txt' , names = columns)
test = pd.read_csv('KDDTest+.txt' , names=columns)








train.drop(columns=['difficulty'] , inplace=True)
test.drop(columns=['difficulty'] , inplace=True)








attack_mapping = {
    'neptune': 'DOS', 'smurf': 'DOS', 'back': 'DOS', 'teardrop': 'DOS', 'pod': 'DOS', 'land': 'DOS',
    'apache2': 'DOS', 'processtable': 'DOS', 'udpstorm': 'DOS', 'mailbomb': 'DOS',
    
    'ipsweep': 'PROBE', 'portsweep': 'PROBE', 'nmap': 'PROBE', 'satan': 'PROBE', 'mscan': 'PROBE', 'saint': 'PROBE',
    
    'guess_passwd': 'R2L', 'warezclient': 'R2L', 'warezmaster': 'R2L', 'imap': 'R2L',
    'ftp_write': 'R2L', 'multihop': 'R2L', 'phf': 'R2L', 'spy': 'R2L', 'snmpguess': 'R2L', 'snmpgetattack': 'R2L',
    'httptunnel': 'R2L', 'named': 'R2L', 'sendmail': 'R2L',
    
    'buffer_overflow': 'U2R', 'rootkit': 'U2R', 'loadmodule': 'U2R', 'perl': 'U2R',
    'ps': 'U2R', 'xterm': 'U2R', 'xlock': 'U2R', 'xsnoop': 'U2R', 'worm': 'U2R',
    'sqlattack': 'U2R'
}









train.head()


train.iloc[2]

















train['service'].value_counts()











train['class'] = train['class'].replace(attack_mapping)
test['class'] = test['class'].replace(attack_mapping)









train['class'].value_counts()





for col in train.select_dtypes(include=['number']).columns :
    train[col] = train[col].fillna(train[col].median())





for col in test.select_dtypes(include=['number']).columns :
    test[col] = test[col].fillna(test[col].median())





print(train['duration'].min() , train['duration'].max())
print(test['duration'].min() , test['duration'].max())





bins = [-0.1 , 0 , 10000 , 20000 , 30000 , 40000 , 50000 , 60000]
labels = ['0' , '0-10000','10000-20000','20000-30000','30000-40000','40000 - 50000' , '50000 - 60000']





train['duration_bin'] = pd.cut(train['duration'] , bins=bins , labels=labels)
test['duration_bin'] = pd.cut(test['duration'] , bins=bins , labels=labels)





train.drop(columns=['duration'] , inplace=True)
test.drop(columns=['duration'] , inplace=True)








x = train.drop(columns=['class'])
y = train['class']








from sklearn.model_selection import train_test_split






x_train, x_test, y_train, y_test = train_test_split(
    x , y, test_size=0.2 , random_state=42)


print(set(y_train))  # or print(np.unique(y_train))



print(set(y_test))


# Print all unique values in the training and test datasets
print("Unique flag values in training data:", train['flag'].unique())
print("Unique flag values in test data:", test['flag'].unique())


import numpy as np


np.unique(x_train['service'])






np.unique(x_test['service'])


x_train['duration_bin'].value_counts()


x_test['duration_bin'].value_counts()


x_train['service'].value_counts()


unique_protocol_types = pd.concat([x_train['protocol_type'], x_test['protocol_type']]).unique()
unique_services = pd.concat([x_train['service'], x_test['service']]).unique()
unique_flags = pd.concat([x_train['flag'], x_test['flag']]).unique()
unique_duration_bins = pd.concat([x_train['duration_bin'], x_test['duration_bin']]).unique()





unique_services











from sklearn.preprocessing import LabelEncoder
# Initialize the LabelEncoder

le_protocol_type = LabelEncoder()
le_service = LabelEncoder()
le_flag = LabelEncoder()
le_duration_bin = LabelEncoder()


le_protocol_type.fit(unique_protocol_types)
le_service.fit(unique_services)
le_flag.fit(unique_flags)
le_duration_bin.fit(unique_duration_bins)




# List of categorical columns
categorical_cols = ['protocol_type', 'service', 'flag' , 'duration_bin']

# # Apply label encoding to both train and test datasets
# for col in categorical_cols:
#     le.fit(x_train[col])  # Fit only on training data
#     x_train[col] = le.transform(x_train[col])  # Transform training data
#     x_test[col] = le.transform(x_test[col]) 

# le_protocol_type.fit(x_train['protocol_type'])
x_train['protocol_type'] = le_protocol_type.transform(x_train['protocol_type'])
x_test['protocol_type'] = le_protocol_type.transform(x_test['protocol_type'])


# le_service.fit(x_train['service'])
x_train['service'] = le_service.transform(x_train['service'])
x_test['service'] = le_service.transform(x_test['service'])


# le_flag.fit(x_train['flag'])
x_train['flag'] = le_flag.transform(x_train['flag'])
x_test['flag'] = le_flag.transform(x_test['flag'])


# le_duration_bin.fit(x_train['duration_bin'])
x_train['duration_bin'] = le_duration_bin.transform(x_train['duration_bin'])
x_test['duration_bin'] = le_duration_bin.transform(x_test['duration_bin'])






le2 = LabelEncoder()

y_train = le2.fit_transform(y_train)
y_test = le2.transform(y_test)


cat_train_df = x_train[categorical_cols]
cat_test_df = x_test[categorical_cols]


x_train = x_train.drop(columns=categorical_cols)
x_test = x_test.drop(columns=categorical_cols)




x_train_cols = x_train.columns
x_test_cols = x_test.columns


from sklearn.preprocessing import StandardScaler
# LEARNINGGGGGGGGGGGGGGGGG
scaler = StandardScaler()

x_train = scaler.fit_transform(x_train)
x_test = scaler.transform(x_test)


x_train = pd.DataFrame(x_train , columns=x_train_cols)
x_test = pd.DataFrame(x_test , columns=x_test_cols)



print(x_train.shape)
print(cat_train_df.shape)



x_train = x_train.reset_index(drop=True)
cat_train_df = cat_train_df.reset_index(drop=True)
x_test = x_test.reset_index(drop=True)
cat_test_df = cat_test_df.reset_index(drop=True)



x_train = pd.concat([x_train, cat_train_df], axis=1)
x_test = pd.concat([x_test , cat_test_df], axis=1)


x_train


x_train['duration_bin'].value_counts()




 [markdown]
# 


x_train.columns





x_test














import matplotlib.pyplot as plt
import seaborn as sns
corr = x_train.corr()
fig , ax = plt.subplots(figsize = (25,25))
colormap = sns.diverging_palette(150 , 50 , as_cmap = True)
sns.heatmap(corr , cmap = colormap , annot = True , fmt = ".2f")
plt.xticks(range(len(corr.columns)) , corr.columns)
plt.yticks(range(len(corr.columns)) , corr.columns)
plt.show()


 [markdown]
# CHECK ONE SIDE OF DIAGONAL, EITHER BELOW TRIANGLE OF DIAGONAL OR ELSE UPPER DIAGONAL


high_corr_cols = ['num_root' , 'srv_serror_rate' , 'srv_rerror_rate' , 'dst_host_serror_rate' , 'dst_host_srv_serror_rate']


# x_train = x_train.drop(columns=high_corr_cols)
# x_test = x_test.drop(columns=high_corr_cols)


from sklearn.ensemble import RandomForestClassifier

rf = RandomForestClassifier(n_estimators = 100 , max_depth=30 , min_samples_split= 2  , min_samples_leaf=1 , max_features='log2' ,  random_state=42)
# {'max_depth': 30, 'max_features': 'log2', 'min_samples_leaf': 1, 'min_samples_split': 2, 'n_estimators': 100}


rf.fit(x_train , y_train)


y_test_pred = rf.predict(x_test)


from sklearn.metrics import accuracy_score
accuracy = accuracy_score(y_test, y_test_pred)
print(f"Test Accuracy: {accuracy:.4f}")


y_train_pred = rf.predict(x_train)


from sklearn.metrics import accuracy_score
accuracy = accuracy_score(y_train , y_train_pred)
print(f"Train Accuracy: {accuracy:.4f}")


from sklearn.model_selection import cross_val_score

cv_scores = cross_val_score(rf, x_train, y_train, cv=5, scoring='accuracy')
print(f"Cross-validation Accuracy: {cv_scores.mean():.4f} ± {cv_scores.std():.4f}")



# from sklearn.ensemble import RandomForestClassifier
# from sklearn.model_selection import GridSearchCV

# # Define the parameter grid
# param_grid = {
#     'n_estimators': [10 , 30 , 50, 100],   # Number of trees
#     'max_depth': [None, 10, 20, 30],  # Depth of each tree
#     'min_samples_split': [2, 5, 10],  # Min samples required to split a node
#     'min_samples_leaf': [1, 2, 4],    # Min samples required in a leaf node
#     'max_features': ['sqrt', 'log2']  # Number of features considered for splitting
# }

# # Initialize the Random Forest classifier
# rf = RandomForestClassifier(random_state=42)

# # Initialize GridSearchCV
# grid_search = GridSearchCV(
#     estimator=rf, 
#     param_grid=param_grid, 
#     cv=5,  # 5-fold cross-validation
#     n_jobs=-1,  # Use all available CPU cores
#     verbose=2  # Print progress
# )

# # Fit the model
# grid_search.fit(x_train, y_train)

# # Best parameters
# print("Best parameters found: ", grid_search.best_params_)

# # Best model
# best_rf = grid_search.best_estimator_

# # Evaluate on test data
# test_accuracy = best_rf.score(x_test, y_test)
# print("Test Accuracy after tuning: ", test_accuracy)









from sklearn.linear_model import LogisticRegression


lr = LogisticRegression( random_state=42  , multi_class= 'multinomial' , max_iter=100)


lr.fit(x_train , y_train)


y_test_pred = lr.predict(x_test)


y_train_pred = lr.predict(x_train)


from sklearn.model_selection import cross_val_score

cv_scores = cross_val_score(lr, x_train, y_train, cv=5, scoring='accuracy')
print(f"Cross-validation Accuracy: {cv_scores.mean():.4f} ± {cv_scores.std():.4f}")


from sklearn.metrics import accuracy_score
accuracy = accuracy_score(y_test, y_test_pred)
print(f"Test Accuracy: {accuracy:.4f}")
from sklearn.metrics import accuracy_score
accuracy = accuracy_score(y_train , y_train_pred)
print(f"Train Accuracy: {accuracy:.4f}")


from sklearn.model_selection import learning_curve
import matplotlib.pyplot as plt
import numpy as np

train_sizes, train_scores, test_scores = learning_curve(
    lr , x_train, y_train, cv=5, scoring="accuracy", train_sizes=np.linspace(0.1, 1.0, 10)
)

plt.figure(figsize=(8, 5))
plt.plot(train_sizes, train_scores.mean(axis=1), label="Training Score")
plt.plot(train_sizes, test_scores.mean(axis=1), label="Validation Score")
plt.xlabel("Training Size")
plt.ylabel("Accuracy")
plt.title("Learning Curve")
plt.legend()
plt.show()



import joblib

joblib.dump(lr , 'model.pkl')

joblib.dump(scaler , 'scaler.pkl')
joblib.dump(le2 , 'target_encoder.pkl')
# le_protocol_type = LabelEncoder()
# le_service = LabelEncoder()
# le_flag = LabelEncoder()
# le_duration_bin = LabelEncoder()
joblib.dump(le_protocol_type, 'le_protocol_type.pkl')
joblib.dump(le_service, 'le_service.pkl')
joblib.dump(le_flag, 'le_flag.pkl')
joblib.dump(le_duration_bin, 'le_duration_bin.pkl')




































































