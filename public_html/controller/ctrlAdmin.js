colegios.controller('ctrlUser', ['$scope', 'CountryService', 'ProfileService', 'UsService', 'DocumentTypeService', function ($scope, CountryService, ProfileService, UsService, DocumentTypeService) {
        $.AdminLTE.layout.fix();
        $.AdminLTE.layout.fixSidebar();
        $scope.school = {
            idSchool: 492
        };

        $scope.user = {intDaysChangePwd: 0};
        $scope.user.userProfiles = [
            {
                school: $scope.school
            }
        ];
        $scope.user.person = {
            documents: [
                {}
            ]};

        $scope.btn = 0;
        $scope.next = [
            "Datos Usuario",
            "Datos Personales",
            "Dirección"
        ];

        $scope.loadProfile = true;
        ProfileService.getAll().success(function (data) {
            $scope.loadProfile = false;
            $scope.profiles = data;
        }).error(function (data) {

        });

        $scope.loadCountry = true;
        DocumentTypeService.getAll().success(function (data) {
            $scope.loadDocumentsTypes = false;
            $scope.documentsTypes = data;
        }).error(function (data) {

        });

        CountryService.getAll().success(function (data) {
            $scope.loadCountry = false;
            $scope.countries = data;
        }).error(function (data) {

        });

        $scope.fillStates = function (s) {
            $scope.states = s.states;
        };

        $scope.fillCities = function (s) {
            $scope.cities = s.cities;
        };

        $scope.saveUser = function (valid) {
            if (valid) {
                UsService.create($scope.user).success(function (data) {
                    
                    
                    alert('Guardado');
                }).error(function (data) {
                    alert('Error');
                });
            }
        };

    }]);

