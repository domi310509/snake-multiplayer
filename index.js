const express = require('express');
const app = express();
const port = 3000;

// Ustawienie obsługi plików statycznych z folderu 'public'
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Serwer działa na \nhttp://localhost:${port}`);
});

app.get('/test', (req, res) => {
    res.send('Welcome to the test site')
})