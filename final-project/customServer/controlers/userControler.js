    const bcrypt = require("bcrypt")
    const jwtPromises = require("../lib/jwtPromisifier")
    const {secret} = require("../config")


    const userModel = require("../models/user")




    async function userCreationPost(req,res){
    const data = req.body
    
    const { password, rePassowrd, ...rest } = data;

    const hash = await bcrypt.hash(password, 10)

    const body = Object.assign({}, rest);
    const user = await userModel.create({...body, "password": hash})

    const token = await jwtPromises.sign({email: rest.email}, secret)
    res.send(JSON.stringify({
        "token": token,
        "_id": user._id,
        //'firstName': rest.firstName,
        //'lastName': rest.lastName,
        //'imageUrl': rest.imageUrl,
        //'email' : rest.email
}))
    res.end()
}




async function userLogin(req, res) {
    try {
      const { email, password } = { ...req.body };
  
      if (!email || !password) {
        throw new Error("Email and password are required");
      }
  
      const user = await userModel.findOne({ email: email });
      if (!user) {
        throw new Error("Wrong email or password");
      }
  
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error("Wrong email or password");
      }
  
      const token = await jwtPromises.sign({ email: email }, secret);
  
      res.send(
        JSON.stringify({
          token: token,
          _id: user._id,
        })
      );
    } catch (e) {
      res.status(401).send({ error: "Unauthorized: " + e.message });
    }
  }
  




module.exports = {userCreationPost, userLogin}