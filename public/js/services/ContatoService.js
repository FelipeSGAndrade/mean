angular.module('usuarios').factory('Contato',
  function($resource){
      return $resource('/contatos/:id');
});
