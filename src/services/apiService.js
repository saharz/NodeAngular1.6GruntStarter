/**
 * Created by Sahar Zakay.
 */
(function(window) {
    'use strict';

    var module = (function() {
        function _createGetFliclkrPublicThumbnails(callback){
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                    callback(JSON.parse(this.response));
                }
            };
            xmlhttp.open("GET", "http://localhost:8080/flickrs", true);
            xmlhttp.send();
        }

        function _createGetAuthorFlickrThumbnails(authorId, callback){
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                    callback(JSON.parse(this.response));
                }
            };
            xmlhttp.open("GET", "http://localhost:8080/authorFlickr?id=" + authorId, true);
            xmlhttp.send();
        }

        return {
            getFliclkrPublicThumbnails: _createGetFliclkrPublicThumbnails,
            getAuthorFlickrThumbnails: _createGetAuthorFlickrThumbnails
        }
    })();

    window.ApiService = module;
})(window);