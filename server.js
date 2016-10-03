var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/Roshan.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Roshan.png'));
});
/*app.get('/ui/Roshan.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Roshan.png'));
});*/
app.get('/ui/Roshan1.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Roshan1.png'));
});
app.get('/ui/Roshan2.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Roshan2.png'));
});

app.get('/ui/roshan.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'roshan.png'));
});
app.get('/ui/roshan1.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'roshan1.png'));
});
app.get('/ui/roshan2.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'roshan2.png'));
});
app.get('/ui/roshan3.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'roshan3.png'));
});
app.get('/ui/roshan4.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'roshan4.png'));
});
app.get('/ui/roshan5.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'roshan5.png'));
});
app.get('/ui/roshan6.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'roshan6.png'));
});
app.get('/ui/roshan7.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'roshan7.png'));
});
app.get('/ui/roshan8.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'roshan8.png'));
});
app.get('/ui/roshan9.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'roshan9.png'));
});
app.get('/ui/roshan10.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'roshan10.png'));
});
app.get('/ui/roshan1.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'roshan1.png'));
});
app.get('/ui/video1.mp4', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'video1.mp4'));
});
app.get('/ui/shirleysetia.mp4', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'shirleysetia.mp4'));
});
app.get('/ui/KaunTujhe.mp3', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'KaunTujhe.mp3'));
});
app.get('/ui/JabTak.mp3', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'JabTak.mp3'));
});
app.get('/ui/msd.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'msd.png'));
});
app.get('/ui/roshan30.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'roshan30.png'));
});
app.get('/ui/roshan.pptx', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'roshan.pptx'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
