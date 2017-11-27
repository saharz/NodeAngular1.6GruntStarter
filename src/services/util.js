/**
 * Created by Sahar Zakay.
 */
(function(window) {
    'use strict';

    var module = (function() {
        function _isString(x) {
            return Object.prototype.toString.call(x) === "[object String]"
        }

        function _isFunction(func) {
            return Object.prototype.toString.call(func) === '[object Function]';
        }

        function _validateString(str){
            return (str + '').trim() || 'Untitled';
        }

        return {
            isString: _isString,
            isFunction: _isFunction,
            getValidString: _validateString
        }
    })();

    window.UtilService = module;
})(window);