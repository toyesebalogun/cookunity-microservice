const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const assetSchema = new mongoose.Schema({
    type:{
        type: String,
        require: true
    },
    encodedFile: {
        type: String,
        require: true
    },
    extension: {
        type: String,
        require: true
    },
    fileName:{
        type: String,
        require: true
    },
    id:{
        type: Number,
        require: true
    }
});


const chefSchema = new mongoose.Schema({
    userId:{
        type: String,
        require: true
    },
    emailChef:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    chefType:{
        type: String,
        require: true,
        enum: ["Pastry Chef","Sauce Chef", "Vegetable Chef", "Meat Chef", "Pantry Chef", "Fry Chef", "Grill Chef", "Butcher Chef"]
    },
    certificate:{
        type: Boolean,
        require: true
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    address:{
        type: String,
        require: true
    },
    chefShortCode:{
        type: String,
        require: true
    },
    status:{
        type: String,
        enum:["Active","Terminated"],
        default: "Active"
    },
    profileImage: assetSchema
},{
    timestamps: true
});

const Chef = mongoose.model("Chef", chefSchema);

module.exports = Chef;