# GWS_MAA_EXTENSION

```bash
GWS_MAA_EXTENSION/
│
├── manifest.json
├── background.js
├── popup.html
├── popup.js
├── content.js
├── utils.js
├── oauth.js
├── styles.css
└── assets/
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```


Flask Server Directory Structure

```bash
flask_server/
│
├── GOOGLE_APP.py
└── .env
```





1. Install Flask and other dependencies:

```bash
 pip install Flask Flask-Cors python-dotenv anthropic google-auth google-auth-oauthlib google-auth-httplib2
```



2\. Create .env File:


```bash
 CLAUDE_API_KEY=claude_api_key
```




3\. Flask App (GOOGLE_APP.py):
Ensure you place the code above in GOOGLE_APP.py inside the flask_server directory.



4\. Run the Flask Server:
Navigate to the flask_server directory and run:


```javascript
 python GOOGLE_APP.py
```



## Setup Chrome Extension



1. Create Extension Files:
   Ensure all the provided extension files (like manifest.json, background.js, popup.html, popup.js, content.js, utils.js, oauth.js, styles.css, and icons) are inside the GWS_MAA_EXTENSION directory.
2. Replace Placeholder Values:
   * In manifest.json, replace "GOOGLE_CLIENT_ID" with your actual Google Client ID obtained from the Google Cloud Console.
   * In popup.js, replace "FLASK_SERVER_URL" with the URL of your Flask server, e.g., <http://127.0.0.1:5000/>.
3. Load the Extension in Chrome:
   * Open Chrome and go to chrome://extensions/.
   * Enable "Developer mode" using the toggle switch in the upper right.
   * Click "Load unpacked" and select the GWS_MAA_EXTENSION directory.
4. Test the Extension:
   * Click on the Chrome extension icon and enter a task in the popup.
   * The extension will authenticate using Google OAuth and then send the task details to the Flask server for processing.
   * Results will be displayed in the extension popup.


Detailed Steps for Google OAuth Setup

Google Cloud Console Configuration:



1. Create a Project:
   * Go to the �.
   * Create a new project or select an existing project.
2. Enable APIs:
   * Go to "API & Services" > "Library".
   * Enable the necessary Google APIs (e.g., Gmail API, Google Drive API, Google Calendar API).
3. OAuth Consent Screen:
   * Go to "API & Services" > "OAuth consent screen".
   * Configure the consent screen by filling out the necessary fields.
4. Create OAuth Credentials:
   * Go to "API & Services" > "Credentials".
   * Create credentials > OAuth 2.0 Client IDs.
   * Configure the OAuth client:
     * Application type: Chrome App
     * Authorized JavaScript origins: Your domain or <http://localhost> for testing.
     * Authorized redirect URIs: https://<your_app_id>.chromiumapp.org/ (you will fill in <your_app_id> later after you get your Extension ID).
5. Get Client ID and Client Secret:
   * Once you create the OAuth credentials, you will get a Client ID and Client Secret. Use the Client ID in manifest.json.


Final Checklist

* Flask Server: Ensure the Flask server is running and accessible.


* Extension Loaded: Ensure the extension is loaded in Chrome.
  * Go to chrome://extensions/ and ensure the extension is listed and enabled.
* OAuth Configuration: Ensure OAuth is correctly configured in the Google Cloud Console and manifest.json.


