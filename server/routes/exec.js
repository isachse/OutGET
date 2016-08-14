require('shelljs/global');


exports.cmd = function (req, res, next) {
    var cmd = req.params.cmd
    var query = req.query;
    var arq = query['arq'];
    console.log(arq);
    var cmdreq = cmd;
    cmdreq += " ";
    cmdreq += arq;
    var cmdres = exec(cmdreq);
//    var cmdres = run_cmd(cmd, arq);
    res.send(cmdres);
};

function run_cmd(cmd, args) {
    var spawn = require("child_process").spawn;
    var child = spawn(cmd, args);
    var result = { stdout: "" };
    console.log(child);
    child.stdout.on("data", function (data) {
            result.stdout += data;
    });
    child.stdout.on("end", function () {
    });
    return result;
}