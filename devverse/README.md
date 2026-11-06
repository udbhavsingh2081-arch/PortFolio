# 🛰️ DEVVERSE — Scientific Aerospace & Developer Portfolio

[![Built with React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-R3F-black?logo=three.js&logoColor=white)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![AWS Amplify](https://img.shields.io/badge/Hosted_on-AWS_Amplify-FF9900?logo=aws-amplify&logoColor=white)](https://aws.amazon.com/amplify/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **DEVVERSE** is a minimal, high-performance **Scientific Space & Aerospace Engineering** developer portfolio built for **Udbhav Singh Chouhan** — Full-Stack Web Developer and Computer Science undergraduate (CGPA 9.2).

---

## 🌟 Verified Deployments & Links

- **Featured App 01 — TalentTrack:** [https://talenttrack.pie.host/](https://talenttrack.pie.host/)
- **Featured App 02 — StayVerse:** [https://stay-verse-h1rd.onrender.com/listings](https://stay-verse-h1rd.onrender.com/listings)
- **LeetCode:** [leetcode.com/u/Udbhav_singh_chouhan](https://leetcode.com/u/Udbhav_singh_chouhan/) (150+ problems solved)
- **GitHub:** [github.com/udbhavsingh2081-arch](https://github.com/udbhavsingh2081-arch)
- **LinkedIn:** [linkedin.com/in/udbhav-singh-cse](https://linkedin.com/in/udbhav-singh-cse)

---

## 🛰️ Scientific Interface & Design System

The visual architecture is inspired by modern **NASA mission control consoles**, **aerospace telemetry interfaces**, and clean **Apple SaaS design principles**:

- **Color Harmony:** Deep-space background (`#050914`), surface plates (`#101B2C`), subtle structural borders (`#243247`), electric cyan telemetry (`#38BDF8`), and cold starlight typography (`#F1F5F9`).
- **Astronomical Visualization:** Procedural Three.js celestial body with realistic day/night lighting, mathematical orbital rings (LEO & transfer trajectories), and active scientific satellites with solar arrays.
- **Editorial Negative Space:** Spacious 1200px max container with clean technical grid lines, hairline dividers, and zero visual clutter.
- **Interactive Case Studies:** Full-screen technical inspection modals for TalentTrack and StayVerse detailing the architectural choices, problem statements, and key engineering learnings.
- **Verified Credentials:** Interactive accreditation dossier modal for NPTEL (Java 90%, DBMS 68%), Google AI, and Coursera certificates.

---

## 🛠️ Technical Stack

- **Frontend Core:** React 19, Vite 8
- **3D Graphics & Shaders:** Three.js, React Three Fiber, Drei
- **Styling:** Tailwind CSS v4, Scientific Custom Properties, Dark Editorial Grid
- **Motion & Micro-interactions:** Framer Motion
- **Icons:** Lucide React + custom high-contrast SVG symbols
- **Deployment Platform:** AWS Amplify Hosting (CI/CD Pipeline with Git integration)

---

## ☁️ AWS Amplify Hosting & Deployment

The repository includes a ready-to-deploy `amplify.yml` configuration:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### Steps to Deploy on AWS Amplify:
1. Push this project to your GitHub repository.
2. Sign in to the **AWS Management Console** and navigate to **AWS Amplify**.
3. Click **Host web app** and connect your GitHub repository.
4. Select the `main` branch. Amplify will auto-detect the Vite build settings using `amplify.yml`.
5. Click **Save and Deploy**. Your portfolio will build and deploy to a public AWS Amplify URL with automatic SSL.

---

## 🏃 Local Development

```bash
# Clone the repository
git clone https://github.com/udbhavsingh2081-arch/devverse.git

# Navigate to project directory
cd devverse

# Install dependencies
npm install

# Start Vite development server
npm run dev

# Build for production
npm run build
```

---

© 2026 Udbhav Singh Chouhan. All rights reserved.
