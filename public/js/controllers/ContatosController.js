angular.module('usuarios').controller('ContatosController',
  function($scope, Contato){
    $scope.mensagem = {texto: ''};
    $scope.contatos = [];
    $scope.filtro = '';

    function buscaContatos(){
      Contato.query(
        function(contatos){
            $scope.contatos = contatos;
        },
        function(erro){
          $scope.mensagem = {texto: "Não foi possível obter a lista de contatos."};
          console.log(erro);
        });
    }

    buscaContatos();

    $scope.remove = function(contato){
      Contato.delete({id: contato._id},
        buscaContatos,
        function(erro){
          $scope.mensagem = {texto: "Não foi possível remover o contato."};
          console.log(erro);
      });
    };
});
