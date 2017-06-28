module.exports =  function () {

        const config = {
            user: 'Aquarius',
            password: 'Giventofly#10',
            server: 'maptrade.database.windows.net', // You can use 'localhost\\instance' to connect to named instance 
            database: 'MapLog',

            options: {
                encrypt: true // Use this if you're on Windows Azure 
            }
        }

        return config;
    }