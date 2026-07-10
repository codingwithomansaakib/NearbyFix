
// === USER login ===
document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Provider Login
    // ==========================

    const providerLoginForm = document.getElementById("providerLoginForm");

    if (providerLoginForm) {

        providerLoginForm.addEventListener("submit", async function (e) {

            e.preventDefault();

            const phone = document.getElementById("phone").value.trim();
            const password = document.getElementById("password").value;

            try {

                const res = await fetch(`${API_URL}/api/login/provider`, {

                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        phone,
                        password
                    })

                });

                const data = await res.json();

                if (res.ok) {

                    alert("Login Successful");

                    window.location.href = "index.html";

                } else {

                    alert(data.error || "Login Failed");

                }

            } catch (err) {

                console.error(err);

                alert("Unable to connect to server.");

            }

        });

    }


    // ==========================
    // Contact Form
    // ==========================

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", async function (e) {

            e.preventDefault();

            const name = this.name.value.trim();
            const email = this.email.value.trim();
            const message = this.message.value.trim();

            try {

                const res = await fetch(`${API_URL}/api/contact`, {

                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({

                        name,
                        email,
                        message

                    })

                });

                const data = await res.json();

                if (res.ok) {

                    window.location.href = "contact-success.html";

                } else {

                    alert(data.error || "Message sending failed.");

                }

            } catch (err) {

                console.error(err);

                alert("Unable to connect to server.");

            }

        });

    }

});


// ==========================
// Mobile Menu
// ==========================

function toggleMenu() {

    const nav = document.getElementById("navLinks");

    if (nav) {

        nav.classList.toggle("show");

    }

}