var fs = require('fs');
var path = require('path');


var _path =path.join(__dirname+'/../data/id.json');

exports.sendData=(req:any,res:any)=>{
   
    fs.readFile(_path,'utf8',async function(err:any,data:any){
        if(err){
           console.log(err);
           return res.status(404).send('Data  not found');
        }
        var jsonObject =[];
        if(data){
            jsonObject = JSON.parse(data);
        }

        return res.send(jsonObject);

    })
}