🧭 Scroll Indicator React App

A simple and interactive React.js project that visually displays your scroll progress using a fixed range slider (progress bar) at the top of the page.
It also fetches product data from a public API and renders it dynamically — great for learning scroll events, props communication, and React hooks.

🚀 Features

🎚️ Live Scroll Indicator: A fixed slider at the top that updates as you scroll.

🔄 Dynamic Data Fetching: Fetches product data from dummyjson.com
.

🔗 Parent ↔ Child Communication: Demonstrates sending data from child → parent using callback props.

🎨 Smooth UI: Modern look using CSS and smooth updates.

⚙️ React Hooks Used: useState and useEffect for state management and lifecycle handling.

🧩 Tech Stack
Tool	Purpose
React.js	Frontend framework
Fetch API	Data fetching from dummy API
CSS	Styling and positioning
Vite / CRA	React setup (choose whichever you used)
📁 Project Structure
scroll-indicator-app/
│
├── src/
│   ├── components/
│   │   └── Scroll.jsx         # Handles scrolling logic and data fetch
│   ├── App.jsx                # Parent component showing scroll bar and data
│   ├── App.css                # Styling for fixed slider and layout
│   └── main.jsx               # Entry point
│
├── package.json
├── README.md
└── index.html

💻 How It Works

The App.jsx component renders:

A fixed <input type="range" /> element acting as the scroll indicator.

The <Scroll /> child component that fetches and displays content.

Inside Scroll.jsx:

On every scroll, it calculates how much of the page has been scrolled using:

const scrollTop = document.documentElement.scrollTop;
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
const scrolled = (scrollTop / height) * 100;


It passes this scrolled value to the parent (App.jsx) through the onScrollChange callback prop.

The parent (App.jsx) updates its state and reflects it on the fixed slider value.

🧠 Key Learning Concepts

Child → Parent data flow using callback props.

Handling browser scroll events in React.

Using fixed positioning for persistent UI components.

Fetching and displaying API data with async/await.

🛠️ Installation & Setup

Clone this repository

git clone https://github.com/your-username/scroll-indicator-react.git
cd scroll-indicator-react


Install dependencies

npm install


Start the development server

npm run dev


Open your browser at http://localhost:5173/
 (or the port shown in terminal).

📸 Demo Preview

(You can add a screenshot or GIF here)

Example layout:

+-------------------------------------------------------+
| [■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■]  (slider)
| Scroll Indicator
| Product 1
| Product 2
| Product 3
| ...
+-------------------------------------------------------+

⚙️ Customization Ideas

Add smooth animations to the scroll bar.

Replace range input with a custom progress bar.

Display scroll % as text on the screen.

Fetch data from another API or add infinite scrollin
