namespace application{
    angular.module('app', [
        'ui.router'])
        .config(configurator)
        .service('userService', services.userService)
}