const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

// root
app.get('/', (req, res) => {
    res.send('electro max server is running');
});

app.listen(port, () => {
    console.log('electro max server running cmd', port);
});
