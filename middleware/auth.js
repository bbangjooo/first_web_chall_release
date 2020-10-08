const jwt=require('../src/jwt');

module.exports= async (req,res,next)=> {
    try{
        if(req.cookies===undefined) return res.redirect('/auth');
        let payload = await jwt.verify(req.cookies.token);
        req.data={
            username:payload.username
        }
        next();
    }catch(e){
        console.log(e);
        res.status(500).send("500 Internal Server Error")
    }
}