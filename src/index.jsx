// import * as React from 'react';
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './style.css'


// import App from './App'

// ReactDOM.createRoot(document.getElementById('root')).render(<App />)
// const rootElement = document.getElementById('root')
// const root = createRoot(rootElement)

// root.render(
//     <StrictMode>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </StrictMode>
// )
ReactDOM.render(<App />, document.getElementById('app'))

