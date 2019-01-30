exports.up = function(knex, Promise) {
    return knex.schema.createTable('cars', (car) => {
        car.increments('id')
        car.integer('vin')
        car.integer('year')
        car.string('make')
        car.string('model')
        car.string('car_img_url')
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cars')
}
