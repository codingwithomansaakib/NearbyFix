const API_URL =
    window.location.hostname === "127.0.0.1" ||
    window.location.hostname === "localhost"
        ? "http://127.0.0.1:3000"
        : "https://nearbyfix-backend-2dm4.onrender.com";