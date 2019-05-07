'use strict';

exports.handler = async function() {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/xml'
    },
    body: `
      <Response>
        <Say voice="woman" language="en-US">
          Welcome to PodBot. Tell me the title of your episode.
        </Say>
        <Record
          action="/.netlify/functions/call-exit/"
          timeout="5"
          transcribe="true"
          transcribeCallback="/.netlify/functions/transcribe-title/"
        />
      </Response>
    `
  };
};
