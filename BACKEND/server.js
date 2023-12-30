const upload = require('./middleware/file-upload');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const dotenv = require('dotenv');
dotenv.config();
/* Import your upload middleware */

app.use(bodyParser.json());
app.use(cors());

/* You POST route here */

/* Where image is the name of the property sent from angular via the Form Data and the 1 is the max number of files to upload*/
app.post('/api/v1/upload/', upload.array('image', 1), (req, res) => {
  /* This will be the response sent from the backend to the frontend */

  res.send({ image: req.file });
  //res.send({ name: req.body });

 });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server started on port $(POST)`);
});
