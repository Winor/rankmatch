# Tools
Admin app to manage users

## Prerequisites
generate a private key file for your service account:

    In the Firebase console, open Settings > Service Accounts.

    Click Generate New Private Key, then confirm by clicking Generate Key.

    Securely store the JSON file containing the key.


Set the environment variable ``GOOGLE_APPLICATION_CREDENTIALS`` to the file path of the JSON file that contains your service account key.

for example:

```
export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/service-account-file.json"
```

## Project setup
```
npm install
```

## Project Run
```
npm start
```
