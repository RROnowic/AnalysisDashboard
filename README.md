# 🏗️ Trial Day Challenge: Infrastructure Dashboard Refactoring

Welcome to our team! We are excited to see your approach to modern frontend architecture and your ability to transform prototypes into production-ready code.

---

## 📖 1. The Situation
In this repository, you will find a prototype for an **Infrastructure Analytics Dashboard** used for structural inspections (e.g., bridges, tunnels, and overpasses). 

The current code (`src/AnalysisDashboard.tsx`) was built under extreme time pressure. While it functions correctly, the architecture is **unstable, difficult to test, and does not scale**. It is a classic "Single-File-Spaghetti" component.

## 🎯 2. Your Mission
Your task is to transform this prototype into a **production-ready frontend architecture**. We are looking for a developer who takes ownership of code quality and proactively suggests clean, maintainable solutions.

---

## 🛠️ 3. Task Packages

### **A) Refactoring & Architecture**
* **Separation of Concerns:** Decouple business logic (API calls, data transformations) from the UI presentation.
* **Modularization:** Break down the large file into small, reusable components (e.g., `/components`, `/hooks`, `/services`).
* **State Management:** Clean up how data and UI filters are handled.

### **B) TypeScript & Data Modeling**
* **Type Safety:** Remove all `any` types.
* **Interfaces:** Define robust interfaces for our domain entities: `Structure`, `Area`, `Grade`, and `Status`.

### **C) Modern UI/UX with TailwindCSS**
* **Styling:** Replace all inline styles with a consistent **TailwindCSS** implementation.
* **Feedback:** Improve user feedback by adding **loading states** and basic **error handling**.

### **D) Professional Visualization**
* **Charts:** The current bar display for "Grades" is a temporary hack. 
* **Implementation:** Replace it with a professional visualization (using a library like **Recharts**, **Chart.js**, or similar) that provides real value for an engineer analyzing bridge conditions.

### **E) REST API Integration**
Abstract the communication with our backend. Create a service layer for the following simulated endpoints:
* `GET /api/v1/structures`: Fetch the list of objects.
* `PATCH /api/v1/structures/{id}`: Update a structure's status.
* **Requirement:** Ensure the service is future-proof (e.g., centralized Base-URL, prepared for Auth headers).

---

## 💻 4. Technical Stack
* **Framework:** React (Vite + TypeScript)
* **Styling:** TailwindCSS (pre-installed)
* **Libraries:** You are free to add libraries for Charts, Icons (e.g., Lucide), or API clients (e.g., Axios). Be prepared to justify your choices.

## 🚀 5. Setup
To get started, run the following commands in your terminal:

---

## 📈 6. Evaluation Criteria
We will review your results at 2:30 PM. We are specifically looking for:

Clean Code: Is the code readable, and does it follow "Don't Repeat Yourself" (DRY) principles?

Independence: Did you find solutions for ambiguous requirements on your own?

Domain Understanding: How did you handle technical data (e.g., formatting grades and area units)?

Trust: Would I feel confident pushing this code to our production environment tomorrow?
```bash
# Install dependencies
npm install

# Start the development server
npm run dev
