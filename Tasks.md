# Tasks #
All tasks needed for smart-downloader to work properly are listed below. Tasks are separated into two sections, for client and server applications.

## Client ##
>**[UI] Status bar** - _Create UI representation for status bar in application_
>- all screen long
>- placed at the bottom of the screen
>- fits whole screen width regardless screen size manipulations
>- displays informations about account status (transfer limit, premium days left, number of current downloads)
>- detail informations shows up on hover in tooltip (account name, registration date, transfer limit, premium days left, amount of data downloaded with this account)
>- should handle multiple accounts (eg. multiple bars, each in other color)
>- status bar color fill should depend on transferLeft/maxTransfer formula (longer bar means more transfer left)
>- all view data should be powered by knockoutjs

-

>**[UI] Color picker** - _Prepare color picker control_
>- control should contain only predefined list of colors
>- no way to select custom color
>- prepare color pallet that will contain at least 10 colors

## Server ##
