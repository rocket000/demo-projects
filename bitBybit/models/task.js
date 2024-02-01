const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task:{
        type : String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:String
    },
    streak:{
        type:Number,
        default:0
    },
    days:{
        one:{
            type:String,
            default:null
        },
        two:{
            type:String,
            default:null
        },
        three:{
            type:String,
            default:null
        },
        four:{
            type:String,
            default:null
        },
        five:{
            type:String,
            default:null
        },
        six:{
            type:String,
            default:null
        },
        seven:{
            type:String,
            default:null
        }
    }

});

const Task = mongoose.model('Tasks',taskSchema);

module.exports = Task;