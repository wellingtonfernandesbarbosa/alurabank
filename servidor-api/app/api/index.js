/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {}


api.dados = function(req, res) {

    res.json([
        { montante: 200.5, vezes: 2 },
        { montante: 100.2, vezes: 5 },
        { montante: 50.5, vezes: 1 },
        { montante: 70.5, vezes: 2 },
        { montante: 30.0, vezes: 3 },
        { montante: 150.75, vezes: 4 },
        { montante: 80.2, vezes: 2 },
        { montante: 120.0, vezes: 1 },
        { montante: 300.0, vezes: 6 },
        { montante: 75.25, vezes: 3 },
        { montante: 90.8, vezes: 2 },
        { montante: 180.6, vezes: 2 },
        { montante: 60.0, vezes: 4 },
        { montante: 250.3, vezes: 1 },
        { montante: 170.4, vezes: 5 },
        { montante: 220.75, vezes: 2 },
        { montante: 40.9, vezes: 3 },
        { montante: 95.0, vezes: 1 },
        { montante: 140.2, vezes: 4 },
        { montante: 210.0, vezes: 2 }
    ]);
    
};


module.exports = api;