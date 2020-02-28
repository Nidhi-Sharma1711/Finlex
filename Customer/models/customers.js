const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const customerSchema = new Schema({

    customerName: {
        type: String,
        required: true

    },

    customerAddress: {
        type: String,
        required: true
    },

    totalPrice: {
        type: Currency,
        required: true,
        min: 0
    },

    brokerName: {
        type: String,
        required: true
    },

    brokerAddress: {
        type: String,
        required: true
    },

    contractStartDate: {
        type: Date,
        required: true
    },

    contractEndDate: {
        type: Date,
        required: true
    }
},
    {

        timestamps : true
    }
);

var Customers = mongoose.model('Customer', customerSchema);

module.exports = Customers;