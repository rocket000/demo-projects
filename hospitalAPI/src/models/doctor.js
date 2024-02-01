import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type : String,
        required:true
    },
    password:{
        type : String,
        required:true
    }

});

const Doctor = mongoose.model('Doctor',doctorSchema);
export default Doctor;
