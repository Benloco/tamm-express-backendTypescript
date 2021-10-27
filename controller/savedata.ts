
var fs = require('fs');
var path = require('path');


var object:any =[];
var _path =path.join(__dirname+'/../data/id.json');

   
exports.saveJsonToFile=(req:any,res:any)=>{
    const {id} = req.params;
   
    fs.readFile(_path,'utf8',async function(err:any,data:any){
        if(err){
           
           return res.status(404).send('file  not found');
        }
      
       if(data.length!=0){
          
        object = JSON.parse(data);
       }
      
       
        req.body.id=id;
        var IdExists= object.findIndex((item:any)=>item.id===id);
        
       
        if(IdExists>-1){
            object.splice(IdExists,1);
            object.push(req.body);
        }else{
        object.push(req.body);
        }
        
        var json = JSON.stringify(object);
       
       await fs.writeFileSync(_path, json, 'utf8', function(err:any){
            if(err) return res.send(err);
        });
        return res.send('data saved')

   
    })
  
}




