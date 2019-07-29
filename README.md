# vue-csv

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

Additionally install
```
npm install -g json-server --save-dev
npm install -D json-server-auth
```
in the location of your choice and create db.json file  
Register the users as given in this link:  https://www.npmjs.com/package/json-server-auth    

Sample db.json file for this project contains something like this  
```
{
  "jsonData": [
   
  ],
  "users": [
    {
      "email": "sreejith@gmail.com",
      "password": "passwordhash",
      "id": 3
    }
  ]
}
```
"users" contain the registered users who can login and "jsonData" holds the converted json converted csv file.   

Start the server by running this command  
```
json-server db.json -m ./node_modules/json-server-auth
```

If you face issues like port or unable to run it it might be due to node modules or pacakage.json missing file problems
So you could run the following commands and start the json server again
```
npm init
npm install
```
