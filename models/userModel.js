import mongoose from "mongoose";

const User = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    lists: {
        type: [{
            title: {
                type: String, 
                required: true
            }, 
            description: {
                type: String,
                required: true
            }, 
            isDone: {
                type: Boolean,
                required: true
            }, 
            isStarred: {
                type: Boolean, 
                required: true
            }
        }], 
        required: true
    },
})

export default mongoose.model("User", User)