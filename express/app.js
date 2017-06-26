var express = require ("express");
var cors = require("cors");
var bodyParser = require ("body-parser");

var app = express();

var skierTerms = [
    {
        term: 'RIP',
        defined: 'To move at high rate of speed'
    },
    {
      term: 'Huck',
      defined: "To throe"
    },
    {
        term: 'gede',
        defined: 'just another defination'
    }
    ];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(function(req,res,next){
    console.log(`${req.method} request for '${req.url}'- ${JSON.stringify(req.body)}`);
    next();
});
app.use(express.static("./public"));

app.use(cors());

app.get('/dictionary-api',function(req,res){
    res.json(skierTerms);
});

app.post('/dictionary-api',function(req,res){
    skierTerms.push(req.body);
    res.json(skierTerms);
});

app.delete("/dictionary-api/:term",function(req,res){
    skierTerms = skierTerms.filter(function(defination){
        return defination.term.toLowerCase() !== req.params.term.toLowerCase();
    });
    res.json(skierTerms);
});

app.listen(process.env.PORT,process.env.IP);

console.log("Express app runing ");

module.exports= app;