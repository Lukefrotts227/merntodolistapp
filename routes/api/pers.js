const express = require('express')
const router = express.Router()

const Pers = require('../../models/Pers'); 

router.get('/test', (req, res) => res.send('pers route testing.')); 


router.get('/', (req, res) => {
    Pers.find()
    .then(perss => res.json(perss))
    .catch(err => res.status(404).json({ nopeoplefound: 'No People found' })); 
}); 


router.post('/', (req, res) => {
    Pers.create(req.body)
    .then(pers => req.json({msg: 'Person added!'}))
    .catch(err => res.status(400).json({ error: 'Unable to add this person'}));
});


router.put('/:id', (req, res) => {
    Pers.findByIdAndUpdate(req.params.id, req.body) 
    .then(pers => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
      );
});


router.delete('/:id', (req, res) => {
    Pers.findByIdAndRemove(req.params.id, req.body)
    .then(pers => res.json({mgs: 'Person entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a book' }));
});


module.exports = router; 