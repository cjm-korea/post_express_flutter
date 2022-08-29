# Postgresql-express(api)

## Project Architecture
<img src="https://user-images.githubusercontent.com/77873072/187266929-432265b7-b678-4741-9b55-00bf23868fc1.jpg" width="800" height="400">  

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