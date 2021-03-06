# Pets Server

Just a simple ME(R)N backend that I use as a boilerplate every time I need a REST api.

Uses nodemon on dev, it's meant to be connected to a MongoDB instance on [Atlas](https://www.mongodb.com/atlas/database).

In order to connect, provide your `MONGODB_URI` in your `.env` file.
Refer to the models in the code for the collections schema.

## Install and run :running_woman:

```bash
npm install
npm start
```
Who would have thank.

## Some example usage

### Get all pets

`curl http://localhost:3000/api/pets`

### Get one pet

`curl http://localhost:3000/api/pets/:id`

### Create a new pet

`curl -d '{"name": "gracie", "userId": "61dfe209dc3aba1b3a24dc61", "type": "dog", "age": 7, "features": ["alertedness", "tinyness"] }' -H "Content-Type: application/json" -X POST http://localhost:3000/api/pets`

### Delete a pet

`curl -X DELETE http://localhost:3000/api/pets/61dff1e7954e29cd7242c42a`

### Update a pet
`curl -d '{"name": "gracey", "userId": "61dfe209dc3aba1b3a24dc61", "type": "dog", "age": 8, "features": ["alertedness", "tinyness"]}' -H "Content-Type: application/json" -X PUT http://localhost:3000/api/pets/61dff3070f048b8508467e39`
