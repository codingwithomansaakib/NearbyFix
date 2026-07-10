const express = require('express');
const router = express.Router();
const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post('/message', async (req, res) => {
  try {
    const { message, userEmail } = req.body;
    if (!userEmail) return res.json({ reply: "❌ Please login to use NearbyFix Chatbot." });

    const lower = message.toLowerCase();

    // --------- MAIN MENU ---------
    if (lower === "1" || lower.includes("book")) {
      return res.json({
        reply: `📌 How to Book a Service:
- Select Service (Plumber, Electrician…)
- Enter Pincode
- Choose Provider
- Enter Name & Email
- First booking: Free ✅, Subsequent: ₹9 💰`
      });
    }

    if (lower === "2" || lower.includes("about")) {
      return res.json({
        reply: `🏢 About NearbyFix:
Book trusted local service providers like plumbers, electricians, carpenters, tutors & appliance repair experts.

💡 Mission: Make booking effortless, secure & reliable.
🌟 Why Choose Us:
- Instant booking by service & pincode
- Instant email confirmation
- Verified local providers
- Direct contact after booking
🙋‍♂️ Founder: Oman Saakib`
      });
    }

    if (lower === "3" || lower.includes("service")) {
      return res.json({
        reply: `✅ NearbyFix Services:\n- Plumber\n- Electrician\n- Carpenter\n- Home Tutor\n- Mason\n- AC / Fridge Repair\n- Washing Machine Repair`
      });
    }

    if (lower === "4" || lower.includes("support")) {
      return res.json({
        reply: `📞 Customer Support:\nCall: +91 7667875691\nEmail: servicenearme07@gmail.com\nOr type your issue here and our team will contact you.`
      });
    }

    // --------- DEFAULT MAIN MENU ---------
    if (!["1","2","3","4"].includes(lower)) {
      return res.json({
        reply: `👋 Hi! I am FixyBot 🤖. How can I help you today?\n1️⃣ How to Book a Service\n2️⃣ About NearbyFix\n3️⃣ List Services\n4️⃣ Customer Support 24/7\nPlease type 1, 2, 3, or 4.`
      });
    }

    // --------- FALLBACK AI RESPONSE ---------
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are FixyBot, a friendly AI assistant for NearbyFix users." },
        { role: "user", content: message }
      ]
    });

    res.json({ reply: completion.choices[0].message.content });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Chatbot error' });
  }
});

module.exports = router;
