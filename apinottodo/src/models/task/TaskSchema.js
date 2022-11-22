import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    hr:{
        type: Number,
        default: 50,
        max: 168,
    },
    type:{
        type: String,
        default:'entry'
    }
},
    {
        Timestamps: true,
    }

)

export default mongoose.model("Task", taskSchema);