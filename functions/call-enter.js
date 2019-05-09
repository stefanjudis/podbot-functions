'use strict';

exports.handler = function(context, event, callback) {
  let response = new Twilio.twiml.VoiceResponse();

  // documentation for say
  // -> https://www.twilio.com/docs/voice/twiml/say
  response.say(
    { voice: 'woman', language: 'en-US' },
    'Welcome to PodBot. Tell me the title of your episode.'
  );

  // documentation for record
  // -> https://www.twilio.com/docs/voice/twiml/record
  response.record({
    action: '/call-exit',
    timeout: '5',
    transcribe: 'true',
    transcribeCallback: '/transcribe-title'
  });

  callback(null, response);
};
