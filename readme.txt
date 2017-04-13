To run this program, simply open the Public/index.html file in a browser.

This was also designed to pull quiz information from a mongoDB. To do that, you will need to do the following:
1. in the index.js file, comment lines 17-22, and uncomment lines 25-32.
2. From the server folder run `npm i`
3. From the server folder, run `node server.js`. This will run a node server on port 8090.
4. From the server folder, run `node ./importscripts/import_quiz_languagejs` and `node ./importscripts/import_quiz_ppd.js`.
5. Open Public/index.html in the browser

Note, you may need to install the plug-in to allow for cross origin access:
https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en-US

I wrote this game with two fellow classmates during week seven of the CodeCraft full stack web development bootcamp. I wrote the majority of the MVC code in the index.js file, and the node API code.
