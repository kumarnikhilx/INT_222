# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



// IN THIS 
1. AXIOS:- 
Axios Kya Hai?

Axios ek JavaScript library hai jo HTTP requests karne ke liye use hoti hai.
HTTP request ka matlab hota hai ki hum apne frontend (React, Angular, Vanilla JS, etc.) se backend (Node/Express, API, etc.) tak data bhejte ya lete hain.

Yeh ek alternative hai fetch() ka, lekin Axios zyada easy aur developer-friendly hota hai.

🔹 Kyun use karte hain?

Simple Syntax – axios.get() aur axios.post() likhna fetch() se easy hai.

JSON Handling – Fetch me manually res.json() likhna padta hai, Axios automatically data parse kar deta hai.

Error Handling Easy – Axios error directly deta hai, fetch me thoda lamba process hota hai.

Supports Old Browsers – Axios purane browsers me bhi chalega, fetch hamesha supported nahi hai.

Extra Features –

Request cancel karna

Timeout set karna

Interceptors (request/response ko modify karne ke liye)