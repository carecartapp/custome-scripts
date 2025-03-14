importScripts("https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js");

const storeId = 73429582066;
const apiUrl = `https://cc-cartly-abandoned-remix--umer-dev.gadget.app/SWT-Token?store_id=${storeId}`;

async function fetchFirebaseConfig() {
    try {
        let response = await fetch(apiUrl);
        let data = await response.json();

        if (data.success && data.TokenData) {
            return data.TokenData;
        } else {
            throw new Error("Invalid Firebase config response");
        }
    } catch (error) {
        console.error("Error fetching Firebase config:", error);
        return null;
    }
}

fetchFirebaseConfig().then((config) => {
    if (!config) return; // Stop execution if config is null

    const firebaseConfig = {
        apiKey: config.apiKey,
        authDomain: config.authDomain,
        projectId: config.projectId,
        storageBucket: config.storageBucket,
        messagingSenderId: config.messagingSenderId,
        appId: config.appId,
        measurementId: config.measurementId
    };

    firebase.initializeApp(firebaseConfig);
    const messaging = firebase.messaging();

    messaging.onBackgroundMessage((payload) => {
        console.log("Received background message:", payload);
        self.registration.showNotification(payload.notification.title, {
            body: payload.notification.body,
            icon: payload.notification.icon
        });
    });
});
