module.exports = {

    emailSender: function () {
        // Change the config settings to match your 
        // SQL Server and database
        const config = {
            user: 'diego',
            password: '123456',
            host: "192.168.1.232",
            port: '1433', // You can use 'localhost\\instance' to connect to named instance 
            database: 'MAPTRADE',

            options: {
                encrypt: true // Use this if you're on Windows Azure 
            }
        }

        return config;
    },
    maplogConnection: function () {

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
}