# 💪 RKFit Nonstopes – Daily Workout Notifier

## 📌 Project Overview

RKFit Nonstopes is a web-based fitness reminder application designed to help users maintain consistency in their workout routines. The application allows users to schedule daily or weekly workout notifications directly in their browser using the Notification API.

This project focuses on simplicity, usability, and performance by eliminating the need for backend servers and storing all data locally on the user's device.

---

## 🎯 Objectives

* To develop a lightweight fitness reminder system
* To utilize browser Notification API effectively
* To implement local data storage using LocalStorage
* To encourage users to maintain a consistent workout routine
* To create a responsive and modern UI

---

## 🚀 Key Features

### 🔔 Smart Notifications

* Sends workout reminders at scheduled times
* Custom message support
* Different urgency levels (Normal, High, Chill)

### 📅 Flexible Scheduling

* Select specific days (Mon–Sun)
* Set custom time for reminders
* Multiple reminders supported

### 🏋️ Workout Types

* Strength
* Cardio
* Yoga
* HIIT
* Cycling
* Swimming
* Boxing
* Rest Day

### 💾 Local Storage

* Stores all schedules in browser
* No internet or server required
* Data persists across sessions

### 🧪 Test Feature

* Send instant test notification

### 🎨 UI/UX Design

* Clean and modern interface
* Responsive layout
* Animated elements and visual feedback

---

## 🛠️ Technologies Used

| Technology       | Purpose                       |
| ---------------- | ----------------------------- |
| HTML5            | Structure of the application  |
| CSS3             | Styling and animations        |
| JavaScript       | Core logic and interactivity  |
| Notification API | Sending browser notifications |
| LocalStorage API | Storing user data locally     |

---

## 📂 Project Structure

```
RKFit-Nonstopes/
│
├── index.html      → Main webpage
├── style.css       → Styling and layout
├── script.js       → Application logic
└── README.md       → Documentation
```

---

## ⚙️ Installation & Setup

### Step 1: Download Project

Download or clone the repository:

```
git clone https://github.com/your-username/rkfit-nonstopes.git
```

### Step 2: Open Project

* Navigate to project folder
* Open `index.html` in any modern browser

---

## ▶️ How It Works

1. User enables notifications
2. User creates a reminder:

   * Title
   * Time
   * Message
   * Days
   * Workout type
3. Data is stored in LocalStorage
4. JavaScript checks time every 30 seconds
5. Notification is triggered when conditions match

---

## 🔔 Notification Flow

* Permission requested from browser
* If granted → reminders are active
* If denied → user must enable manually in browser settings

---

## 📸 Screenshots

*Add your screenshots here*

---

## 🎯 Applications

* Fitness tracking
* Habit building
* Daily routine management
* Student time management

---

## 🚧 Limitations

* Works only in browser environment
* Notifications require browser to be open
* No backend or cloud sync
* No user authentication

---

## 🔮 Future Scope

* Mobile app version (Android/iOS)
* Backend integration (Flask / Node.js)
* Database support (MongoDB / MySQL)
* User login system
* Push notifications even when browser is closed
* Workout analytics dashboard

---

## 🧠 Learning Outcomes

* Understanding of Notification API
* Hands-on experience with LocalStorage
* Frontend development skills
* UI/UX design principles
* Event-driven JavaScript programming

---

## 👨‍💻 Author

**K Rama Krishan**

---

## 📜 License

This project is created for educational purposes only.

---

## 🙌 Acknowledgment

This project was inspired by the importance of discipline and consistency in fitness and daily routines.

---

## ⭐ Conclusion

RKFit Nonstopes is a simple yet powerful browser-based workout reminder system that demonstrates how modern web technologies can be used to build practical, real-world applications without requiring backend infrastructure.
