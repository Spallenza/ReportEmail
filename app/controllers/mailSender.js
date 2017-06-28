module.exports.mailSender = function (body,app, res) {

    var nodemailer = require('nodemailer');

    // O primeiro passo é configurar um transporte para este
    // e-mail, precisamos dizer qual servidor será o encarregado
    // por enviá-lo:
    var transporte = nodemailer.createTransport({
        service: 'Gmail', // Como mencionei, vamos usar o Gmail
        auth: {
            user: 'maplog@maptrading.com.br', // Basta dizer qual o nosso usuário
            pass: 'maplog@2017'             // e a senha da nossa conta
        }
    });


    // Após configurar o transporte chegou a hora de criar um e-mail
    // para enviarmos, para isso basta criar um objeto com algumas configurações
    var email = {
        from: 'maplog@maptrading.com.br', // Quem enviou este e-mail
        to: 'diegoreis@gmail.com, almir.arruda@aquariusbrasil.com, rafael.torres@aquariusbrasil.com', // Quem receberá
        subject: 'Atividade Maplog',  // Um assunto bacana :-) 
        html: body // O conteúdo do e-mail
    };

    // Pronto, tudo em mãos, basta informar para o transporte
    // que desejamos enviar este e-mail
    transporte.sendMail(email, function (err, info) {
        if (err)
            throw err; // Oops, algo de errado aconteceu.

        console.log('Email enviado! Leia as informações adicionais: ', info);
    });
}