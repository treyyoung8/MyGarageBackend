const express = require('express')
const router = express.Router()
const queries = require('../queries/cars_queries')

router.get('/', (req, res, next) => {
    queries.getAll().then(cars => res.status(200).send(cars))
})

router.get('/:id', (req, res, next) => {
    queries.getCarById(req.params.id).then(car => res.status(200).send(car))
})

router.post('/', (req, res, next) => {
    queries.createCar(req.body).then(cars => res.status(200).send(cars))
})

router.delete('/:id', (req, res, next) => {
    queries.deleteCar(req.params.id).then(res.sendStatus(204))
})

router.put('/:id', (req, res, next) => {
    queries.updateCar(req.params.id, req.body).then(updatedCar => res.json(updatedCar[0]))
})

module.exports = router