'use strict';

const parseEventBody = require('./_util/parse-event-body');

exports.handler = async function(event) {
  try {
    const body = parseEventBody(event);
    console.log(body.CallSid, body.TranscriptionText);

    return {
      statusCode: 201,
      body: ''
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: e.message
    };
  }
};
