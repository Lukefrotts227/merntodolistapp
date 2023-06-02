const express = require('express')
const router = express.Router()

const Pers = require('../../models/Pers'); 

router.get('/test', (req, res) => res.send('pers route testing.')); 


module.exports = router; 