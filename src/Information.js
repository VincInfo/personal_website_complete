import { Link } from "react-router-dom"
import React from "react"

const Information = () => {
    return (
        <div className="flex flex-col max-w leading-relaxed w-full mx-auto gap-16 info">
            <div className="flex flex-col gap-12">
                <div>
                    <h1>About Me</h1>
                    <br></br>
                    <p>
                        Hello! My name is Vincent Taffertshofer and I'm currently pursuing a degree in computer science at the technical university
                        of applied sciences in Ingolstadt.
                    </p>
                    <p>
                        I enjoy creating things that live on the web as well as AI-Systems that gleefully outshine my
                        own humble capabilities.
                    </p> 
                    <p>
                        Here are a few technologies I've been working with recently:
                    </p>
                    <ul className="recent-technologies">
                        <li>React</li>
                        <li>Node.js</li>
                        <li>JavaScript</li>
                        <li>Angular</li>
                        <li>TypeScript</li>
                        <li>Tensorflow</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-12">
                    <div>
                        <h2 className="mb-2 text-sl text-slate-100">Links</h2>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <h3 className="font-medium">Github</h3>
                                <a className="text-sm italic text-slate-400" href="https://github.com/VincInfo">VincInfo</a>
                            </div>
                            <div>
                                <h3 className="font-medium">chatAI </h3>
                                <Link className="text-sm italic text-slate-400" to="/ChatAI">link</Link>
                                <span style={{fontSize: "10px"}} > (coming soon)</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="mb-2 text-sl text-slate-100">Current</h2>
                        <p>In the realm where thoughts ignite and knowledge transcends, 
                            I find solance in the enigmatic nature of AI and its graceful 
                            strides of understanding.</p>
                    </div>
                </div>
            </div>
            <hr className="overflow-hidden max-w-full text-slate-800/50 whitespace-nowrap" ></hr>
        </div>
    )
}

export default Information