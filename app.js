
var app = require('./config/server');
var schedule = require('node-schedule');

function execute(app) {
    app.app.controllers.enviaEmail.enviaEmail(app);
}

app.listen(3001, function () {
    console.log("Servidor de Envio de Email Maplog ON");

    var j = schedule.scheduleJob({ hour: 09, minute: 00 }, function () {
        execute(app);
        console.log('Time for tea!');
    });

    // execute(app);

});

