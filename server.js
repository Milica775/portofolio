//importujem module
//DODALA SAM SVE MODULE
var express=require("express"); 
var logger=require("morgan");  
var path=require("path");
var bodyParser=require("body-parser");
var cookieParser=require("cookie-parser");
var passport=require("passport");
var mongoose=require("mongoose");
var helmet=require("helmet");
var session=require("express-session");
var compression=require("compression");
var favicon=require("serve-favicon");

//da premjesti u jedan fajl sve sto je za korisnike
var routes=require("./routes/users");

//kreiram instancu za Express
var app=express();

require('./config/passport')(passport);

var config=require('./config/database');


mongoose.connect(config.database,{useNewUrlParser: true});

mongoose.connection.on('connected',function(){
  console.log('Connected to database');
});

//port 3000 da bude standardni ali moze da se pokrene i na ostalima
var port=process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, '/server/views'));
app.set('view engine', 'ejs');

// disable default x-powered-by from express
app.disable('x-powered-by');

//kada zahtjevamo home page da posalje kao odgovor HELLO WORLD
app.get('/',function(req,res){
  res.send("HELLO WORLD");
});

//sta sve koristi aplikacija
app.use(logger("dev"));

app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

app.use(session({ secret: 'thisisassessionsecretwhichwillbetoolongtotraceback',
saveUninitialized:true,
resave: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login session

//koristi static folder-za klijent side fajlove
app.use(express.static(path.join(__dirname, 'public')));

app.use(compression());

app.use('/', routes);

//SAMO SAM DODALA ERRO
// error handlers
/*
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
          message: err.message,
          error: err
      });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  console.log(err.message);
  res.render('error', {
      message: err.message,
      error: {}
  });
});
*/

//na kom portu slusa
app.listen(port,function(){
    console.log("Running the server");
});