export const logOut = async (req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message:'succesfully logged out'})
    } catch (error) {
        console.log(error)
       res.status(500).json({message:error}) 
    }
}