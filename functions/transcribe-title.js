'use strict';

const parseEventBody = require('./_util/parse-event-body');

exports.handler = async function(event) {
  const body = parseEventBody(event);
  console.log(body.CallSid, body.TranscriptionText);

  return {
    statusCode: 201,
    body: ''
  };
};
