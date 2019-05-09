'use strict';

exports.handler = function(context, event, callback) {
  // do something with the data here
  console.log(event.CallSid, event.TranscriptionText);
  // CallSid: ‘CA3ac5f19…’
  // RecordingUrl: “Hello everybody I hope…”

  callback(null);
};
