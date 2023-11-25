import S3 from "aws-sdk/clients/s3";

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

async function uploadFile(file, fileName) {
  const uploadParams = {
    Bucket: bucketName,
    Body: file,
    Key: fileName,
  };

  return s3.upload(uploadParams).promise();
}

function getFileUrl(fileKey) {
  return `https://${bucketName}.s3.${region}.amazonaws.com/${fileKey}`;
}
export { uploadFile, getFileUrl };
