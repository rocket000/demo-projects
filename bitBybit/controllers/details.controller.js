const Task = require('../models/task');
const { json } = require('express');
// controller got get details request
module.exports.details = function(req,res){
    Task.find({},function(err,tasks){
        if(err){
            Console.log('Error in fetching the Tasks');
            return;
        }
        return res.render('details',{
            title:"My History",
            task_list:tasks
        });
    })
}
// Updating the database for the request
module.exports.update = function(req,res){
    let id = req.query.id;
    // finding the task
    Task.findById(id,function(err,task){
        if(err){
            console.log("Task not found");
            return;
        }
        var newTask=task
        let day = req.query.day;
        let val=req.query.val;
        for (let prop in newTask.days) {
            if(prop==day){
                if(val=="none"){
                    newTask.days[day]="Completed";
                    newTask.streak++;
                }else if(val=="Completed"){
                    newTask.days[day]="I'll do it later";
                    newTask.streak--;
                }else{
                    newTask.days[day]="none";
                }
            }
            
        }
        // updating the task
        Task.findByIdAndUpdate(id,newTask,function(err,newCreatedTask){
            if(err){
                console.log("Error in Updating");
                return;
            }
            return res.redirect('back');
        })
        
    });
}