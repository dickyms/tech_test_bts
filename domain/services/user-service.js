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
                    message: "error",
                  });
            }
        }else{
            return responseHandler(res, {
                type: error,
                message: "internal server error",
              });
        }
        return responseHandler(res, {
            type: "success",
            message: respOrm,
          });
    } catch(err) {
        console.log("err = ", err);
        return res.status(500).send({err: "internal database error"});
    }
}
