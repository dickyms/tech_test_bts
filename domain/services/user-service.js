const ormUser = require('../orm/user');
const { responseHandler } = require('../../utils')

exports.Store = async (req, res) =>{
    try{
        const email = req.body.email;
        const password = req.body.password;
        const username = req.body.username;
        if( email && password && username ){
            respOrm = await ormUser.Store( username, email, password );
            if(respOrm.err){
                return responseHandler(res, {
                    type: "validation",
                    message: "user has been assigned as admin.",
                  });
            }
        }else{
            code = 500
        }
        return res.status(code).send({
            msg: "success"
        });
    } catch(err) {
        console.log("err = ", err);
        return res.status(500).send({err: "internal database error"});
    }
}
