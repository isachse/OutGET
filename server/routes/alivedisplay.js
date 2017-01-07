require('shelljs/global');

exports.setState = function (req, res, next) {
    res.statusCode = 200;
    res.send();
};

exports.getState = function (req, res, next) {
    var query = req.query;
    var format = query['format'];

    if (format=="png") {
        res.set('Content-Type', 'image/png');
        res.send("");
    } else {
        res.set('Content-Type', 'application/json');
        res.send();        
    };
}