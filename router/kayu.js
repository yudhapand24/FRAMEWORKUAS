const express = require('express')
const router = express.Router()
const kayucontroller = require('../controller/kayu')
const kayu = require('../controller/kayu')


router.route('/kayu')
    .get(kayucontroller.index)
    .post(kayucontroller.tambah)

router.put('/kayu/:id', function(req, res) {
    const id = req.params.id
    kayu.filter(mg => {
        if (mg.id == id) {
            mg.id = id
            mg.chkayu = req.body.chkayu
            mg.volkayu = req.body.volkayu

            return kayu
        }
    })
    res.json(kayu)
})
router.delete('/kayu/:id', function(req, res) {
    const id = req.params
    res.send(id)
})
module.exports = router