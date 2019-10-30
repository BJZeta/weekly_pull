const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storeSchema = new Schema({
    storeName: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profilePic: { type: String, required: true },
    customers: [{
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    }]
});

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;