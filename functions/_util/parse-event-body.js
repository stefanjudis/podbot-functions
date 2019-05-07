const querystring = require('querystring');

function parseEventBody(event) {
  let { isBase64Encoded, body } = event;
  if (isBase64Encoded) {
    body = Buffer.from(body, 'base64').toString();
  }

  return querystring.parse(body);
}

module.exports = parseEventBody;
