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
npm install -D json-server-auth
```
in the location of your choice and create db.json file
Register the users as given in this link:  https://www.npmjs.com/package/json-server-auth
Sample db.json file for this project contains something like this
{
  "jsonData": [
   
  ],
  "users": [
    {
      "email": "sreejith@gmail.com",
      "password": "$2a$10$doAZ5nZ8vqwPcrzApipu0edzUSWjwL3WQ0inOTHQ9g3yd04jc/62m",
      "id": 3
    }
  ]
}

"users" contain the registered users who can login and "jsonData" holds the converted json converted csv file.
Start it by running this command 
```
json-server db.json -m ./node_modules/json-server-auth
```
