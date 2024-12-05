//https://www.youtube.com/watch?v=ENrzD9HAZK4&list=PL0vfts4VzfNiq0-fXbVVdnngU1Ur2SzyZ
const express = require('express');
var path = require('path');
const { readFile } = require('fs');

const app =  express(); 

//https://www.reddit.com/r/node/comments/10h2nol/appget_for_all_files/
app.use(express.static(path.join(__dirname, '.')));

app.get('/', (request, respone) => {
    readFile('./index.html', 'utf8', (err, html) => {
        if (err)
        {
            respone.status(404).send('404');
        }
        respone.send(html);
    })
});

app.listen(process.env.PORT || 8080, () => console.log('http://localhost:8080'));

/*
const express = require('express');
const { readFile } = require('fs');
var url = require('url');

const app =  express(); 

app.get('/', (request, respone) => {
    var q = url.parse(request.url, true);
    var filename = '.' + q.pathname;

    if (filename.charAt(filename.length - 1) == '/'){
        filename += 'index.html';
    }

    readFile(filename, 'utf8', (err, html) => {
        respone.send(html);
    })

    console.log(filename)
});

app.listen(process.env.PORT || 8080, () => console.log('http://localhost:8080'))
*/