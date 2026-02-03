const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors({
    origin: [
        'http://127.0.0.1:5173',
        'http://localhost:5173',
        'http://0.0.0.0:5173'
    ]
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, "build")))

app.use('/api', require('./api/test'));

app.use((req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"))
});


app.listen(3001, () => {
    console.log('running');
})