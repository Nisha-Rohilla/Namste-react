import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";



const AppLayout = () => {
    return (
        <div>
            <h1>Header</h1>
            {/* Header Put here */}
            <Header />
            <h3>Body</h3>
            <Body />
            <h2>Footer</h2>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<AppLayout />)

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(AppLayout)

