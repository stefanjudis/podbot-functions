# PodBot functions

> aka how to control Twilio voice call with Serverless functions

**This article is the base of the Twilio tutorial [How to control and record voice messages with Node.js serverless functions TODO](...)**

![TwiML flow for Twilio voice calls](./media/flow.jpg)

## Getting started

```bash
$ git clone git@github.com:stefanjudis/podbot-functions.git
$ cd podbot-functions
$ npx twilio-run
```

After running [twilio-run](https://www.npmjs.com/package/twilio-run) three functions will be accessible publicly.

![Accessible function endpoints in the terminal](./media/ngrok.jpg)

Head over to your [Twilio Console](https://www.twilio.com/console/) and configure one number to call your local ngrog `/call-enter/` endpoint when a call comes in.

![Twilio console for number configurationw with one configured webhook to use local functions](./media/console.jpg)

And that's it. Hit "save" and call your Twilio number. You'll see `CallSid`, `RecordingUrl` and `TranscriptionText` logged to your terminal.

![Logs of `CallSid`, `RecordingUrl` and `TranscriptionText`](./media/console.jpg)

---

For further information on how to use this project and build function driven phone calls check [the tutorial](TODO).
