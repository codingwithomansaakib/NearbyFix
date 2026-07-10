# 🛠️ NearbyFix

NearbyFix is a Local Service Provider Platform that connects users with trusted professionals such as plumbers, electricians, carpenters, home tutors, AC repair technicians, and washing machine repair experts.

Users can search for nearby service providers using their pincode, book services online, and securely pay through Razorpay.

---

## Live work :
Live_url = https://nearby-fix.vercel.app/
## ✨ Features

- 👤 User Registration & Login
- 🔧 Service Provider Registration & Login
- 🔍 Search providers by service and pincode
- 📅 Online Booking System
- 💳 Razorpay Payment Integration
- 📧 Email Confirmation
- 🤖 AI Chatbot (FixyBot)
- 📍 Location-based provider search
- 📱 Responsive Design
- 📋 User Booking History

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript
- Bootstrap 5

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### APIs & Services
- Razorpay
- Nodemailer
- OpenStreetMap (Nominatim)

---

## 📂 Project Structure

```
NearbyFix/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── config.js
│   └── ...
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── routes/
│   ├── models/
│   └── ...
│
└── README.md
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/codingwithomansaakib/NearbyFix
```

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd ../
npx http-server frontend -p 3001
```

Open:

```
http://127.0.0.1:3001
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `backend` folder.

```env
PORT=3000
MONGO_URI=YOUR_MONGODB_URI
JWT_SECRET=YOUR_SECRET
EMAIL_USER=YOUR_EMAIL
EMAIL_PASS=YOUR_APP_PASSWORD
RAZORPAY_KEY_ID=YOUR_KEY
RAZORPAY_KEY_SECRET=YOUR_SECRET
```

---

## 📸 Screenshots

Add screenshots of:

- Home Page
- User Login
- User Signup
- Search Providers
- Booking Page
- Payment
- Chatbot

---

## 📌 Future Improvements

- Live location tracking
- Provider ratings & reviews
- OTP authentication
- Admin dashboard
- Real-time notifications
- Mobile application

---

## 👨‍💻 Developer

**Oman Saakib**

B.Tech Computer Science (AI & ML)

KR Mangalam University

---

## 📄 License

This project is created for educational and portfolio purposes.
