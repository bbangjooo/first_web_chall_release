const jwt=require('../src/jwt');

module.exports= async (req,res,next)=> {
    try{
        if(req.cookies.token===undefined||req.cookies.token==="") return res.redirect('/auth');
        console.log(req.cookies.token);
        let payload = await jwt.verify(req.cookies.token);
        console.log("here????")
        req.data={
            username:payload.username
        }
        next();
    }catch(e){
        console.log(e);
        res.status(500).send("500 Internal Server Error")
    }
}