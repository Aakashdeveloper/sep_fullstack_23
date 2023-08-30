let express = require('express');
let app = express();
let port = 9112

//req > what we send to server params,queryParam,body
//res > what we get from server

let data = [
    {
      "_id": "6187738a62a1816f8858634e",
      "location_id": 4,
      "location_name": "Bibvewadi, Pune",
      "state_id": 2,
      "state": "Maharashtra",
      "country_name": "India"
    },
    {
      "_id": "6187738a62a1816f8858634d",
      "location_id": 1,
      "location_name": "Ashok Vihar Phase 3, New Delhi",
      "state_id": 1,
      "state": "Delhi",
      "country_name": "India"
    },
    {
      "_id": "6187738a62a1816f8858634f",
      "location_id": 8,
      "location_name": "Jeevan Bhima Nagar, Bangalore",
      "state_id": 3,
      "state": "Karnataka",
      "country_name": "India"
    },
    {
      "_id": "6187738a62a1816f88586350",
      "location_id": 13,
      "location_name": "Sector 13, Chandigarh",
      "state_id": 4,
      "state": "Punjab",
      "country_name": "India"
    }
]

app.get('/',(req,res) => {
    res.send('Hii from express code')
})

app.get('/location',(req,res) => {
    res.send(data)
}) 


app.listen(port,(err) => {
    if(err) throw err;
    console.log('listening on port '+port)
})