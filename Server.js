var express = require('express');
var app = express();

app.get('/chamados', function (req, res) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    var data = {
        legends: [
            [   'Recebidos'    ,   198  ],
            [   'Suspensos'    ,   198  ],
            [   'Finalizados'  ,   198  ],
            [   'Abandonados'  ,   198  ],
            [   'Em Aberto'    ,   198  ],
            [   'Transferidos' ,   198  ]
        ],
        colors: ['#c24642', '#369ead', '#6dbceb', '#c8b631', '#a2d1cf' , '#7f6084']

    };

    res.send(data);
});

app.listen(3000, function () {
    console.log('Server listening on port 3000!');
});



















