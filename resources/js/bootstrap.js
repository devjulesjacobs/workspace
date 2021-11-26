window._ = require('lodash');

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}


window.axios = require('axios');
axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "appdevelopment.app";

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.LoadingScreen = function (set) {
    const LoadingScreen = $('#LoadingScreen');

    switch(set) {
        case 'show':
            LoadingScreen.addClass('show');
            break;
        case 'hide':
            LoadingScreen.removeClass('show');
            break;
    }
}
