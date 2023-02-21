const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require('path');



const userController = require("../controllers/userController");

var upload= multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"uploads")
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname)); 
        }
        
    }),
});







router.get("/intro", userController.intro);
router.post("/user",upload.single('image'), userController.user);








module.exports = router;