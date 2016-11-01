# Smart Downloader
_(Draft name)_

_Application that allows multi-threaded downloading of files from most popular file trackers. Its runs in background, can be accessed via browser. Consider this app as simplified web-based jdownloader. Written in TypeScript uses React & Redux as client-side and Socket.Io for communication._



## Requirements
Only tools you will need to run are nodejs and git.

## HowTo
### Compile and run
#### 1. Clone repository
<pre><code>git clone https://github.com/Kuchasz/smart-downloader.git</code></pre>

#### 2. Install packages
<pre><code>npm install</code></pre>
<pre><code>node node_modules/.bin/typings install</code></pre>

#### 3. Compile TypeScript
<pre><code>npm run compile-server</code></pre>
<pre><code>npm run compile-client</code></pre>

#### 4. Run server app and client host
<pre><code>npm run start-server</code></pre>
<pre><code>npm run start-client</code></pre>
