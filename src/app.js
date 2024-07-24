const express = require('express');
const app = express();
const port = 8081;
const knex = require('knex')(require('../knexfile.js')['development'])
app.get('/', (request, response) =>{
  response.send('application running')
}
)

app.listen(port, () =>{
  console.log('knex and express are running')
})

app.get('/pets', (request, response) =>{
  knex('pet')
    .select('*')
    .then(pets => {
      var petNames = pets.map(pet => pet.name)
      response.json(petNames);
    })
})