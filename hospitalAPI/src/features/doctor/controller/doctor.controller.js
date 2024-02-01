// Please don't change the pre-written code
// Import the necessary modules here
import jwt from 'jsonwebtoken';
import Doctor from '../../../models/doctor.js';


export const registerUser = (req, res, next) => {
  const userData = req.body;
  Doctor.create({
    name:userData.name,
    username:userData.username,
    password:userData.password   
},function(err,user){
    if(err){
        res.status(400).json({ status: "failure", msg: "invalid user details" });
    }
    console.log(user);
    res.status(201).send({ status: "success", user });
});
};

export const loginUser = (req, res,next) => {
    const userData = req.body;
    Doctor.find({"username":userData.username,"password":userData.password},function(err,doctor){
        console.log(doctor);
        if(doctor.length==0){
            res.status(400).json({ status: "failure", msg: "invalid user details" });
        }else{
            const token = jwt.sign(
                {
                  userID: doctor.id,
                  email: doctor.username,
                },
                'AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz',
                {
                  expiresIn: '1h',
                }
              );
              res.cookie("jwtToken", token, {delegate:doctor.name,httpOnly: true })
                .status(200)
                .json({ status: "success", msg: "login successfull", token });
        }
        
    })
};
