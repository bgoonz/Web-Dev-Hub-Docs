---
description: >-
  Express.js is a Javascript framework based on Node.js, that supports
  development both on the server side and the user side. Express is a very fast,
  essential, assertive, and moderate web framework of
---

# ExpressJS Overview



## ExpressJS Overview

**Topics Covered**

* Feature of Express
* How does Express work?
* Why Express?

#### **Features of Express Framework:**

*  Express can be used to design a single-page, multi-page and hybrid web applications.
* Express allows to setup middlewares to respond to HTTP Requests.
* Express defines a routing table which is used to performs different actions based on HTTP method and URL.
* Express allows to dynamically render HTML Pages based on passing arguments to templates.

#### **How does Express work?**

Express applications work by sending a sequence of calls to the middle tier. The middleware has of two-course access to request objects and response objects. It means that using the Express framework gives you control over all request and response objects. This gives you the power to add the sessions, add the post parameters, and template through ejs.

#### **Why Express?**

* Ultrafast Input/Output.
* Asynchronous and single threaded.
* MVC like structure.
* Robust API makes routing very easy.

**How does Express look like :**

Let’s see a basic express.js Example-

**express.js**

```text
var express = require('express');  
var app = express();

app.get('/', function (req, res) {  
    res.send('Welcome to Pabbly.com!');  
});

var server = app.listen(8000, function () {  
    var host = server.address().address;  
    var port = server.address().port;  
    console.log('Example app listening at http://%s:%s', host, port);  
});Copy
```

**Result :**

```text
Welcome to Pabbly.com!
```





## ExpressJS Restful APIs

ExpressJS RESTful API is an application program interface \(API\) that uses HTTP requests to GET, PUT, POST and DELETE data.

**Topics Covered**

* What is ExpressJS Restful API?
* Why we need ExpressJS Restful APIs.
* Advantages
* Initialize npm and install the  modules
* Creates  a  New User
* Returns All the Users From the Database
* Gets a Single User From the Database
* Deletes a  User From the Database
* Updates a Single User in  the Database

**Why we need ExpressJS Restful APIs**

The World Wide Web itself is based on HTTP and is based on RESTful API architecture. Mostly all the modern web browsers are RESTful API client. RESTful API applications use HTTP methods \(GET, POST, PUT, and DELETE\) to perform CRUD operations.

#### Advantages

1. Quick & easy development  
2. High performance  
3. Run on single thread to handle multiple concurrent requests  
4. Easy to write APIs and interaction code  
5. Streaming support  
6. Monitoring possibilities  
7. Authentication support  
8. Lightweight, fast and scalable

Here is the restful API Design with Node

**Initialize npm and install the following modules:**

```text
npm init
npm install express --save
npm install mongoose --save
npm install body-parser --saveCopy
```

Now, we will use ExpressJS for developing an application. It is a node.js framework. We will use Mongoose. Mongoose is an ORM \(Object Relational Mapper\). We use an ORM to simplify the transfer of data between our application and the database. The body-parser module is a middleware we are going to use, to parse our data sent through HTTP requests.

To start developing the application, create a  file and name it as  _app.js_. Write following code in your _app.js_ file.

_app.js_

```text
var express = require('express');
var app = express();
module.exports = app;Copy
```

_app.js_ will be used for configuring the app. All the logic will be placed in the directory.

We will use a _module.exports_ module to make the application’s object visible to the program when we call it using _require\(\)_. Now have to create _Routes_ to listen to the application. For that, we will create another file, name it as  _server.js_, and we will write following code in our  _server.js_ file.

_server.js_

```text
var app = require('./app');
var port = 3000;
var server = app.listen(port, function() {
console.log('server listening on port ' + port);
});Copy
```

Create a new file and name it as _db.js_,  This file’s Code will be used to store your database connection.

_db.js_

```text
var mongoose = require('mongoose');
mongoose.connect('mongodb://yourDatabaseURI');Copy
```

 add a require\(\) in the app.js, like this 

_app.js_

