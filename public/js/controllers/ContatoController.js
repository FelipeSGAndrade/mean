angular.module('usuarios').controller('ContatoController',
  function($scope, $routeParams, Contato){

    if($routeParams.contatoId){
      Contato.get({id: $routeParams.contatoId},
        function(contato){
          $scope.contato = contato;
        },
        function(erro){
          $scope.mensagem = {text: 'Não foi possível obter o contato.'};
          console.log(erro);
        });
    } else {
      $scope.contato = new Contato();
    }

    $scope.salva = function(){
      $scope.contato.$save()
        .then(function(){
          $scope.mensagem = {texto: "Usuário salvo com sucesso!"};
          $scope.contato = new Contato();
        })
        .catch(function(erro){
          $scope.mensagem = {texto: "Não foi possível salvar"};
          console.log(erro);
        });
    };

    Contato.query(function(contatos){
      $scope.contatos = contatos;
    });
  });
