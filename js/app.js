requirejs.config({
    baseUrl: 'js',
    paths: {
        "jquery": "vendors/jquery.min",
        "bootstrap": "vendors/bootstrap.min"
    },
    shim: {
        "bootstrap": ["jquery"]
    }
});


requirejs(["jquery", "bootstrap", "Playlist"], function($, bootstrap, Playlist) {
    $(function(){

        var playlist = new Playlist();

    });

});


console.log('app.js');

