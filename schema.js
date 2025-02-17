const mongoose = require("mongoose") ;

const CommentSchema = new mongoose.Schema({
    Username : {
        type : String ,
        required : true ,
        minlength :  2 
    } ,
    Message : {
        type : String ,
        required : true 
    } ,
    CommentedAt : {
        type : Date ,
        default : Date.now 
    }
})
const BlogSchema = new mongoose.Schema({
    Title : {
        type : String , 
        minlength : 5 ,
        unique : true 
    }
    ,
    Content : {
        type : String ,
        minlength : 50 
    } 
    ,
    Author : {
        type : String ,
        require : true 
    }
    ,
    Tags : {
        type : [String] ,
        default : [] 
    },
    Category : {
        type : String , 
        default : ["General"]
    }
    ,
    Likes : {
        type : [String] ,
        default : []
    } 
    ,
    Comments : [CommentSchema ]
    ,
        Created_At : {
        type : Date ,
        default : Date.now
    }
    ,
    Updated_At : { 
        type : Date
    }  
} , {
    timestamp : true 
})

const Blog = mongoose.model("Blog" , BlogSchema) ;
module.exports = Blog ;