# Postgresql-express(api)

## Project Architecture

## Project Writing in
- win10
- postgresql 10.22
- pgAdmin4
- vscode

## Configure Database Setting
Configure db setting in ./app/config/db.config.js

## Use API
http request in **ip/PORT/api/toilets/`command`**  
`command` is reference ./app/routes/toilet.routes/js

API function is in ./app/controller.js  
#

## HOW to Implement realtime database?
- using express(API) = data update request from arduino
- socket.io = data update and send realtime data to front using socket.io