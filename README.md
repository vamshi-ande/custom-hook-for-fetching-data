# 🪝 Custom Hook for Fetching Data in React

This project demonstrates how to create and use a **custom React hook** (`useFetch`) for fetching data from APIs in a reusable way.  
It also includes a **loader component** to improve user experience while data is being fetched.

---

## 🚀 Features
1. **Custom Hook (`useFetch`)**  
   - Encapsulates the logic for fetching data.  
   - Returns `data` and `loading` state.  
   - Can be reused across multiple components.  

2. **Multiple Fetch Implementations**  
   - The custom hook is used in different components to fetch various types of data.  
   - Demonstrates flexibility and reusability.  

3. **Loader Integration**  
   - Displays a spinner loader while fetching data.  
   - Enhances user experience with feedback during API calls.  

---

## 📂 Project Structure
src/
├── Components/
│ ├── FetchData.jsx # Example component using the custom hook
│ ├── FetchYogaData.jsx # Fetching Yoga API data
│ ├── FetchData.css # Styles for data display
│ └── UseFetch.jsx # Custom hook implementation
├── App.jsx # Main app entry
├── index.css
└── main.jsx

yaml
Copy code

---

## 🛠️ Technologies Used
- React.js  
- JavaScript (ES6+)  
- CSS3  

---

## ▶️ Usage
1. Clone the repository: 
   git clone https://github.com/vamshi-ande/custom-hook-for-fetching-data.git
Install dependencies:


npm install
Start the project:


npm run dev
📸 Preview
Loader shown while data is being fetched.

Data displayed dynamically once fetched.

📌 Learnings
How to create and use custom hooks in React.

How to handle loading states for a better user experience.

How to reuse logic across multiple components.



👉 Do you want me to also add a **demo screenshot + GIF section** in the README (with placeholders), so your repo looks more 
