# Tasks #
_All tasks needed for smart-downloader to work properly are listed below. Tasks are separated into two sections, for client and server applications._

## Client ##
_All components used in UI should come from bootstrap library. Keep english as main library, application will have localization feature._

**[UI] Status bar** - _Create UI representation for status bar in application_
- all screen long
- placed at the bottom of the screen
- fits whole screen width regardless screen size manipulations
- displays informations about account status (transfer limit, premium days left, number of current downloads)
- detail informations shows up on hover in tooltip (account name, registration date, transfer limit, premium days left, amount of data downloaded with this account)
- should handle multiple accounts (eg. multiple bars, each in other color)
- status bar color fill should depend on transferLeft/maxTransfer formula (longer bar means more transfer left)
- all view data should be powered by knockoutjs

-

**[UI] Color picker** - _Prepare color picker control_
- control should contain only predefined list of colors
- no way to select custom color
- prepare color pallet that will contain at least 10 colors

-

**[UI] Popup window** - _Prepare popup/flyout control_
- some actions in application should be done with floating window, eg. adding account, adding files to queue, config settings

-

**[UI] Files list** - _Create list of downloaded/downloading files_
- scrollable list
- each item should have icon that incicates its status (paused, error, downloaded, queued), keep in mind that kinds of statuses may change
- file name
- progressbar which fill progress is equal to download progression, its color is equal to color assigned with account that is used for downloading particular file
- checkbox for multiselection of items
- current download speed
- estimated time for file to finnish download process (use timestamp, number of miliseconds from 01-01-1970 and humanize it with momentjs)

-

**[Core] Build system** - _Configure build system for js, css and html_
- support for all main es6 features such as modules, promises
- es5 browsers compatibility
- transpile less to css
- automatically watch for changes in file system
- should be easy to install and run
- provide minified bundle for release mode and source maps for development mode
 
-

**[UI] Login screen** - _Create login view_
- input fields for login and password
- 'ok' and 'cancel' buttons
- placeholder for application logo(that not yet exists) and name(which currently is draft)

-

**[UI] Loading indicator** - _Create spinner for whole app_
- will be used in many places
- consider implementing it as knockout component
- should be easily scalable, look crisp and clear both as big and small
- use html5 vector graphics apis (svg, css shapes)


## Server ##
