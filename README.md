# GWS_MAA_extension

web extension for GWS MAA application

```bash
gwsmaa_chrome_extension/
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



1. Google Cloud Console Setup: Configure OAuth credentials and approve necessary scopes for the Google Workspace APIs you intend to use.
2. User Authorization: Ensure users authenticate using their Google accounts via the Chrome extension popup. Store and manage tokens securely.
3. Server-Side Processing: Use the OAuth tokens to make authenticated requests to Google’s APIs to perform tasks. Ensure proper error handling and logging to identify and handle issues effectively.

How It Will Work


1. The User opens the Chrome extension and submits a task.
2. The Chrome Extension initializes OAuth flow, gets the user token, and sends it along with task details to the Flask server.
3. The Flask Server receives the task and token, builds a prompt, interacts with the Claude API to get steps for the task.
4. The Flask Server then uses Google Workspace APIs with the OAuth token to execute the task.
5. Results are sent back to the Chrome extension and displayed to the user.

This approach ensures that API keys and tokens are managed securely on the server-side, and users of the Chrome extension have a seamless and secure experience interacting with Google Workspace services.




1. Handle OAuth Tokens: The Flask server receives the OAuth token and uses it to authenticate requests to Google Workspace services.
2. Interact with Claude API: It constructs a prompt and sends it to Claude using the API, then processes the response to determine necessary actions.
3. Google Workspace Integration: Using OAuth tokens, it can perform various tasks such as sending emails, creating documents, adding calendar events, and more.

Summary


1. Chrome Extension:
   * Handles OAuth authentication.
   * Sends task details to Flask server.
2. Flask Server:
   * Processes tasks, interacts with Claude API.
   * Uses OAuth token to authenticate and perform actions using Google Workspace APIs.

By combining the Chrome extension for user interaction and authentication with the Flask server for task processing and API interactions, all functionalities outlined in the GOOGLE_APP.py are achieved securely and efficiently.