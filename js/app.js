var app = angular.module('dashboard', ['pascalprecht.translate', 'ngRoute']);

    app.controller('QueryController', ['$translate', '$scope', '$http', function ($translate, $scope, $http){
        $scope.title = 'Consulta';
        $http.get('http://localhost:3000/chamados').
          success(function(data, status, headers, config) {
            $scope.chamados = data;
            // chamados
            Highcharts.chart('chamados', {
                chart: {
                    type: 'pie'
                },
                exporting: {
                  enabled: false
                },
                credits: {
                  enabled: false
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: ''
                },
                plotOptions: {
                    pie: {
                        innerSize: 60,
                        depth: 10
                    }
                },
                colors: $scope.chamados.colors,
                series: [{
                    name: 'Chamados',
                    data: $scope.chamados.legends
                }]
            });
          }).
          error(function(data, status, headers, config) {
            // log error
          });
        // TMA
        Highcharts.chart('tma', {
          title: {
            text: ''
          },
          exporting: {
            enabled: false
          },
          credits: {
            enabled: false
          },
          xAxis: {
              categories: ['07/05/15', '21/05/15', '04/06/15', '10/06/15', '13/06/15']
          },
          yAxis: {
              title: {
                  text: 'Tempo (min)'
              },
              plotLines: [{
                  value: 0,
                  width: 1,
                  color: '#42a4bb'
              }]
          },
          series: [{
            data: [30, 25, 35, 23, 40]
          }]
        });
    }]);
    app.controller('CadastroController', ['$scope', function($scope){
        $scope.title = 'Cadastro';
    }]);
    app.config(function ($translateProvider) {
        $translateProvider.translations('en', {
            GREETING:       'WELCOME',
            COMPANY:        'COMPANY',
            CONECTAR:       'CONECT',
            INTERVALO:      'BREAK',
            HOME:           'HOME',
            HISTÓRICO:      'HISTORIC',
            CONTATAR:       'CONTACT',
            ATENDENTES:     'ATTENDANTS',
            CADASTROS:      'REGISTERS',
            CONSULTAS:      'CONSULTATIONS',
            SAIR:           'LOGOUT',
        });
        $translateProvider.translations('pt', {
            GREETING:       'Seja bem vindo(a)',
            COMPANY:        'Empresa',
            CONECTAR:       'CONECTAR',
            INTERVALO:      'INTERVALO',
            HOME:           'HOME',
            HISTÓRICO:      'HISTÓRICO',
            CONTATAR:       'CONTATAR',
            ATENDENTES:     'ATENDENTES',
            CADASTROS:      'CADASTROS',
            CONSULTAS:      'CONSULTAS',
            SAIR:           'SAIR',
        });
        $translateProvider.preferredLanguage('pt');
    });

    app.config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                controller : 'QueryController',
                templateUrl : 'views/consultas.html'
            })
            .when('/cadastros', {
                controller : 'CadastroController',
                templateUrl : 'views/cadastros.html'
            })
            .otherwise({
                redirectTo : '/'
            });
    }]);


    app.controller('TranslateController', function ($scope, $translate) {
    	$scope.changeLanguage = function (key) {
    		$translate.use(key);
    };




});










