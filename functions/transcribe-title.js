'use strict';

exports.handler = function(context, event, callback) {
  // do something with the data here
  console.log(event.CallSid, event.TranscriptionText);
  callback(null);
};
