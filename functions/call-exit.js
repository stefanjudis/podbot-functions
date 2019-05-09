'use strict';

exports.handler = function(context, event, callback) {
  // do something with the data here
  console.log(event.CallSid, event.RecordingUrl);
  // CallSid: ‘CA3ac5f19…’
  // RecordingUrl: ‘https://api.twilio.com/2010-04-01/Accounts/ACa3.../Recordings/RE92…’

  callback(
    null,
    `<Response>
      <Say voice="woman" language="en-US">Thanks.</Say>
    </Response>`
  );
};
