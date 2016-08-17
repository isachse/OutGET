require('shelljs/global');


exports.cmd = function (req, res, next) {
    var cmd = req.params.cmd
    var query = req.query;
    var arg = query['arg'];

    var cmdres = run_cmd(cmd, arg);

    res.send(cmdres);
};

exports.ping = function (req, res, next) {
    var query = req.query;
    var address = query['address'];

    if (!address) {
        res.send("Parameter ADDRESS not set")
    }

    if (hasWhiteSpace(address)) {
        res.send("Unallowed parameter used");
    };

    var arg = "-c 1 " + address;
    console.log(arg);

    res.send(run_cmd("ping", arg));
}

exports.nslookup = function (req, res, next) {
    var query = req.query;
    var address = query['address'];

    if (!address) {
        res.send("Parameter ADDRESS not set")
    }

    if (hasWhiteSpace(address)) {
        res.send("Unallowed parameter used");
    };

    var arg = "-query=any -timeout=10 " + address;
    console.log(arg);

    res.write(run_cmd("nslookup", arg));
}

function hasWhiteSpace(s) {
  return s.indexOf(' ') >= 0;
}

function run_cmd(cmd, arg) {
    var cmdreq = cmd;
    cmdreq += " ";
    cmdreq += arg;

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