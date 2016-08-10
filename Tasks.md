# Tasks #
_All tasks needed for smart-downloader to work properly are listed below. Tasks are separated into two sections, for client and server applications._

## Client ##
_All components used in UI should come from bootstrap library. Keep english as main library, application will have localization feature._

**[UI] Status bar** - _Create UI representation for status bar in application_
- all screen long
- placed at the bottom of the screen
- fits whole screen width regardless screen size manipulations
- displays informations about account status:
  - transfer limit
  - premium days left
  - number of current downloads
- detail informations shows up on hover in tooltip: 
  - account name
  - registration date
  - transfer limit
  - premium days left
  - amount of data downloaded with this account
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
- each item contains:
  - file name
  - progressbar which fill progress is equal to download progression, its color is equal to color assigned with account that is used for downloading particular file
  - current download speed
- checkbox for multiselection of items
- delete item button

- estimated time for file to finnish download process (use timestamp, number of miliseconds from 01-01-1970 and humanize it with momentjs)
- button for direct download file from application-host-server

-

**[Core] Build system** - _Configure build system for js, css and html_
- support for all main es6 features such as modules, promises
- es5 browsers compatibility, include polyfills
- transpile scss to css
- automatically watch for changes in file system
- should be easy to install and run
- provide minified bundle for release mode and source maps for development mode
- copy all assets files eg. .jpg, .png, .gif etc.

-

**[UI] Login screen** - _Create login view_
- input fields for login and password
- buttons:
  - ok
  - button
- placeholder for application logo(that not yet exists) and name(which currently is draft)

-

**[UI] Loading indicator** - _Create spinner for whole app_
- will be used in many places
- consider implementing it as knockout component
- should be easily scalable, look crisp and clear both as big and small
- use html5 vector graphics apis (svg, css shapes)

-

**[Core] Domain communication** - _Create communication mechanism between server and client applications_
- should be websocket based
- easy to use
- limit minimum code needed for each message
- able to handle two way communication
- ability to broadcast and send messages for particular user from domain

-

**[UI] Files adding form** - _Create form for adding new files to download_
- use popup control
- textarea with multiline support where urls will be pasted in
- buttons: 
  - check
  - add
  - cancel
- list of evaluated files
- status of file: 
  - available
  - inavailable
  - unknown
- multiselect using checkboxes
- delete item button
- ability to choose which account should be used to download those files
- after user paste url listed informations are shown:
  - name of file
  - file size
  - status
  - hosting service name
- there is no way to add files to queue if status any of files is inavailable or unknown
- sum of transfer needed to download all files

-

**[UI] Settings form** - _Create form for settings changes_
- general tab content should be generated dynamically
- fieldset bound to colletion of objects
- input, checkbox, colorPicker, dropdown
- tabs: 
  - general, contains general information like default download path, default number of concurrent connections, etc
  - accounts, contains storage providers accounts manager
  - users, contains users manager
- appears in popup
- buttons: 
  - save, saves settings and closes popup window
  - cancel, just closes the window, all changes are rejected

-

**[UI] Directory selector** - _Create control that will handle selection of target directory_
- lists inner files and directories as list-items or tiles (ability to switch between those two)
- displays name, last-modified-date (only in list mode)
- breadcrumb feature that reflect directory structure
- last item on breadcrumb should be current directory
- each item of breadcrumb structure except last one should be navigatable

-

**[UI] File system manager** - _Create file manager control_
- create directory
- possible actions:
  - rename
  - move
  - delete file/directory
- breadcrumbs feature (look at directory selector)
- multiselect (for batch remove)


## Server ##
_Server side application requirements_

**[Core] Downloading files** - _Create solution for chunked files downloading_
- pause download
- resume download
- exposes informations about: 
  - download progress
  - download speed
  - file size
- download one file with configurable number of concurrent connections
- support for server that does not expose APIs for chunked downloading using legacy HTTP/1.0 without concurrent connections and pause/resume features

-

**[Core] Data repositories** - _Create data storage service_
- do not remove deprecated data, hide it instead
- allow creating mocks
- allow multiple implementations
- select efficient, simple dbms system
- use transaction mechanism, there is need to rollback changes
- create base implementation:
  - get, query for single element
  - find, query for all elements
  - findAll, query for all elements even removed

-

**[Core] Download services** - _Create abstraction for downloading services_
- allow multiple implementations
- create common data structure for credentials
- api's base paths stored in config.json file
- create implementation for at least one provider
- check transfer left
- check number of days left until premium account expire
- generate direct download link
- check if direct download is turned on

-

**[Core] Data structures** - _Create base entity_
- abstract identity type (guid or sequential number)
- isActive flag
- createdDate
- modified date
- modified by
- base entity informations should be set automatically

-

**[API] Files structure** - _Create API for exploring files structure_
- return files and directories inside passed directory
- each returned item should contain: 
  - filename
  - type(directory or file)
  - last-modified-date

-

**[API] Downloaded files** - _Create API for exploring downloading/downloaded files_
- remove / remove multiple
- remove with file remove
- URLs availability check
- add multiple URLs
- collection of currently downloaded files
- each file information contains:
  - name
  - status
  - download percentage progress 
  - current download speed 
  - time left to download

-

**[App] Download lifecycle** - _Create application running in background that will handle downloading of files_
- start/pause particular downloads
- notify connected clients about download progress and downloaded files statuses changes:
  - remove
  - add
  - download start
  - download end
  - error
