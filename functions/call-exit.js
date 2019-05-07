'use strict';

const parseEventBody = require('./_util/parse-event-body');

exports.handler = async function(event) {
  const body = parseEventBody(event);
  console.log(body.CallSid, body.RecordingUrl);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/xml'
    },
    body: `
      <Response>
        <Say voice="woman" language="en-US">Thanks</Say>
      </Response>
    `
  };
};
