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

flask_server/
│
├── GOOGLE_APP.py
└── .env
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



## commit on 



1. Google Sheets Integration:
   * Create Spreadsheet: Create a new Google Spreadsheet.
   * Update Spreadsheet: Update values in a specified range within a Google Spreadsheet.
   * Read Spreadsheet: Read values from a specified range in a Google Spreadsheet.
2. Google Slides Integration:
   * Create Slide: Create a new Google Slides presentation.
   * Update Slide: Insert slides and update content within a Google Slides presentation.
3. Existing Google Workspace Functions:
   * Gmail: Open Gmail, send emails, and read emails.
   * Google Drive: Open Drive, create documents, read documents, and share documents.
   * Google Calendar: Open Calendar, create events, and list events.
   * Google Tasks: Add tasks and complete tasks.
   * File Search: Search for files within Google Drive.



Example Use Cases

#### 1. Send an Email via Gmail

* Thought: "I am opening Gmail to send an email to the recipient."
* Actions:


```bash
{
  "thought": "I am opening Gmail to send an email to the recipient.",
  "actions": ["open_gmail()", "send_email('example@example.com', 'Subject', 'Email body')"]
}
```



#### 2. Create a Google Document

* Thought: "I am opening Google Drive to create a new document with the specified content."
* Actions:


```bash
{
  "thought": "I am opening Google Drive to create a new document with the specified content.",
  "actions": ["open_drive()", "create_document('New Document', 'This is the content of the new document.')"]
}
```



#### 3. Create a Google Spreadsheet

* Thought: "I am creating a new Google Spreadsheet."
* Actions:


```bash
{
  "thought": "I am creating a new Google Spreadsheet.",
  "actions": ["create_spreadsheet('New Spreadsheet')"]
}
```



#### 4. Update a Google Spreadsheet

* Thought: "I am updating values in the specified range of the spreadsheet."
* Actions:


```bash
{
  "thought": "I am updating values in the specified range of the spreadsheet.",
  "actions": ["update_spreadsheet('spreadsheet_id', 'Sheet1!A1:C10', [['value1', 'value2'], ['value3', 'value4']])"]
}
```



#### 5. Read Values from a Google Spreadsheet

* Thought: "I am reading values from the specified range of the spreadsheet."
* Actions:


```bash
{
  "thought": "I am reading values from the specified range of the spreadsheet.",
  "actions": ["read_spreadsheet('spreadsheet_id', 'Sheet1!A1:C10')"]
}
```



#### 6. Create a Google Slides Presentation

* Thought: "I am creating a new Google Slides presentation."
* Actions:


```bash
{
  "thought": "I am creating a new Google Slides presentation.",
  "actions": ["create_slide('New Presentation')"]
}
```



#### 7. Update Google Slide Content

* Thought: "I am updating content of the specified slide in the presentation."
* Actions:


```bash
{
  "thought": "I am updating content of the specified slide in the presentation.",
  "actions": ["update_slide('presentation_id', {'title': 'Slide Title', 'body': 'Slide Content'})"]
}
```



Detailed Breakdown of Each Function


1. Gmail Functions:
   * open_gmail(): Opens Gmail.
   * send_email(recipient, subject, body): Sends an email to the specified recipient.
   * read_emails(): Reads the latest emails.
2. Google Drive Functions:
   * open_drive(): Opens Google Drive.
   * create_document(doc_name, content): Creates a new document with the specified name and content.
   * read_document(doc_name): Reads the content of the specified document.
   * share_document(doc_name, user_email): Shares the specified document with the given email address.
3. Google Calendar Functions:
   * open_calendar(): Opens Google Calendar.
   * create_event(title, date, time, location): Creates a new event with the specified details.
   * list_events(): Lists upcoming events.
4. Google Tasks Functions:
   * add_task(task_title, task_description): Adds a new task with the specified title and description.
   * complete_task(task_id): Marks the specified task as completed.
5. Google Sheets Functions:
   * create_spreadsheet(spreadsheet_name): Creates a new spreadsheet with the given name.
   * update_spreadsheet(spreadsheet_id, range_name, values): Updates values in the specified range of the given spreadsheet.
   * read_spreadsheet(spreadsheet_id, range_name): Reads values from the specified range of the given spreadsheet.
6. Google Slides Functions:
   * create_slide(presentation_name): Creates a new Slides presentation with the specified name.
   * update_slide(presentation_id, slide_content): Updates the specified slide within the presentation with the given content.



Example Use Case Workflow

Let's consider a workflow for creating and updating a Google Spreadsheet:


1. User Action: The user enters a task to create a new spreadsheet.

   Example interaction:

```bash
{
    "task": "Create a new spreadsheet called 'Project Plan'.",
    "already_done": "",
    "workspace_content": "",
    "prompt_history": "",
    "current_service_url": "",
    "service_history": "",
    "token": "user_oauth_token_here"
}
```




2. Flask Server Processing:
   * The server parses the task and constructs a prompt.
   * Sends the prompt to Claude API for analysis.
   * Receives the response including the thought and actions:


```bash
{
    "thought": "I am creating a new Google Spreadsheet.",
    "actions": ["create_spreadsheet('Project Plan')"]
}
```




3. Executing the Actions:
   * The server reads the action and creates a new Google Spreadsheet using the user's OAuth token.
   * Responds back to the extension with the result.
4. User Check: The user can then receive feedback and view the newly created spreadsheet directly.