```text
var express = require('express');
var app = express();
var db = require('./db');
module.exports = app;Copy
```

Create a new folder name it _user.js_. This folder will contain the _schema_ and _model_. We Will start by creating a user _model_. This _model_ will be used as a _schema\(_blueprint\) showing what all users in our database will look like. Create a file named _user.js_ and write code into your _user.js_ file.

_user.js_

```text
var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');Copy
```

Create another file, and name it _UserController.js_. It will contain the actions which control the flow of data to and fro the database.

_UserController.js_  
****

```text
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());
var User = require('./User');
module.exports = router;Copy
```

**Create a New User**

```text
router.post('/', function (req, res) {
    User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        },
        function (err, user) {
            if (err) return res.status(500).send("Error in adding the information to the database.");
            res.status(200).send(user);
        });
});Copy
```

**Returns All the Users in the Database**

```text
router.get('/', function (req, res) {
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("Error in finding the users.");
        res.status(200).send(users);
    });
});
module.exports = router;Copy
```

Now, you need to let the application know that it has a _UserController.js._ Add this to your _app.js._

_Your previous app.js_ file

```text
var express = require('express');
var app = express();
var db = require('./db');Copy
```

Add These two  Lines to the _app.js_ file  
****

```text
var UserController = require('./user/UserController');
app.use('/users', UserController);
module.exports = app;Copy
```

**Get a Single User From the Database**

UserController.js

```text
router.get('/:id', function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("Error in finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
});Copy
```

We have now added another GET request, the router.get method’s first parameter. It now has a value consist of a colon followed by some text. The value passed to ‘/: id’ will be accessible through the req.params object. Where the name of the query parameter will get mapped to a property with the same name on the req.params object.

Mongoose has a method called .findById which is will use  ID by which it will return a user information. The ID is the first parameter and the callback function is the second parameter. All the Mongoose methods want a value as a first parameter and a callback function as the last parameter. This callback will be called after the database has returned the query value. The same can be done with the DELETE request as well.

**Delete a User From the Database**

_UserController.js_

```text
router.delete('/:id', function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("Error in deleting the user.");
        res.status(200).send("User " + user.name + " was deleted.");
    });
});Copy
```

The _router.delete\(\)_ method is same as the _router.get\(\)_. We will remove a user from the database by giving ID of the user we want to delete. The _.findByIdAndRemove\(\)_ method will find a user and delete it from the database.

The final step in Our application will be updating an existing user in the database. This is done with a PUT request.

**Updates a Single User in the Database**

_UserController.js_

```text
router.put('/:id', function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, function (err, user) {
        if (err) return res.status(500).send("Error in updating user");
        res.status(200).send(user);
    });
});Copy
```

The _router.put\(\)_ request is very similar to the two requests above. It also takes one query parameter and ID. It is different in a way that it also takes body parameters, just like the POST request we wrote first. The only HTTP methods which have a body are POST and PUT.







## ExpressJS Routing : URL Routes for Sending Response

In express.js routing, we are going to learn how based on different urls we will are going to server different pages and content on the webpages.

**Topics Covered** 

* Home Route – Opening home page on server
* HTML File Route – Open HTML page on server
* json Route – Open json response on the route
* File Route – Send a complete file on the route section

**Home Route – Opening home page on server**

```text
var express = require("express");
var app = express();

app.get('/', function(req, res){
console.log("We are at home page");
res
    .status(200)
    .send("We are at Home Page of Pabbly");
});

var server = app.listen(3000, function() {
    console.log('App listening on port 3000!');
});Copy
```

**HTML File Route – Open HTML page response on the route**

```text
var express = require("express");
var app = express();
var path = require("path");

app.get('/htmlfile', function(req, res){
    console.log("We are at home page");
    res
        .status(200)
        .sendFile(path.join(__dirname, 'public', 'index.html'));
    });

var server = app.listen(3000, function() {
    console.log('App listening on port 3000!');
});Copy
```

index.html

```text
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>This is html Page</h1>
</body>
</html>Copy
```

