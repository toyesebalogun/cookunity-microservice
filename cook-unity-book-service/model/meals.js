const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const mealSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    quantity:{
        type: Number,
        require: true
    }
},{
    timestamps: true
});

const BookingMeal = mongoose.model("BookingMeal", mealSchema);

module.exports = BookingMeal;