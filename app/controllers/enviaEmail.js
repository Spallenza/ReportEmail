module.exports.enviaEmail = function (app, res) {
    var StringBuilder = require("string-builder");


    //Configuração do banco
    var sqlMaplog = app.config.dbConnection;
    //Model que exuca a query do banco de dados.
    var notasModel = new app.app.models.MaplogDAO(sqlMaplog);

    console.log("Conectando com a base Maplog");
    notasModel.getUpdateHistory(function (results) {

        console.log("Alterações encontradas", results.length);
        // console.log(results);
        var sb = new StringBuilder();
        for (var i = 0; i < results.length; i++) {

            //  console.log("Nota número: ", results[i].numero)
            sb.appendFormat("<b>Nota número:</b> {0} <br>", results[i].numero);
            sb.appendFormat("<b>Status:</b> {0} <br>", results[i].novostatus);
            sb.appendFormat("<b>data/hora mudança:</b> {0} <br>", results[i].datacriacao.toISOString().replace(/T/, ' ').replace(/\..+/, ''));
            sb.appendLine("<br>");
            sb.appendLine("---------------------------------------");
            sb.appendLine("<br>");
        }

        // console.log(sb.toString());

        app.app.controllers.mailSender.mailSender(sb.toString(), app);


    }, function (err) {
        console.log("Erro:", err);
    });

}