**Json Route – Open json response on the route**

```text
var express = require("express");
var app = express();

app.get('/json', function(req, res){
    console.log("We are using Json Data");
    res
        .status(200)
        .json({"jsonData" : true});
    });

var server = app.listen(3000, function() {
    console.log('App listening on port 3000!');
});Copy
```

**File Route – Send a complete file on the route section**

```text
var express = require("express");
var app = express();

app.get('/file', function(req, res){
    console.log("We are going to open html file")
    res
        .status(200)
        .sendFile(path.join(__dirname, 'routing.js'));
    });

var server = app.listen(3000, function() {
    console.log('App listening on port 3000!');
});Copy
```

**Complete Code**

routing.js

```text
var express = require("express");
var app = express();
var path = require("path");

app.get('/', function(req, res){
console.log("We are at home page");
res
    .status(200)
    .send("We are at Home Page of Pabbly");
});

app.get('/htmlfile', function(req, res){
    console.log("We are at home page");
    res
        .status(200)
        .sendFile(path.join(__dirname, 'public', 'index.html'));
    });

app.get('/json', function(req, res){
console.log("We are using Json Data");
res
    .status(200)
    .json({"jsonData" : true});
});

app.get('/file', function(req, res){
console.log("We are going to open html file")
res
    .status(200)
    .sendFile(path.join(__dirname, 'routing.js'));
});

var server = app.listen(3000, function() {
    console.log('App listening on port 3000!');
});
```

## ExpressJS Scaffolding

It is important to create RESTful API while working with ExpressJS. If you will create API you will have to go through a number of operations for the client request to be done. For any particular task, we use so many files like HTML, CSS, JAVASCRIPT, IMAGES and so on. To manage these files in directories and to create a proper structure we use _Scaffolding_.

Scaffolding allows us to create a skeleton for a web application when we work with ExpressJS. We manually create our public directory, add middleware, create separate route files, etc. A scaffolding tool sets up all these things for us so that we can directly get started with building our application. For this, we have a number of modules like Yeoman and Express-generator.

We are going to start Scaffolding using the _Express-generator_ module. For this, we have to install express-generator module.

Firstly, you need to open the folder in your editor where you want to work. I have opened  ‘example’ folder in Visual Studio Code because I want to work here, Then open the terminal and install the Express-generator module. For this installation run the following command : –

```text
C:\node\example>npm install express-generator -gCopy
```

If you are planning to use it multiple times run the following command and install the express-generator globally like I did here. The command will take a few seconds. As soon as the express-generator will installed, now you need to run the express command like this and hit enter:-

```text
C:\node\example>expressCopy
```

So now you can find all the necessary directories and files has been created in your folder.  


