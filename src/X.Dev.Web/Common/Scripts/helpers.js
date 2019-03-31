var App = App || {};
(function () {

    var appLocalizationSource = abp.localization.getSource('Dev');
    App.localize = function () {
        return appLocalizationSource.apply(this, arguments);
    };

})(App);