var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
'article_one' :{
    title:'Prema|article_one',
    heading:'article_one',
    date:'sep 1',
    content:`<p>
                    This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article.
                </p>
                <p>
                     This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article. This is my first article.
                </p>`
    
},
'article_two' :{
    title:'Prema|article_two',
    heading:'article_two',
    date:'sep 1',
    content:`<p>
                    This is my second article. 
                </p>`
    
     },
'article-three':{
    title:'Prema|article_three',
    heading:'article_three',
    date:'sep 1',
    content:`<p>
                    This is my third article. 
                </p>`
    
}
};
function createTemplate(data)
{
    var title= data.title;
    var heading=data.heading;
    var content=data.content;
        var htmltemplate=` <html>
            <head>
                <title>
                    ${title}
                </title>
                <meta name="viewport" content="width-device-width,initial-scale-1"> 
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                    <div>
                        <a href="/">HOME</a>
                    </div>
                    <br>
                    <h3>
                        ${heading}
                    </h3>
                    <div>
                       ${content}
                    </div>
                </div>
            </body>
        </html>`;
        return htmltemplate;
}


app.get('/favicon.ico', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'favicon.ico'));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    //articleName is for each article
    //article[articleName] is content of each article
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});



app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
