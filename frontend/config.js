const API_URL =
    window.location.hostname === "127.0.0.1" ||
    window.location.hostname === "localhost"
        ? "http://127.0.0.1:3000"
        : "https://YOUR-RAILWAY-URL.up.railway.app";