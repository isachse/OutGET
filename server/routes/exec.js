require('shelljs/global');


exports.cmd = function (req, res, next) {
    var cmd = req.params.cmd
    var query = req.query;
    var arq = query['arq'];

    var cmdres = run_cmd(cmd, arq);

    res.send(cmdres);
};

exports.ping = function (req, res, next) {
    var query = req.query;
    var ip = query['ip'];

    if (!ip) {
        res.send('Parameter <ip> not set')
    }

    if (hasWhiteSpace(ip)) {
        res.send('Unallowed parameter used');
    };

    var arg = "-c 1 " + ip;
    console.log(arg);

    res.send(run_cmd("ping", arg));
} 

function hasWhiteSpace(s) {
  return s.indexOf(' ') >= 0;
}

function run_cmd(cmd, arq) {
    var cmdreq = cmd;
    cmdreq += " ";
    cmdreq += arq;

    result = exec(cmdreq);
       
    // var spawn = require("child_process").spawn;
    // var child = spawn(cmd, args);
    // var result = { stdout: "" };
    // console.log(child);
    // child.stdout.on("data", function (data) {
    //         result.stdout += data;
    // });
    // child.stdout.on("end", function () {
    // });
    return result;
}