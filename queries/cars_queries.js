const db = require('../database-connection')

module.exports = {
    getAll() {
        return db('cars')
    },
    getCarById(id) {
        return db('cars').where('id', id).then(car => car[0])
    },
    createCar(newCar) {
        return db('cars').insert(newCar).returning('*')
    },
    deleteCar(id) {
        return db('cars').where('id', id).delete()
    },
    updateCar(id, car) {
        return db('cars').where('id', id).update(car).returning('*')
    }
}