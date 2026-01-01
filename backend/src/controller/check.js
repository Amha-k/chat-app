export const checkAuth= (req,res)=>{
    try {
       res.status(200).json(req.user) 
    } catch (error) {
       res.status(500).json("message:server error") 
    }
}