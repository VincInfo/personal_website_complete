import { Link } from "react-router-dom"
import React from "react"

const Information = () => {
    return (
        <div className="flex flex-col max-w leading-relaxed w-full mx-auto gap-16 info">
            <div className="flex flex-col gap-12">
                <div>
                    <h1>Me</h1>
                    <br></br>
                    <p>
                        Hello! My name is Vincent Taffetshofer and I'm currently pursuing a degree in computer science at the technical university
                        of applied sciences in Ingolstadt.
                    </p>
                    <p>
                        I am me.
                    </p>
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
                        <p>Leraning AI</p>
                    </div>
                </div>
            </div>
            <hr className="overflow-hidden max-w-full text-slate-800/50 whitespace-nowrap" ></hr>
        </div>
    )
}

export default Information