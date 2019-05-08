'use strict';

exports.handler = function(context, event, callback) {
  callback(
    null,
    `<Response>
      <Say voice="woman" language="en-US">
        Welcome to PodBot. Tell me the title of your episode.
      </Say>
      <Record
        action="/call-exit/"
        timeout="5"
        transcribe="true"
        transcribeCallback="/transcribe-title/"
      />
    </Response>`
  );
};
