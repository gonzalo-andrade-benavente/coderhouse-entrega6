
const { engine } = require('express-handlebars');
const express = require('express');
const path = require('path');
const {Server: HttpServer} = require("http");

const app = express();
const PORT = process.env.PORT || 8080;
const Socket = require('./utils/sockets');

const httpServer = new HttpServer(app);
const socket = new Socket(httpServer);

// Middlewares
app.use( express.json() );
app.use( express.urlencoded({ extended: false }));
app.use( express.static(path.join(__dirname, 'public')));

// Template
app.engine( 'handlebars', engine() );
app.set( 'view engine', 'handlebars' );
app.set( 'views', __dirname + '/views' );


socket.init();

// Routes
app.use( '/', require('./routes') );

const server = app.listen( PORT, () => {
    console.log(`Server listening in port ${PORT}`);
});



module.exports = server;



