# 📘 Smart Academic Planner

## 🚀 Project Overview
The Smart Academic Planner is a web-based application designed to help students manage their academic tasks intelligently. 

Unlike a basic to-do list, this system analyzes tasks based on multiple factors and recommends what students should focus on next.

---

## 🎯 Features Implemented

### ✅ Task Management
- Add tasks with:
  - Title
  - Deadline (date & time)
  - Difficulty level (Easy / Medium / Hard)
  - Estimated time required
- View all tasks
- Mark tasks as completed

---

### ⭐ Priority Logic (Core Feature)
Each task is assigned a **priority score** based on:

1. **Deadline Proximity**
   - Tasks closer to the deadline are given higher priority
   - Overdue tasks receive the highest urgency

2. **Difficulty Level**
   - Easy → Low weight
   - Medium → Moderate weight
   - Hard → High weight

3. **Estimated Time Required**
   - Tasks requiring more time are prioritized higher to ensure early start

#### 🧠 Formula Used:

Priority Score = Deadline Score + Difficulty Score + Time Score


- Deadline Score → Based on remaining time
- Difficulty Score → Weighted (Easy=10, Medium=20, Hard=30)
- Time Score → Estimated hours × 2

---

### 🔥 Decision Feature
**"What Should I Do Today?"**

- Recommends **Top 3 tasks**
- Based on highest priority scores
- Only considers pending tasks

---

### 📊 Dashboard
- Total number of tasks
- Completed vs Pending tasks
- Visual representation using **Pie Chart**
- Task urgency shown using color indicators:
  - 🔴 High Priority
  - 🟡 Medium Priority
  - 🟢 Low Priority

---

### 🧰 Tech Stack
- **Frontend:** React (Vite)
- **Backend:** FastAPI
- **Database:** SQLite
- **Libraries Used:**
  - Axios (API calls)
  - date-fns (deadline calculations)
  - Chart.js (data visualization)

---

### 🌍 Open Source Usage
The project uses open-source libraries meaningfully:
- **date-fns** → Calculates and formats deadline time differences
- **Chart.js** → Visualizes task completion statistics

---

## 🏗️ Project Structure

smart-academic-planner/
│── backend/
│── frontend/
│── README.md


---

## ▶️ How to Run

### Backend

cd backend
pip install -r requirements.txt
python -m uvicorn main:app --reload


### Frontend

cd frontend
npm install
npm run dev
