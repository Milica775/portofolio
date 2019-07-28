//uvodimo module
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var hotelSchema = new Schema({
    name         : String,
    address      : String,
    zip          : String,
    city         : String,
    state        : String,
    rate         : Number,
    roomCount    : Number
});

hotelSchema.methods.cancelHotel = function(callback) {
    this.roomCount += 1;
    this.save(callback);
};

hotelSchema.methods.bookHotel = function(callback) {
    this.roomCount -= 1;
    this.save(callback);
};

module.exports = mongoose.model('Hotel', hotelSchema);