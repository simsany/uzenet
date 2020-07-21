var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Commens = require("./models/comment");

app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://sanyika:Nem99@cluster0.hg5xp.mongodb.net/orders?retryWrites=true&w=majority")
methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.get("/",(req,res)=>{Commens.find({},(err,found)=>{
	if(err){console.log(err)}
	
	else{res.render("show.ejs",{comments:found})}
	
	
})})

app.post("/",(req,res)=>{Commens.create(req.body.comment,(err,newly)=>{
	if(err){console.log(err)}
	
	else{res.redirect("/")}
	
	
})})
	
	
	

app.delete("/:id",(req,res)=>{Commens.findByIdAndRemove(req.params.id,(err,found)=>{
	if(err){console.log(err)}
	
	else{res.redirect("/")}
	
	
})})
	
	


























	app.listen(process.env.PORT);



