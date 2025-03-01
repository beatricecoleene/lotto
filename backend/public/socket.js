let socket;

function connectSocket() {
    const token = localStorage.getItem("token");

    if (socket) {
        console.log("⚠️ WebSocket already connected.");
        return;
    }

    console.log("🔌 Connecting to WebSocket with token:", token);

    socket = io("http://localhost:3000", {
        auth: { token }
    });

    socket.on("connect", () => {
        console.log("✅ Connected to WebSocket:", socket.id);
    });

    socket.on("disconnect", (reason) => {
        console.warn("⚠️ Disconnected from WebSocket:", reason);
    });

    socket.on("failedAuthentication", (data) => {
        console.error("❌ Authentication Failed:", data.message);
        document.getElementById("status")?.innerText = "❌ Authentication Failed: " + data.message;
        localStorage.removeItem("token");
    });

    socket.on("accountCreated", (data) => {
        console.log("✅ Account Created:", data);
        document.getElementById("status")?.innerText = `✅ ${data.message} (User: ${data.user_name})`;
    });

    socket.on("creationError", (data) => {
        console.error("❌ Account Creation Error:", data.message);
        document.getElementById("status")?.innerText = "❌ Error: " + data.message;
    });

    socket.on("LoggedIn", (data) => {
        console.log("✅ Login Success:", data);
        document.getElementById("status")?.innerText = `✅ ${data.message}`;
        
        localStorage.setItem("token", data.token);
        socket.auth.token = data.token;
        
        console.log("🔄 Updating WebSocket authentication...");
        socket.disconnect();
        setTimeout(connectSocket, 500);
    });

    socket.on("logInError", (data) => {
        console.error("❌ Login Error:", data.message);
        document.getElementById("status")?.innerText = "❌ Error: " + data.message;
    });

    socket.on("coinsClaimed", (data) => {
        console.log("🎉 Coins Claimed:", data);
        document.getElementById("status")?.innerText = `✅ ${data.message} You now have ${data.coins} coins.`;
    });

    socket.on("claimingError", (data) => {
        console.error("❌ Coin Claim Error:", data.message);
        document.getElementById("status")?.innerText = "❌ Error: " + data.message;
    });

    socket.on("roundNumber", (round) => {
        const roundElement = document.getElementById("roundNumber");
        if (roundElement) {
            roundElement.innerText = `Round: ${round}`;
        }
    });

    socket.on("timer-update", (timeRemaining) => {
        const timerElement = document.getElementById("timer");
        if (timerElement) {
            const minutes = Math.floor(timeRemaining / 60000);
            const seconds = Math.floor((timeRemaining % 60000) / 1000);
            timerElement.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    });
}

connectSocket();

function registerUser() {
    const username = document.getElementById("username")?.value;
    const email = document.getElementById("email")?.value;
    const password = document.getElementById("password")?.value;

    if (!username || !email || !password) {
        document.getElementById("status")?.innerText = "❌ Please fill in all fields!";
        return;
    }

    const userData = { user_name: username, email, password, birthdate: "2000-01-01", contact_num: "123456789" };
    console.log("📩 Sending Register Request:", userData);
    socket.emit("registerUser", userData);
}

function logInUser() {
    const email = document.getElementById("loginEmail")?.value;
    const password = document.getElementById("loginPassword")?.value;

    if (!email || !password) {
        document.getElementById("status")?.innerText = "❌ Please enter email and password!";
        return;
    }

    console.log("📩 Sending Login Request:", { email, password });
    socket.emit("userLogIn", { email, password });
}

function claimCoins() {
    const token = localStorage.getItem("token");
    if (!token) {
        document.getElementById("status")?.innerText = "❌ You need to log in first!";
        return;
    }

    setTimeout(() => {
        console.log("📩 Sending Claim Coins Request with token:", token);
        socket.auth = { token };
        console.log("🛠️ Before socket.emit(claimCoins)");
        socket.emit("claimCoins");
        console.log("🛠️ After socket.emit(claimCoins)");
    }, 500);
}
