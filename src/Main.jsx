import React, { useEffect, useState } from "react"
import './style.css'
import Magic from "./Magic"; 
import Information from "./Information";
import axios from "axios";

const Main = () => {
    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setHeight(window.innerHeight);
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div id="app-body flex flex-col justify-center main" >
            <div className="animation" style={{ height, width }}>
                <Magic style={{ width: "100%", height: "100%" }} />
                <div>

                </div>
            </div>
            <div>
                <div className="flex flex-col justify-center items-center">
                    <Information />
                </div>
            </div>
        </div>
    )
}

export default Main