const {StatusCodes} = require('http-status-codes') ;
const {Booking} = require('../models/booking');
const CrudRepository = require('./crud-repositories');

class BookingRepository extends CrudRepository{
    constructor(){
        super(Booking) ;
    }
}

module.exports = BookingRepository ;