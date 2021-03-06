const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/angular-build'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'angular-build', 'index.html'));
});

app.listen(process.env.PORT || 8080, () => console.log("Server is running..."));