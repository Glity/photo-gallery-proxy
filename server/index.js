const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { get } = require('lodash');
const path = require('path');

const app = express();

// serve public folder
// app.use('/', express.static(path.join(__dirname, '/../public')));

//Photo gallery proxy
photoGalleryOptions = {
    target: 'http://localhost:3001',
}

const photoGalleryProxy = createProxyMiddleware(photoGalleryOptions);

app.use('/photos/:id', photoGalleryProxy);

app.use('/*', express.static(__dirname + '/../public'));
// // People also viewed proxy
// peopleViewedOptions = {
//     target: 'http://localhost:3002',
// }
// const peopleViewedProxy = createProxyMiddleware(peopleViewedOptions);

// // review proxy
// reviewOptions = {
//     target: 'http://localhost:3003',
// }

// const reviewProxy = createProxyMiddleware(calendarOptions);

// // calendar proxy
// calendarOptions = {
//     target: 'http://localhost:3004',
// }

// const calendarReservation = createProxyMiddleware(calendarOptions);

// app.use((req, res, next) => {
//     console.log(`serving a ${req.method} request to ${req.url}.`);
//     next()
// })

app.get('/', (req, res)=>{
    res.status(200);
    res.end();
})
// set up eardrum
app.listen(3000, (err, success) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Listening on 3000...')
    }
})