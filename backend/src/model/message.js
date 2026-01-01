import mongoose from "mongoose";

const schema = mongoose.Schema

export const messageSchema = new schema(
    {
        senderId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        receiverId: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true,
        },
        text:{
            type:String
        },
        image: {
            type: String,
        }

    },
{timestamps:true}
    
)

const message = mongoose.model("message",messageSchema)

export default message