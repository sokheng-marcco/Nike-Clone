# Nike Website Clone (React + Vite)

This project is a **learning-focused clone of the Nike website**, built using **React JS and Vite**.  
The goal is to practice real-world frontend workflows, component structure, and clean UI implementation.

This is **not a pixel-perfect copy** of Nike’s website.  
It is created for **educational purposes only**.

---

## Tech Stack

- React JS
- Vite
- JavaScript (ES6+)
- CSS / Tailwind CSS

---

## Project Scope

- Clone **Nike Homepage**
- Responsive layout (mobile first)
- Reusable UI components
- Clean folder structure
- Easy to extend with more pages


---

## Folder Structure
```bash
src/
├── assets/
│ ├── images/
│ ├── videos/
│ └── icons/
│
├── components/
│ ├── layout/
│ │ ├── Navbar.jsx
│ │ └── Footer.jsx
│ │
│ └── home/
│   ├── Hero.jsx
│   └── PromoSection.jsx
│
├── pages/
│ └── Home.jsx
│
├── routes/
│ └── AppRoutes.jsx
│
├── data/
│ └── products.js
│
├── App.jsx
├── main.jsx

```

---

## Routing

Routing is set up using **React Router DOM** to allow easy expansion.

Current routes:
- `/` → Home page

Additional pages can be added without restructuring the project.

---

## Getting Started

### 1. Clone the repository
```bash
git clone <repository-url>

npm install

npm run dev

```