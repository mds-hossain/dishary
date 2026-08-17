# Dishary

Dishary is an AI-powered, interactive language learning progressive web application (PWA). Built with React, the platform offers structured CEFR-aligned coursework (A1 to B2), automated speech recognition practice, intelligent AI tutoring, and adaptive quiz assessments.

---

## Badges

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![QA & Testing](https://img.shields.io/badge/Quality_Assurance-Verified-brightgreen?style=for-the-badge)

---

## Key Features

* **CEFR Level Progression:** Structured modules from beginner (A1) to upper-intermediate (B2) with dedicated vocabulary, flashcards, and assessment quizzes.
* **AI Tutor & Conversational Practice:** Real-time conversational AI integration for grammar assistance, contextual explanations, and dynamic language exercises.
* **Speech Recognition & Audio:** Integrated browser Speech API support for pronunciation testing and interactive audio exercises.
* **Adaptive Learning UI:** Responsive design across desktop, tablet, and mobile with complete dark mode and theme switching support.
* **Offline-Ready PWA:** Service worker caching and web manifest configuration for fast loading and offline review capabilities.

---

## Tech Stack & Core Libraries

| Layer | Technology / Tool |
| :--- | :--- |
| **Frontend Framework** | React.js |
| **State Management** | React Context API (`ThemeContext`, `UserContext`, `AIContext`) |
| **Styling & Design System** | Modular CSS, Custom Responsive Utilities, Dynamic Theming |
| **APIs & Web Capabilities** | Web Speech API, AI Model Integration, Web Storage API |
| **Deployment & Build** | Netlify, Service Workers, Progressive Web App (PWA) Manifest |

---

## Quality Assurance & Testing Scope

This repository serves as a Quality Assurance project showcase. The application has been systematically evaluated across multiple test dimensions:

* **Functional & UI Testing:** Component-level validation, navigation flows, and interactive state management (flashcards, score calculations, lesson progress).
* **AI & Speech API Testing:** Edge case validation for asynchronous API failures, rate limiting, and voice recognition fallback behaviors.
* **Responsive & Cross-Device Compatibility:** Comprehensive layout verification across mobile, tablet, and widescreen desktop breakpoints.
* **Usability & Accessibility (a11y):** Keyboard navigation support, dynamic theme contrast compliance, and screen-reader friendliness.
* **PWA Performance:** Service worker lifecycle inspection, cache validation, and offline reliability metrics.

---

## System Architecture

> **Notice:** The complete application source code is maintained within a private repository for security and intellectual property protection. The architectural layout below provides an overview of the system complexity and module boundaries.

```text
dishary-complete/
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── favicon.ico
│   ├── robots.txt
│   ├── service-worker.js
│   └── icons/
│       ├── icon-72.png
│       ├── icon-96.png
│       ├── icon-128.png
│       ├── icon-144.png
│       ├── icon-152.png
│       ├── icon-192.png
│       ├── icon-384.png
│       └── icon-512.png
├── src/
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── AppLayout.js
│   │   │   ├── BottomNav.js
│   │   │   └── DesktopSidebar.js
│   │   ├── Screens/
│   │   │   ├── Welcome.js
│   │   │   ├── Dashboard.js
│   │   │   ├── LevelSelection.js
│   │   │   ├── Assessment.js
│   │   │   ├── LessonScreen.js
│   │   │   ├── SectionLessons.js
│   │   │   ├── GlossaryScreen.js
│   │   │   ├── AIChat.js
│   │   │   ├── TutorChat.js
│   │   │   ├── Profile.js
│   │   │   ├── Settings.js
│   │   │   ├── APIIntegration.js
│   │   │   └── Videos.js
│   │   └── UI/
│   │       ├── DarkModeToggle.js
│   │       ├── ProgressBar.js
│   │       ├── StatCard.js
│   │       ├── LessonCard.js
│   │       ├── QuizComponent.js
│   │       ├── FlashcardStack.js
│   │       ├── LoadingSpinner.js
│   │       └── ResponsiveContainer.js
│   ├── contexts/
│   │   ├── ThemeContext.js
│   │   ├── UserContext.js
│   │   └── AIContext.js
│   ├── data/
│   │   ├── lessons/
│   │   │   ├── a1-lessons.js
│   │   │   ├── a2-lessons.js
│   │   │   ├── b1-lessons.js
│   │   │   └── b2-lessons.js
│   │   ├── vocabulary.js
│   │   ├── quizQuestions.js
│   │   └── videoPlaylists.js
│   ├── utils/
│   │   ├── storage.js
│   │   ├── speechAPI.js
│   │   ├── aiHelpers.js
│   │   └── responsive.js
│   └── styles/
│       ├── globals.css
│       ├── responsive.css
│       └── themes.js
├── package.json
├── netlify.toml
├── .env.example
└── README.md
