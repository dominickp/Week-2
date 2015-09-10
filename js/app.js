requirejs.config({
    baseUrl: 'js/vendors',
    paths: {
        "playlist": "../app/Playlist",
        "jquery": "jquery.min",
        "bootstrap": "bootstrap.min"
    },
    shim: {
        "bootstrap": ["jquery"]
    }
});


requirejs(["jquery", "bootstrap", "playlist"], function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
        console.log($('#addSongForm').text());
    });
});


console.log('app.js');