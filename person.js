
const http=require('http');
const fs= require('fs');
const path=require('path');
const moment=require('moment');
const emitter = new EventEmitter();
// console.log(moment);

const server=http.createServer(async (req,res)=>{
   

    // console.log(req.url);
    // console.log(req.url=='/');
    // console.log(req.url=='/api');
    // console.log(req.url == '/api/current-time');
    // console.log(getCurrentTime);
    if(req.url == '/api/current-time'){
        // console.log(getCurrentTime());
        res.end(await getCurrentTime());
    }else if(req.url==="/api/person"){
        
        res.writeHead(200,{"Content-Type":"person_application/json"});
        
        emitter.on('personReady', (person)=>{

            res.end(JSON.stringify({person}));

        })
        setTimeout(()=>{
            emitter.emit("personReady",{"id":1,"fname":"mahsa","lname":"sahebi","age":32});
        },2000);
    }



});

async function getCurrentTime(){
    // return moment().format('YYYY-MM-DD hh:mm:ss');
    // console.log(moment);
    //  console.log(moment());
   return moment().format('YYYY-MM-DD hh:mm:ss');
}





server.listen(2000,()=>{
    console.log('this running on port 2000');
});

