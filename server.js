const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const app = express()

const dataRouter = require('./routes/dataRouter')
const adminRouter = require('./routes/adminRouter')

const {DATABASE_URL, PORT} = require('./config')

app.use(morgan('common'))
app.use(express.static('public'))

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html')
})

app.listen(process.env.PORT || 8080)

// app.use('/admin', adminRouter)
// app.use('/data', dataRouter)

// let server;

// function runServer(databaseUrl=DATABASE_URL, port=PORT) {
//   return new Promise((resolve, reject) => {
//     mongoose.connect(databaseUrl, err => {
//       if (err) {
//         return reject(err);
//       }

//       app.listen(port, () => {
//         console.log(`Your app is listening on port ${port}`);
//         resolve();
//       })
//       .on('error', err => {
//         mongoose.disconnect();
//         reject(err);
//       });
//     });
//   });
// }

// function closeServer() {
//   return mongoose.disconnect().then(() => {
//      return new Promise((resolve, reject) => {
//        console.log('Closing server');
//        server.close(err => {
//            if (err) {
//                return reject(err);
//            }
//            resolve();
//        });
//      });
//   });
// }

// if(require.main === module) {
// 	runServer().catch(err => console.error(err));
// };

// module.exports = {app, runServer, closeServer}