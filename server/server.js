const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname,'..','/public');
const port = process.env.PORT;

var exports=module.exports={};
exports.AddNumber=(a,b)=>{
return a+b;
};
exports.tutorial = () =>{
    console.log('Hello world this is node js tutorial');
};

console.log(exports.AddNumber(1,4));
console.log(path.join(publicPath,"index.html"));

app.use(express.static(publicPath));

app.get("*",(request, response) => {
    response.sendfile(path.join(publicPath,"index.html"));
});

app.listen(port, () => {
    console.log('Server is up');
});
