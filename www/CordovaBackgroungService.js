cordova.define("cordova-plugin-background-call.CordovaBackgroungService", function(require, exports, module) {
var exec = require('cordova/exec');

exports.runService = function (arg0, success, error) {
    exec(success, error, 'CordovaBackgroungService', 'runService', [arg0]);
};
exports.getStringExtra = function (arg0, success, error) {
    exec(success, error, 'CordovaBackgroungService', 'getStringExtra', [arg0]);
};
exports.enableWakeupLock = function (arg0, success, error) {
    exec(success, error, 'CordovaBackgroungService', 'enableWakeupLock', [arg0]);
};
exports.mute = function (arg0, success, error) {
    exec(success, error, 'CordovaBackgroungService', 'mute', [arg0]);
};
exports.unmute = function (arg0, success, error) {
    exec(success, error, 'CordovaBackgroungService', 'unmute', [arg0]);
};
exports.speakerOn = function (arg0, success, error) {
    exec(success, error, 'CordovaBackgroungService', 'speakerOn', [arg0]);
};
exports.speakerOff = function (arg0, success, error) {
    exec(success, error, 'CordovaBackgroungService', 'speakerOff', [arg0]);
};

});
