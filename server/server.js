var auth            = require('./auth'),
    bodyParser      = require('body-parser'),
    exec            = require('./routes/exec'),
    express         = require('express'),
    methodOverride  = require('method-override'),
    app             = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride());      // simulate DELETE and PUT

app.get('/exec/:cmd', auth.checkAuth, exec.cmd);
app.get('/ping', auth.checkAuth, exec.ping);
app.get('/nslookup', auth.checkAuth, exec.nslookup);

app.set('port', process.env.PORT || 80);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});