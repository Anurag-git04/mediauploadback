const File = require("../models/File");

//localfileUpload --> handler function

exports.localFileUpload = async (req,res)=>{
    try{

        //FETCH File
        const file = req.files.file;
        console.log("FILE AAGYI JEE ->",file);

        // current directry ko _dirname batata hai
        let path = __dirname + "/files/" + Date.now() + `${file.name.split('.')[1]}`;
        console.log("PATH-> ",path)

        file.mv(path, (err)=>{
            console.log(err)
        });

        res.json({
            success:true,
            message:'Local File Uploaded Successfullly',
        });
    }
    catch(error){
        console.log(error)
    }
}

exports.imageUpload = async (req,res) =>{
    try{
        //data fetch
    }
    catch(error){
        
    }
}