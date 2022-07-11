var express = require('express');
var router = express.Router();
var user = require('../model/dataschema');

/* GET home page. */
router.post('/getdata', async function(req, res, next) {

    console.log(req.body);

    try {
      
        const getuser = await user.create(req.body);

        res.status(201).json({

            data:getuser

        })


    } catch (error) {
      
        res.send(error.message);
    }

});

router.get('/getdata', async function(req, res, next) {

  console.log(req.body);

  try {
    
      const getuser = await user.findOne();

      res.status(201).json({

          data:getuser

      })


  } catch (error) {
    
      res.send(error.message);
  }

});


module.exports = router;
