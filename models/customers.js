const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    img: { type: String, required: true },
    pullbox: [{
        type: Schema.Types.ObjectId,
        ref: 'Comics',
        isAccepted: null
    }]
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;