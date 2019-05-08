'use strict';

const parseEventBody = require('./_util/parse-event-body');

exports.handler = function(context, event, callback) {
  callback(
    null,
    `<Response>
      <Say voice="woman" language="en-US">Thanks</Say>
    </Response>`
  );
};
