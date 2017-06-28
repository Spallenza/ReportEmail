var sql = require("seriate");
function NotasDAO(config) {
    this._sql = sql;
    this._sql.setDefaultConfig(config)
    this.cfg = config;
}

NotasDAO.prototype.getUpdateHistory = function (callback) {
    // console.log(this.cfg);
    // var queryString = "Update NotaFiscal set Cancelada = 1 where IdAlterdata = '" + id + "'" ;
    var queryString = "Select numero, novostatus, datacriacao from HistoricoNotaFiscal inner join notafiscal on notafiscal.id = HistoricoNotaFiscal.idnotafiscal WHERE DataCriacao >= CAST(dateadd(DAY,-1,GETDATE())AS DATE) AND DataCriacao < CAST(GETDATE()AS DATE)";

    // console.log(queryString);
    this._sql.execute({
        query: queryString,
        // params: {
        //     id: {
        //         val: id,
        //         type: sql.VARCHAR
        //     }
        // }
    }).then(callback);
}


module.exports = function () {
    return NotasDAO;
}