const jwt = require('jsonwebtoken');
const secret='5UP3R_DUP3R_53CR37';

module.exports = {
    async sign(data){
        return (await jwt.sign(data,secret,{algorithm:'HS256'}))
    },
    async verify(token){
        return (await jwt.verify(token,secret,{algorithm: 'HS256'}))
    }
}