const express = require('express')
const router = express.Router()
const Singer = require('../models/singers')

// Getting all
router.get('/', (req, res) => res.json(Singer))
 
// Getting One
router.get('/:id', (req, res) => {
// res.send (req.params.id);
const exist = Singer.some(Singer => Singer.id === parseInt (req.params.id)) ;
if (exist) {
    res.json(Singer.filter(Singer => Singer.id === parseInt(req.params.id)));
} else {

res.status (400). json({ msg:`No Singer with the id ${req. params.id} `});
}
});




// Creating one
router.post('/', async (req, res) => {
  const Singer = new Singer({
    id: req.body.id,
    name: req.body.name,
    part: req.body.part,
    phone: req.body.email,
    status: req.body.status
  }) 
  try {
    const newSinger = await Singer.save()
    res.status(201).json(newSinger)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Update Singer
router.put('/:id', (req, res) => {
    const exist = Singer.some(Singer => Singer.id === parseInt (req.params.id));
    if (exist) {
        const updSinger = req.body;
         Singer. forEach(Singer => {
    if (Singer.id === parseInt(req.params.id))
    {
        Singer.name = updSinger.name ? updSinger.name : Singer.name;
        Singer.email = updSinger.phone? updSinger.phone : Singer.phone;
        res.json({ msg:'Singer updated', Singer });
    }
    });
}
    else {
    res.status (400). json({ msg:` No Singer with the id $frea.params.id}`});
    }
});

// Delete Singer
router.delete('/:id', (req, res) => {
    const exist = Singer.some(Singer => Singer.id === parseInt (req.params.id));
    if (exist) {
    res.json({ msg:'Singer deleted' , Singer: Singer.filter (Singer => Singer.id !== parseInt(req.params.id))});
    } 
    else {
        res.status(400).json({ msg: `No Singer with the id ${req.params.id}`});
    }
    });



module.exports = router