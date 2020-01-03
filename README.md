install express with express --no-view todoapp

move .\bin\www to root and rename to server.js

replace package.json start script to "start": "node ./server.js"

add script "dev": "nodemon ./server.js"

delete public folder

generate react app in client folder

change app.js client path to ./client/build

add proxy to client package.json with "proxy": "http://localhost:PORT", PORT beeing the one from express

modify client

npm i axios
npm i react-router-dom