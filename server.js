

const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const app = express()

const dataRouter = require('./routes/trackingDataRouter')
const adminRouter = require('./routes/adminRouter')

const {DATABASE_URL, PORT} = require('./config')

app.use(morgan('common'))
app.use(express.static('public'))
app.use(express.static('scripts/css'))
app.use(express.static('scripts/js'))
app.use(express.static('scripts'))

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html')
})

// app.use('/admin', adminRouter)
// app.use('/data', trackingDataRouter)

let server;

function runServer(databaseUrl=DATABASE_URL, port=PORT) {
  return new Promise((resolve, reject) => {
    // mongoose.connect(databaseUrl, err => {
    //   if (err) {
    //     return reject(err);
    //   }

      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
      .on('error', err => {
        // mongoose.disconnect();
        reject(err);
      });
    });
  // });
}

function closeServer() {
  // return mongoose.disconnect().then(() => {
     return new Promise((resolve, reject) => {
       console.log('Closing server');
       server.close(err => {
           if (err) {
               return reject(err);
           }
           resolve();
       });
     });
  // });
}

if(require.main === module) {
	runServer().catch(err => console.error(err));
};

module.exports = {app, runServer, closeServer}