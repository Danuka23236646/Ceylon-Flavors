import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
    Name: String,
    email: String,
    phone: String,
    date: String,
    time: String,
    people: String,
    notes: String
});

const CustomerModel = mongoose.model("Customers", CustomerSchema);

export default CustomerModel;