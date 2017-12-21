var express = require('express');
var bodyParser = require('body-parser');
router = express.Router();

var candies = [{"id":1,"name":"Chewing Gum","color":"Red"},{"id":2,"name":"Pez","color":"Green"},{"id":3,"name":"Marshmallow","color":"Pink"},{"id":4,"name":"Candy Stick","color":"Blue"}]

//What would need to go into candies
//in order to pass our first test?

router.get('/', function(req,res) {
	res.json(candies);
	// What would go here? 
	// Hint: we want all candies in JSON format
});

// Fill out the rest of the routes here
// get by an id
router.get('/:id', function(req, res){
	var parsedData = parseInt(req.params.id);
	console.log(typeof(parsedData))
	for(let i =0; i < candies.length; i++){
		if(parsedData === candies[i].id){
			res.json(candies[i]);
		}
	}
})

// post route
router.post('/', function(req, res){
	req.body.id = candies.length + 1;
	candies.push(req.body);
	console.log(req.body);
	res.send('saving candy');
});

// update route
router.put('/:id', function(req, res){
	  // res.send(req.body);
	  console.log(req.params.id);
	  for(let i = 0; i < candies.length; i++){
        if(candies[i].id == req.params.id){
			// req.body.id = i + 1;
		
            candies[i] = req.body;
            res.send(candies);
        }
    }
    res.send("404 Error: Candy not found.");
});

//destroy/delete route

router.delete('/:id', function(req, res){
	console.log(req.params.id);
	for(let i = 0; i < candies.length; i++){
	  if(candies[i].id == req.params.id){
		  candies[i] = req.body;
		  res.send(candies);
	  }
	  }
});
module.exports = router;