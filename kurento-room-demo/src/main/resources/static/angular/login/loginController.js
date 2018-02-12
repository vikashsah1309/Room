kurento_room.controller('loginController', function ($scope, $http, ServiceParticipant, $window, ServiceRoom, LxNotificationService, $routeParams, $q) {
    var apiHost = 'https://kaza.ai';
    //var apiHost = 'https://www.kazastream.com';

    $scope.clear = function () {
        $scope.room = "";
        $scope.userName = "";
        $scope.email = "";
    };

    // modification
    $scope.joinHub = function (room) {
'use strict'
        console.log('room details by user: ')
        console.log(room)
        let hubGuid = $routeParams.hub,
            emailId = room.email,
            name = room.userName;
        var deferred = $q.defer();
        var req = apiHost + '/api/common/CheckSharedTokenAndProcess?';
        req += 'hubGuid=' + hubGuid;
        req += '&emailId=' + emailId;
        req += '&name=' + name;
        $http.get(req)
            .then(function (response) {
                deferred.resolve(response);
                var result = response;
                if (result.data.status === 200) {
                    $scope.SharedUser = true;
                    $window.location.href = result.data.callurl;
                }
            })
            .then(function (response) {
                deferred.reject(response);
            });
    }
});
