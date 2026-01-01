import mongoose from"mongoose"
import bcrypt from 'bcrypt';
const schema = mongoose.Schema

export const userSchema = new schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:[true,"please provide email"],
            unique:[true,"already used"]
        },
        password:{
            type:String,
            required:[true,"please provide password"],
            minlength:8,
        },
        profile:{
            type:String,
            default:""
        }
    },{timestamps:true}
)

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // Only hash if password is new or changed

  try {
    
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (err) {
    next(err);
  }
});


const User =mongoose.model("user",userSchema)
export default User