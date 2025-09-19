const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layout/main-layout');

app.get('/', (req, res) => {
    const mahasiswa = [
        { nama: 'Ade', email: 'ade@gmail.com' },
        { nama: 'Asep', email: 'asep@gmail.com' },
        { nama: 'Agus', email: 'agus@gmail.com' },
    ];

    res.render('index', {
        nama: 'Ade',
        title: 'Halaman Home',
        mahasiswa: mahasiswa,
    });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'Halaman About' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Halaman Kontak' });
});

app.get('/product/:id/category/:idCat', (req, res) => {
    res.send(`Product ID: ${req.params.id} <br> Category ID: ${req.params.idCat}`);
});

app.use((req, res) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
