🏗️ Challenge: Infrastructure Dashboard Refactoring
Welcome to your trial day! We are excited to have you here.

1. The Situation
In this repository, you will find a prototype for an infrastructure analytics dashboard used for structural inspections. The current code (src/AnalysisDashboard.tsx) was built under time pressure. While it works technically, the architecture is unstable, difficult to test, and does not scale.

2. Your Mission
Your task is to transform this prototype into a production-ready frontend architecture. We are looking for someone who takes responsibility for code quality and proactively suggests clean solutions.

3. Task Packages
A) Refactoring & Architecture
Separation of Concerns: Decouple business logic (API calls, calculations) from the UI presentation.

Modularization: Break down the large file into small, reusable components (e.g., /components, /hooks).

State Management: Optimize how data and filters are handled within the application.

B) TypeScript & Data Modeling
Remove all any types.

Create clean interfaces for our domain entities (Structure/Bauwerk, Area, Grade, Status).

C) Modern UI/UX with TailwindCSS
Replace the current inline styling with a consistent design using TailwindCSS.

Implement loading states and basic error handling (e.g., what happens if the API returns an error?).

D) Professional Visualization
The current bar display for "Grades" in the sidebar is a temporary fix.

Implement a professional visualization (e.g., using a library of your choice like Recharts, Chart.js, etc.) that would be meaningful for an engineer.

E) REST API Integration (Focus Task)
Abstract the communication with the backend. Create an API service layer that interacts with the following (simulated) endpoints:

GET /api/v1/structures: Fetches the list of structures.

PATCH /api/v1/structures/{id}: Updates the status of a specific structure.

Requirement: The service should be future-proof.

4. Technical Stack
Framework: React with Vite & TypeScript.

Styling: TailwindCSS (pre-installed).

Libraries: You are free to add additional libraries (Charts, Icons, API clients). Please briefly justify your choice during the presentation.

5. Setup
npm install

npm run dev

6. What we look for (Evaluation Criteria)
Clean Code: How readable and maintainable is your code?

Independence: How do you handle ambiguous requirements?

Domain Understanding: How do you handle technical data?

Potential for Relief: Would I feel confident pushing this code to production tomorrow?
