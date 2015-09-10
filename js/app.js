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


requirejs(["jquery", "bootstrap", "PlaylistView"], function($, bootstrap, PlaylistView) {
    $(function(){

        var playlist = new PlaylistView();

    });

});


console.log('app.js');

