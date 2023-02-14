
const http=require('http');
const emitter = require('events');
const { EventEmitter } = require("stream");
// console.log(moment);

const server=http.createServer(async (req,res)=>{
   if(req.url==="/api/person"){
        const emitter=new EventEmitter();
        res.writeHead(200,{"Content-Type":"application/json"});
         
            emitter.on("persin_api",(person)=>{
                res.end(JSON.stringify(person));
                     
            });
            setTimeout(()=>{
                emitter.emit("persin_api",{"id":1,"firstName":"Mahdy","lastName":"mosave","age":26},
                    {"id":1,"firstName":"Mahdy","lastName":"mosave","age":26},
            
                )}
            ,2000);
    
}

        


//  const getPeople_api=()=>{
//     console.log('hello word');
//  }
//  setTimeout(getPeople_api,2000)


});

server.listen(2000,()=>{
    console.log('this running on port 2000');
});

