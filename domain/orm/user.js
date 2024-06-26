const conn = require('../repositories/mongo');

exports.Store = async ( username, email, password ) =>{
    try{
        const hashPassword =  await bcrypt.hash(this.password, 10);
        const datacenter = await new conn.db.connMongo.User({
            email: email,
            password: hashPassword,
            username: username
        });
        datacenter.save();
        return true
    }catch(err){
        console.log(" err orm-user.Store = ", err);
        return err
    }
}

exports.findUser = async (username) => {
    try{
        return await conn.db.connMongo.User.findOne({username});
    }catch(err){
        console.log(" err orm-user.GetById = ", err);
        return err
    }
}