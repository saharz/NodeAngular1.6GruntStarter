/**
 * Created by Sahar Zakay.
 */
(function(window, document) {
    'use strict';

    var module = (function() {
        var divStr = 'div', spanStr = 'span', anchorStr = 'a', imageStr = 'img',
            spinnerContainer = "loading",
            publicGalleryContainer = "gallery";

        function _hideLoadingDiv(){
            var loading = document.getElementById(spinnerContainer);
            loading.style.display = "none";
        }

        function _showLoadingDiv(){
            var loading = document.getElementById(spinnerContainer);
            loading.style.display = "block";
        }

        function _removeAllImgFromGallery(){
            var galleryContainer = document.getElementById(publicGalleryContainer);

            while (galleryContainer.firstChild) {
                galleryContainer.removeChild(galleryContainer.firstChild);
            }
        }

        function _addToDomAllFlickrEntries(response){
            var container, img, link, authorTextElm, dateTextElm, imgContainer,
                docFrag = document.createDocumentFragment(),
                entries = response.feed.entry;
            container = document.getElementById(publicGalleryContainer);

            entries.forEach(function(entry) {
                imgContainer = _createHtmlElement(divStr);

                img = _createHtmlElement(imageStr);
                img.setAttribute('src', entry.link[entry.link.length - 1].$.href);

                link = _createHtmlElement(anchorStr);
                link.setAttribute('href', entry.link[0].$.href);
                link.setAttribute('title', entry.title[0]);
                link.text = window.UtilService.getValidString(entry.title[0]);

                authorTextElm = _createTextElement('Author:', window.UtilService.getValidString(entry.author[0].name[0]));
                dateTextElm = _createTextElement('Date Taken:', new Date(entry['dc:date.Taken'][0]).toDateString());

                if (response.authorHandler && window.UtilService.isFunction(response.authorHandler)) {
                    // add author handler for Author name element
                    authorTextElm.authorId = entry.author[0]['flickr:nsid'][0];
                    _createAuthorHandler(authorTextElm, response.authorHandler);
                }

                imgContainer.appendChild(link);
                imgContainer.appendChild(authorTextElm);
                imgContainer.appendChild(dateTextElm);
                imgContainer.appendChild(img);
                docFrag.appendChild(imgContainer);
            });

            container.appendChild(docFrag);
        }

        function _createAuthorHandler(elem, handler){
            elem.onclick = function() {
                handler(this.authorId);
            };
        }

        function _createTextElement(textPrefix, textSuffix){
            var div = _createHtmlElement(divStr),
                spanA = _createHtmlElement(spanStr),
                spanB = _createHtmlElement(spanStr);

            spanA.textContent = textPrefix;
            spanB.textContent = textSuffix;
            div.appendChild(spanA);
            div.appendChild(spanB);
            return div;
        }

        function _createHtmlElement(elmName){
            var elm;
            if (window.UtilService.isString(elmName)) {
                elm = document.createElement(elmName);
            }

            return elm;
        }

        return {
            showLoadingSpinner: _showLoadingDiv,
            hideLoadingSpinner: _hideLoadingDiv,
            showPublicFlickrGallery: _addToDomAllFlickrEntries,
            removeAllImgFromGallery: _removeAllImgFromGallery
        }
    })();

    window.DomService = module;
})(window, document);