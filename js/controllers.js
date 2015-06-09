angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('HomeCtrl',

  function($scope,$ionicSlideBoxDelegate,$rootScope, $cordovaNetwork,$cordovaDialogs,$log,Content,ContentData) {
  
  
  document.addEventListener("deviceready", function () {
    var type = $cordovaNetwork.getNetwork();
    


    $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
      var offlineState = networkState;
      $cordovaDialogs.alert('No cuentas con acceso a datos, el contenido no se puede cargar', 'Oops!', 'ok')
      .then(function() {
        // callback success
      });
    });

    $scope.contenido = [];

    $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
      $scope.$on('updateContent',function(e, opt){
        
        $scope.contenido = ContentData.get();
      });
    });

        

        
  });



  $scope.nextSlide = function(index) {
    $ionicSlideBoxDelegate.slide(index,500);
  }


  $scope.playlists = [
    { title: 'waza', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('MenuCtrl',function($scope,$stateParams,$rootScope,$cordovaNetwork,$cordovaSpinnerDialog,Categories,Content, ContentData){
  document.addEventListener("deviceready", function () {
    var type = $cordovaNetwork.getNetwork();
    
    $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
      
      var offlineState = networkState;
      Categories.getAll("getCategories",function(data){
        $scope.categories = data;
      });


    });

    $scope.getContentList = function(catid) {
      //alert(catid);
      $cordovaSpinnerDialog.show("Cargando","Cargando contenido", true);
      Content.getList("getContentList/"+ catid,function(data){
        ContentData.set(data);
        $scope.contenido = ContentData.get();
        $rootScope.$broadcast('updateContent',{mensaje:"wazaa"});
        $cordovaSpinnerDialog.hide();
      });
      
    }

  });

  //Categories.getAll()

})


;
