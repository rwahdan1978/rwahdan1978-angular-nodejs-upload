   const aws = require('aws-sdk');
   const multer = require('multer');
   const multerS3 = require('multer-s3');
   const dotenv = require('dotenv');
   dotenv.config();
    
   aws.config.update({
    secretAccessKey: ,
    accessKeyId: ,
    region: 'ap-south-1'
   });
   
   const s3 = new aws.S3();
   const upload = multer({
   storage: multerS3({
    acl: 'public-read',
    s3,
    bucket: 'angular-upload-files-2023-2024',
    key: function(req, file, cb) {
      req.file = file.originalname;
      //include the folder created before uploading files...
      cb(null, "properties2023/" + file.originalname);
     }
    })
   });

   module.exports = upload;
