import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import { store } from "./utils/state/store.js";
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>{/*Zahra provider navbar*/}
  <App /> {/* App gère maintenant RouterProvider */}
</Provider>
  //</StrictMode>,
)
