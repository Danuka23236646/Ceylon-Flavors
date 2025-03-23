import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({

    foodName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    totalPrice: {
        type: Number,
        required: true
    }
})

const order = mongoose.model("placeOrder",orderSchema)

export default cart;

