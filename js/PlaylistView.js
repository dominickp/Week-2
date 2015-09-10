define(['jquery', 'Playlist'], function($, Playlist){

    var PlaylistView = function(){
        // initialize
        this.playlist = new Playlist();
        this.listenAddSong();
        this.updatePlaylistDom();
        //this.updatePlaylist();

    };
    PlaylistView.prototype.listenAddSong = function(){
        var that = this;
        $('#addSongForm').on('submit', function(event){
            that.playlist.addSong($('#song').val());
            that.updatePlaylistDom();
            $('#song').val('');

            return false;
        });
    };

    PlaylistView.prototype.updatePlaylistDom = function(){
        var that = this;
        var playlistDom = this.playlist.playlist.map(function(song, index){
            var removeButton = document.createElement("button");
            removeButton.appendChild(document.createTextNode("remove"));
            $(removeButton).click(function(){
                that.playlist.removeSong(index);
                that.updatePlaylistDom();
            });
            $(removeButton).addClass("btn");

            var li = document.createElement('li');
            li.appendChild(document.createTextNode(song));
            li.appendChild(removeButton);
            return li;
        });

        $('#currentPlaylist').html(playlistDom);

    };

    return PlaylistView;

});

console.log('playlist_view.js');
