var auth            = require('./auth'),
    alivedisplay    = require('./routes/alivedisplay'),
    webhook         = require('./routes/webhook'),
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

app.post('/alivedisplay/:displayid/state', auth.checkAuth, alivedisplay.setState);
app.get('/alivedisplay/:displayid/state', auth.checkAuth, alivedisplay.getState);
app.get('/outget/exec/:cmd', auth.checkAuth, exec.cmd);
app.get('/outget/ping', auth.checkAuth, exec.ping);
app.get('/outget/nslookup', auth.checkAuth, exec.nslookup);
app.post('/webhook',auth.checkAuth, webhook.receive);

app.set('port', process.env.PORT || 80);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