![](https://www.pabbly.com/wp-content/uploads/2018/02/scaffolding1-2.png)

Every folder has different content inside.  


![Scaffolding](https://www.pabbly.com/wp-content/uploads/2018/02/scaffolding2-1.png)

At first, you find a bin folder. There is only one file named ‘www’ inside this folder.  
This file actually contains the JavaScript which is necessary to start your server. It handles the port at which the server is running and it creates a server for your app.

In the public folder, you will have three folders they are images, javascripts, and stylesheets. Whichever file you want as a public thing you define them all here.You can put all the images, javascript here which you are going to use throughout your application.

‘Routes’ folder will help you to provide routing things. For example, as we know that we find different kinds of GET request in our application so here we can manage them in a single or different js file.

In the ‘view’ folder you put all your web pages.There are some files with the jade extension in view folder, JADE is a substitution for the HTML file where we don’t need to use tags. This makes our page more compact. The tag in HTML used as a key in JADE. If you are not familiar with jade you can continue with HTML or EJS.

You can see the file ‘app.js’ this is the main file for this application.Here you can see some module are used. All these modules are necessary for a basic app or we can use them according to our need. You will find some middleware also. Middlewares are an intermediate process which will be executed before the actual request got processed. There is some handler for developer environment and production environment.

```text
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
 var err = new Error('Not Found');
 err.status = 404;
 next(err);
});

// error handler
app.use(function(err, req, res, next) {
 // set locals, only providing error in development
 res.locals.message = err.message;
 res.locals.error = req.app.get('env') === 'development' ? err : {};

 // render the error page
 res.status(err.status || 500);
 res.render('error');
});

module.exports = app;//exporting app.js as moduleCopy
```

In the bin folder, You can see that we have used that app which we just export in the app.js. Apart from that, we have HTTP module to start it as a server by default it will take 3000 as the port number and if you want to change the port number you can change it. You can also find some error handling and event listening thing is done here. So the ‘www’ file is like a startup for my application.

```text
#!/usr/bin/env node

/**
* Module dependencies.
*/

var app = require('../app');
var debug = require('debug')('example:server');
var http = require('http');

/**
* Get port from environment and store in Express.
*/

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
* Create HTTP server.
*/

var server = http.createServer(app);

/**
* Listen on provided port, on all network interfaces.
*/

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
* Normalize a port into a number, string, or false.
*/

function normalizePort(val) {
 var port = parseInt(val, 10);

 if (isNaN(port)) {
   // named pipe
   return val;
 }

 if (port >= 0) {
   // port number
   return port;
 }

 return false;
}

/**
* Event listener for HTTP server "error" event.
*/

function onError(error) {
 if (error.syscall !== 'listen') {
   throw error;
 }

 var bind = typeof port === 'string'
   ? 'Pipe ' + port
   : 'Port ' + port;

 // handle specific listen errors with friendly messages
 switch (error.code) {
   case 'EACCES':
     console.error(bind + ' requires elevated privileges');
     process.exit(1);
     break;
   case 'EADDRINUSE':
     console.error(bind + ' is already in use');
     process.exit(1);
     break;
   default:
     throw error;
 }
}

/**
* Event listener for HTTP server "listening" event.
*/

function onListening() {
 var addr = server.address();
 var bind = typeof addr === 'string'
   ? 'pipe ' + addr
   : 'port ' + addr.port;
 debug('Listening on ' + bind);
}Copy
```

Now we come to the _package.json_ file. Here You can see all the dependencies are specified here like body-parser, cookie-parser which we have used in our app.js file.  
You can also see this “start” : “ node ./bin/www” . here ‘start’ is a command and whenever you will call this start command, internally it will execute node WWW file. So this line makes the www file as a startup thing.

```text
{
 "name": "example",
 "version": "0.0.0",
 "private": true,
 "scripts": {
   "start": "node ./bin/www"
 },
 "dependencies": {
   "body-parser": "~1.18.2",
   "cookie-parser": "~1.4.3",
   "debug": "~2.6.9",
   "express": "~4.15.5",
   "jade": "~1.11.0",
   "morgan": "~1.9.0",
   "serve-favicon": "~2.4.5"
 }
}Copy
```

So now we need to install all the dependencies. Since all the module name has been specified in the package.json so we don’t need to install each and every module separately rather we just run following command to install all the dependent module which are specified in package.json.

```text
C:\node\example>npm installCopy
```

Now the installation is done so we can start execution.for this use the following command : –

```text
C:\node>npm startCopy
```

Your server will get started now. You can open the browser and can make a request at port 3000 as this is the default port number for us now. The request will open the jade page for us.

All the scaffolding is done now. All the required directories have been created. You can obviously create more directories and can make changes according to your needs but the basic structure is done now.







## ExpressJS Static : Serving Static Files

Server static files using Express.js, we have created a directory with the name of public and express will automatically server all the files in the folder. We are going to server static file using app.use\(express.static\(‘public’\)\). This is know as middleware in express.

When we call root directory then express static middlerware automatically called public folder and it server index.html file from it.

serverstatic.js

```text
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function(){
    console.log("Magic happens now at port 3000");
});Copy
```

Public folder

```text
-public
--css
--images
--javascript
--index.htmlCopy
```

index.html

```text
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>This is HTML File</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <h1>This is html Page</h1>
</body>
</html>
```

