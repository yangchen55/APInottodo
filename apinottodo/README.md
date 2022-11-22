# RESTFull Api for not to do list

This api is create fro react not to do frontend application, here is the repo for the frontend `...`

## How to run

1. open your terminal at your development folder
2. Run `git clone ....`
3. Run `cd ....`
4. Run `npm install`
5. Run `npm start`

Now, you your server is runn at `http://localhost:8000`

## API details

This server applies the REST full principle to provide API.

All the api willl follow  `<rooturl>/v1/<resources end point>`

 ### Task api
 All the task related transaction of api will be request through `<rooturl>/v1/task`

 |# |PATH|METHOD|IS PRIVATE| DESCRIPTION |
 |- |----|------|----------|------------ |
 |1. | `/`| GET|NO| this endpoint will return all the task from database|
 |2. | `/`| POST |NO| Receives an object from the client and stores in the database|
 |4. | `/`| PUT|NO| Receives `_id` of specific oobject and the data to update |
 |1. | `/`| Delete|NO| Receives `_id` of delete oobject and the data to update|

