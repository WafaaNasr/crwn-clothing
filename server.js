const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STIPE_SECRET_KEY);

const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
    // serve all  or send all the static files in there
    app.use(express.static(path.join(__dirname, 'client/build')));

    // the only way we are able to serve it we have to specifiy what route we want use to it 
    app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'client/build', 'index.html')));
}

app.listen(port, error => {
    if (error) throw error;
    console.log('Server running on port' + port);
});

app.post('/payment', ({ body: { token, amount } }, res) => {
    const body = {
        source: token.id,
        amount: amount,
        currency: 'usd'
    };

    stripe.charges.create(body, (error, stripeRes) => {
        if (error) res.status(500).send({ err: error });
        res.status(200).send({ success: stripeRes });
    });
});