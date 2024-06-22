const File = require("../models/File");
const cloudinary = require("cloudinary").v2

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
        console.log("Not able to upload th e file on server")
        console.log(error)
    }
}

function isFileTypeSupported(type, supportedTypes){
    return supportedTypes.includes(type)
}

async function uploadfileToCloudinary(file,folder){
    const options = {folder}
    return await cloudinary.uploader.upload(file.tempFilePath,options);
}

exports.imageUpload = async (req,res) =>{
    try{
        //data fetch
        console.log("foirld")
        const {name , tags, email} = req.body;
        console.log(name,tags,email)

        const file = req.files.imageFile;
        console.log(file)

        // validation 
        const supportedTypes = ["jpg","jpeg","png"];
        const fileType = file.name.split('.')[1].toLowerCase();

        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status({
                success:false,
                message:"Files Format not supported",
            })
        }
        //file format upload
        const response = await uploadfileToCloudinary(file,"Anurag");
        console.log(response)
        //db me entry seve karni hai
        // const fileData = await File.create({
        //     name, 
        //     tags,
        //     email,
        //     imageUrl
        // })

        res.json({
            success:true,
            message:'Image Successfully Uploaded',
        })

    }
    catch(error){
        console.error(error);
        res.status(400).json({
            success:false,
            message:'Something went wrong',
        })
    }
}