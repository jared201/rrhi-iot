const express = require ('express')
const path = require('path')
const PORT = process.env.PORT || 5002
const bodyParser = require('body-parser')
const {callback} = require("chart.js/helpers");

express()
    .use(express.static(path.join(__dirname, 'dist')))
    .use(bodyParser.urlencoded({extended: true}))
    .use(bodyParser.json())
    .set('views', path.join(__dirname, 'dist'))
    .set('view engine', 'html')
    .get('/', (req, res)=>{
        console.log("Entry point");
        res.render('index.html');
    })
    .get('/test_api', (req, res)=>{
        console.log("test_api");
        res.status(200).send('OK');
    })
    .get('/get_bitcoin_price', (req, res)=>{
        console.log("get_bitcoin_price");
        const btc = require('./server/bitcoinController');
        btc.getBitcoinPrice(function (price) {
            res.status(200).send(price);
        });

    })
    .get('/test_get_api_key', (req, res)=>{
        console.log("get_api_key");
        const key = require('./server/apiKeyController');
        res.status(200).send(key.generateApiKey());
    })
    .post('/test_add_orders', (req, res)=> {
        let body = req.body;
        const oc = require('./server/orderscontroller');
        oc.addOrders(body, req, (rowcount, errorMsg)=> {
            if (rowcount > 0){
                res.status(200).send('Orders submitted pending payment confirmation');
            } else {
                if (errorMsg != undefined){
                    res.status(404).send('Orders not sent');
                }
            }
        });
    }).
    get('/test_device_status', (req, res)=>{
        console.log("test_device_status");
        const ds = require('./server/deviceStatus');
        ds.updateDeviceStatus('Store Branch Name', 'Device Name', 'Current Operating Status', 'Current Room Temperature', 'Current Device Temperature', 'Create Date', 'Modified Date', (err, msg)=>{
            if (err){
                res.status(404).send('Device Status not updated');
            } else {
                res.status(200).send(msg);
            }
        });
    })
    .get('/test_read_device_status', (req, res)=>{
        console.log("test_read_device_status");
        const ds = require('./server/deviceStatus');
        ds.readDeviceStatus('Store Branch Name', 'Device Name', (statusData, msg)=>{
            console.table(statusData);
            console.log(msg);
            res.status(200).send(statusData);
        });
    })
    .get('/get_token', (req, res)=>{
        console.log("get_token");
        const tuya = require('./server/tuyaModules');
        console.log(req.query.clientId, req.query.secret);
        let clientId = req.query.clientId;
        let secret = req.query.secret;
        tuya.getTuyaToken(clientId, secret).then((token)=>{
            res.status(200).send(token);
        }).catch((err)=>{
            console.error(err);
            res.status(404).send('Token not retrieved');
        });
    })
    .listen(PORT, ()=> console.log(`Listening on ${ PORT }`));