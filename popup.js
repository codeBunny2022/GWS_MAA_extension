import { getAuthToken, revokeAuthToken } from './oauth.js';

document.getElementById('submit').addEventListener('click', async () => {
    const task = document.getElementById('task').value;
    const responseElement = document.getElementById('response');

    const token = await getAuthToken();
    
    const data = {
        task: task,
        already_done: '',
        workspace_content: '',
        prompt_history: '',
        current_service_url: '',
        service_history: '',
        token: token
    };

    try {
        const response = await fetch('YOUR_FLASK_SERVER_URL', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        responseElement.textContent = JSON.stringify(result, null, 2);
    } catch (error) {
        responseElement.textContent = 'Error: ' + error.message;
    }
});

document.getElementById('signout').addEventListener('click', async () => {
    await revokeAuthToken();
    alert('Signed out');
});