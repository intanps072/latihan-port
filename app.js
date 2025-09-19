const express = require ('express');
const expressLayouts = require('express-ejs-layouts');
const app = express ();
const port = 3000;
// guna ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layout/main-layout');
app.get('/index', (req, res) => {

    const mahasiswa = [
        {   nama : 'Ade',
            email : 'ade@gmail.com',  
        },
        {   nama : 'Asep',
            email : 'asep@gmail.com',
        },
        {   nama : 'Agus', 
            email : 'agus@gmail.com',
        },
    ];

    res.render ('index', {
        nama : 'Ade',
        title : 'Halaman Home',
        mahasiswa : mahasiswa,
    });
    });

app.get('/about', (req, res)=> {
   // res.sendFile('./index.html', {root : __dirname});
   res.render ('about', {title : 'Halaman About'}

   );
});

app.get('/contact', (req, res) => {
    // res.sendFile ('./about.html', {root : __dirname});
    res.render ('contact', {title : 'Halaman Kontak'}
    );
});

app.get('/product', (req, res) => {
    res.send (`product ID : ${req.params.id} <br> Category ID : ${req.params.idCat}`);
        
});

app.use ('/', (req, res) => {
    res.status (404);
    res.send ('<h1>Test</h1>');
});

app.listen(port, () => {
    console.log(`Example apps listening on port ${port}`)
});