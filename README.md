# Projectile Motion Simulator

An interactive web-based simulation that visualizes **projectile motion** using real-time physics and smooth canvas rendering.  
The project allows users to experiment with different parameters and intuitively understand how projectile motion behaves.

This simulator was built with a focus on **clarity, performance, and educational value**, rather than relying on heavy physics engines or external tools.

## 📌 Problem Statement
To design and implement an interactive simulation that demonstrates projectile motion by allowing users to modify physical parameters such as angle, initial velocity, and gravity.

## ✨ Features
- Adjustable **launch angle**, **initial velocity**, and **gravity**
- Real-time animation using **HTML5 Canvas**
- Smooth trajectory visualization
- Displays **maximum height**, **horizontal range** and **Time of Flight**
- Responsive UI built with Tailwind CSS
- Clean separation between UI, simulation logic, and rendering

## 🛠 Tech Stack
- **React.js** (using Vite)
- **Tailwind CSS**
- **HTML5 Canvas**
- **JavaScript (ES6+)**

- Horizontal motion: x = u cos(θ) * t
- Vertical motion: y = u sin(θ) * t − ½ g t²

Where:
- u = initial velocity  
- θ = launch angle  
- g = gravitational acceleration  
- t = time  

## Project Architecture

src/
│── components/
│ ├── Canvas.jsx # Simulation & rendering logic
│ ├── Controls.jsx # User input controls
│ └── Stats.jsx # Computed results display
│
│── utils/
│ └── calculation.js # Physics helper functions
│
│── App.jsx # State management & coordination
│── main.jsx
│── index.css

## How to Run Locally

1. Clone the repository:
   git clone https://github.com/trishalSharma/projectile-motion-simulator.git

2. Navigate to the project folder:
    cd projectile-motion-simulator

3. Install dependencies:
    npm install

4. Start the server:
    npm run dev

5. Open in browser:
    http://localhost:5173

## Future Enhancements

- Pause / Resume functionality
- Gravity presets (Earth, Moon, Mars)
- Height vs Time graph visualization
- Trajectory comparison mode

## Learning Outcomes

- Implemented real-time simulations using Canvas
- Managed performance-sensitive animations in React
- Applied physics equations in an interactive environment
- Designed a clean and scalable component architecture

## Team

- **Trishal Sharma** – Lead developer; responsible for the core implementation, simulation logic, canvas rendering, and overall project architecture.

- **Harshit Sharma** – Contributed to selected code components, testing, debugging, and managed project presentation and documentation support.

- **Rishabh Chawla** – Assisted in development, coordination, testing, and overall team collaboration to ensure quality and timely completion of the project.

## License

- This project is intended for educational and learning purposes.