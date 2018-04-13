var bodyParser = require('../node_modules/body-parser');

module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.get('/rainier/v10.0/nonce_token', function(req, res) {
        if (req.query.storefront && ['ccas-bb9630c04f'].indexOf(req.query.storefront) !== -1) {
            res.json({ nonce_token: Math.floor(Math.random() * Math.floor(1000000)) });
        } else {
            res.status(403).send('invalid storefront id');
        }
    });

    app.post('/rainier/v10.0/request_customized_model', function(req, res) {
        res.json({ order_id: Math.floor(Math.random() * Math.floor(1000000)) });
    });
}