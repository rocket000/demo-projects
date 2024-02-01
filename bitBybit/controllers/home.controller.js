const Task = require('../models/task');
// homepage controller
module.exports.home = function(req,res){
    Task.find({},function(err,tasks){
        if(err){
            Console.log('Error in fetching the habits');
            return;
        }
        return res.render('home',{
            title:"bit_by_bit",
            task_list:tasks
        });
    })
    
}
// controller to create a habit
module.exports.create = function(req,res){
    let days = {
        one:"none",
        two:"none",
        three:"none",
        four:"none",
        five:"none",
        six:"none",
        seven:"none",
    }
    Task.create({
        task : req.body.task,
        description:req.body.description,
        frequency:req.body.frequency,
        date:Date(),
        days:days
        
    },function(err,newTask){
        if(err){
            console.log('Error in creating task',err);
            return;
        }
        
        console.log(newTask);
        return res.redirect('back');
    });
}
// controller to delete a task
module.exports.delete = function(req,res){
    let id = req.query.id;
    Task.findByIdAndDelete(id,function(err){
        if(err){
            console.log("Error in deleting Task");
            return;
        }
        return res.redirect('back');

    });
}