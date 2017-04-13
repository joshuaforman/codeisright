To run this program, simply open the public/index.html file in a browser.

This was also designed to pull quiz information from a mongoDB. To do that, you will need to do the following:

1. From the server folder run `npm i`
2. From the server folder, run `node ./importscripts/import_quiz_language.js` and `node ./importscripts/import_quiz_ppd.js`. Note: you must have a mongoDB instance running on localhost for this to work.
3. From the server folder, run `node server.js`. This will run a node server on port 8090.
4. Open public/index.html in the browser

Note, you may need to install the plug-in to allow for cross origin access:
https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en-US

I wrote this game with two fellow classmates during week seven of the CodeCraft full stack web development bootcamp. I wrote the majority of the MVC code in the index.js file, and the node API code.
