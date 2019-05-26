const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname,'..','/public');
const port = process.env.PORT || 3000;

// var exports=module.exports={};
// exports.AddNumber=(a,b)=>{
// return a+b;
// };

// console.log(exports.AddNumber(1,4));

app.use(express.static(publicPath));

app.get("*",(request, response) => {
    response.sendfile(path.join(publicPath,"index.html"));
});

app.listen(port, () => {
    console.log('Server is up ');
});
