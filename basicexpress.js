const express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.send("Express JS");
});

let server = app.listen(8000, () => {
  console.log(`Express App is running`);
}); 


// // app.post("/http",(req,res)=>{
// //     const newData=Object.assign(req.body);
// //     readFile.push(newData);
// //     fs.writeFile('./personDetails.json',JSON.stringify(readFile),(err,data)=>{
// //         res.json({data})
// //     } )

// // });

// // console.log(readFile);

// // const responseTime= require('response-time');

// // app.use(responseTime((req,res,time)=>{
// //   console.log(`Time: ${time}`);
// // }))

// // app.get('/',(req,res)=>{
// //   res.send(`Hello`);
// // })

// // app.use((req,res,next)=>{
// //   console.log(`Inside middleware`);
// //   next();
// // })

// // app.get('/',(req,res)=>{
// //   res.send(`Hello`);
// // })

// // const requestTime =((req,res,next)=>{
// //     req.requestTime= Date.now();
// //     next();
// // })

// // app.use(requestTime);

// // app.get('/',(req,res)=>{
// //   // res.send(`Modified request`);
// //   let responseText = '';
// //   responseText+=`<small>Requested time : ${req.requestTime}</small>`;
// //   res.send(responseText);
// // })

// // const cookieParser = require("cookie-parser");

// // async function cookieValidator(cookies) {
// //   try {
// //     await externallyValidateCookie(cookies.testCookie);
// //   } catch {
// //     throw new Error("Invalid cookies");
// //   }
// // }

// // async function validateCookie(req,res){
// //     await cookieValidator(req.cookies);
// //     next();
// // }

// // app.use(cookieParser());
// // app.use(validateCookie);

// // app.use((err,req,res,next)=>{
// //    res.status(400).send(err.message);
// // })

// // app.listen(7000);

// // app.use("/path/:id", (req, res,next) => {
// //   console.log(`user`, req.method);
// //   next();
// // });

// // app.get("/path/:id", (req, res) => {
// //   res.send(`userid - ${req.params.id}`);
// // });

// // app.use("/path/:id", (req, res,next) => {
// //     console.log(`user-originalUrl`, req.originalUrl);
// //     next();
// //   },(req,res,next)=>{
// //     console.log(`user-request method`,req.method);
// //     next();
// //   });


// // app.get("/path/:id", (req, res,next) => {
// //   console.log(`user-originalUrl`, req.originalUrl);
// //   next();
// // },(req,res,next)=>{
// //   res.send(`user-request method- ${req.method}`);
// // });
// // app.get(("/path/:id", (req, res,next) => {
// //   res.send(`user-id - ${req.params.id}`);
// // }))


// // app.use('/',(req,res,next)=>{
// //     res.setHeader('env',true);
// //     next();
// // })


// // const helmet = require('helmet');
// // app.use(helmet());


// var express = require('express');  
// var cookieParser = require('cookie-parser');  
// var app = express();  
// app.use(cookieParser());  
// app.get('/cookieset',function(req, res){  
// res.cookie('cookie_name', 'cookie_value');  
// res.cookie('company', 'javatpoint');  
// res.cookie('name', 'sonoo');  
  
// res.status(200).send('Cookie is set');  
// });  
// app.get('/cookieget', function(req, res) {  
//   res.status(200).send(req.cookies);  
// });  
// app.get('/', function (req, res) {  
//   res.status(200).send('Welcome to JavaTpoint!');  
// });  
// var server = app.listen(8000, function () {  
//   var host = server.address().address;  
//   var port = server.address().port;  
//   console.log('Example app listening at http://%s:%s', host, port);  
// });  



// app.use(cookieParser());
// app.get('/cookieset',(req,res)=>{
//   res.cookie('username','janu');
//   res.cookie('loginStatus',true);
//   res.status(200).send('Cookie is set');
// })

// app.get('/cookieget',(req,res)=>{
//   res.status(200).send(req.cookies);
// })

// app.get('/',(req,res)=>{
//   res.status(200).send('Cookies');
// })


// app.get('/deletecookie',(req,res)=>{
//   res.clearCookie('name');
//   res.send('Cookie deleted');
// })
// app.listen(8000);



app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Successfull Get Request')
})


app.post('/post',(req,res)=>{
  res.send('Successfull Post Request')
})


app.put('/put',(req,res)=>{
  res.send('Successfull Put Request')
})

app.delete('/delete',(req,res)=>{
  res.send('Successfull Delete Request')
})

app.listen(3000);
