# Octoprint-TerminalMessaging

Plugin that adds styling to the terminal tab that makes it easier to see where a message is from.

Messages you send are on the right and are in green. Messages the printer sends back are on the left
and in blue.

This is similar to how a text messaging app would differentiate between sender and receiver in the
UI.

![Screenshot](screenshot.png)

This plugin is very small, and just edits the css of the elements in the terminal for readability.

## More theming

If you want a different text size, or a different color, or maybe you don't want the sent on the
right. You can adjust all of that to your heart's content. I recommend using
[Themify](https://github.com/birkbjo/OctoPrint-Themeify) to adjust these two types of fields.

In Themeify, you can check "Enable customization" and then you can attach any rules to the
`span.received` or `span.sent`. Those are the lines in the terminal for sent and received messages.

For example, if you don't want the right justified sent messages, you could do this:

|selector|CSS-Rule|value|
|-|-|-|
|span.sent|text-align|left|

If you want to make the text a little bigger, you might add these rules:

|selector|CSS-Rule|value|
|-|-|-|
|span.received|font-size|18px|
|span.received|line-height|24px|
|span.sent|font-size|18px|
|span.sent|line-height|24px|

If you want a different color for the received messages, you could do this:

|selector|CSS-Rule|value|
|-|-|-|
|span.received|color|red|

Enjoy!

## Setup

Install via the bundled [Plugin Manager](https://github.com/foosel/OctoPrint/wiki/Plugin:-Plugin-Manager)
or manually using this URL:

    https://github.com/chimcen/OctoPrint-TerminalMessaging/archive/master.zip

### Special Thanks

@jneilliii wrote this plugin after I asked about it in the forums. Thank you!
