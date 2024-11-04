async function getAuthToken(interactive = true) {
    return new Promise((resolve, reject) => {
        chrome.identity.getAuthToken({ interactive }, (token) => {
            if (chrome.runtime.lastError || !token) {
                reject(chrome.runtime.lastError);
            } else {
                resolve(token);
            }
        });
    });
}

async function revokeAuthToken() {
    let token = await getAuthToken(false);
    chrome.identity.removeCachedAuthToken({ token }, () => {
        fetch(`https://accounts.google.com/o/oauth2/revoke?token=${token}`);
    });
}

export { getAuthToken, revokeAuthToken };