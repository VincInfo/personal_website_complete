import React, { useEffect, useRef, useState } from "react"

const useContainerDimensions = myRef => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    useEffect(() => {
        const getDimensions = () => ({
            width: myRef.current.offsetWidth,
            height: myRef.current.offsetHeight
        })

        const handleResize = () => {
            setDimensions(getDimensions())
        }

        if (myRef.current) {
            setDimensions(getDimensions())
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return dimensions;
};


let symbols_1 = ['.', '\xa0\xa0\xa0\xa0', '?', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'g', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let symbols_2 = ['\xa0', '.', '?', 'a', 'g', 'i', 'n', 'e', '$', '?', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'g', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', '!']

let symbols_3 = ['/', 'i', 'm', 'a', 'g', 'i', 'n', 'e', '\xa0', '\xa0', '\xa0', '\xa0']

const mapRange = (value, start1, stop1, start2, stop2) => {
    return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}

const compute_row = (y, number_of_symbols_per_row, number_of_rows, size_factor, start_x, start_y) => {
    let row = ''
    let number_of_iterations_per_symbol = 30
    for (let x = 0; x < number_of_symbols_per_row; x++) {
        let a = mapRange(x, 0, number_of_symbols_per_row, -2 * size_factor, 2 * size_factor);
        let b = mapRange(y, 0, number_of_rows, -2, 2);

        let ca = mapRange(start_x, 0, number_of_symbols_per_row, -2 * size_factor, 2 * size_factor);
        let cb = mapRange(start_y, 0, number_of_rows, -2, 2);

        let n;
        for (n = 0; n < number_of_iterations_per_symbol; n++) {
            let aa = a * a - b * b;
            let bb = 2 * a * b;
            a = aa + ca * Math.cos(b)
            b = bb + cb * Math.sin(a)
            if (Math.abs(a + b) > 5) {
                break;
            }
        }

        let symbol_index = Math.round(mapRange(n, 0, number_of_iterations_per_symbol, 0, symbols_2.length - 1));
        // let symbol = symbol_index == 1 ? symbols_3[Math.floor(Math.random() * symbols_3.length)] : symbols_2[symbol_index]
        let symbol = symbol_index == symbols_2.length - 1 ? symbols_3[Math.floor(Math.random() * symbols_3.length)] :
            symbols_2[symbol_index]
        // let symbol = symbols_2[symbol_index]
        row += symbol
    }
    return row
};

const Magic = () => {
    const [start_x, setStartX] = useState(0);
    const [start_y, setStartY] = useState(0);
    const magicRef = useRef(null)
    const lineRef = useRef(null)
    const { width, height } = useContainerDimensions(magicRef)

    const [number_of_symbols_per_row, setNumberOfSymbolsPerRow] = useState(0)
    const [numDivs, setNumDivs] = useState(0)
    const [size_factor, setSizeFactor] = useState(0)

    useEffect(() => {
        // console.log(width, height);
        setNumberOfSymbolsPerRow(Math.floor(width / 6))  // 120 ist das padding link und rechts, 12.4481 ist die font-size
        setNumDivs((height / 12))
        setSizeFactor(number_of_symbols_per_row / numDivs)
    }, [height, width, numDivs, magicRef, lineRef]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const angle = 0.5 * (new Date().getTime() / 1000) % (2 * Math.PI);
            const radius = number_of_symbols_per_row / 2;
            setStartX(Math.cos(angle) * radius);
            setStartY(Math.sin(angle) * radius);
        }, 20);

        return () => clearInterval(intervalId);
    }, [number_of_symbols_per_row, start_x, start_y, numDivs]);

    const scrollDown = () => {
        window.scrollTo({ top: magicRef.current.parentNode.getBoundingClientRect().height, behavior: 'smooth' })
    }

    return (
        <div ref={magicRef} className="magic flex flex-col justify-center items-center relative"
            style={{
                overflow: 'hidden',
                // border: '1px solid black',
                whiteSpace: 'nowrap',
                textOverflow: 'clip',
                // padding: '0 5px 0 5px',
            }}>
            <div className="center-absolute">
                {Array.from({ length: numDivs }, (_, index) => (
                    <div className="border-box-sizing text-align-center magic-line" key={index}>{compute_row(index, number_of_symbols_per_row, numDivs, size_factor, start_x, start_y)}</div>
                ))}
            </div>

            <svg className="svg-logo center-absolute inline text-slate-100" strokeWidth="2" fill="none" stroke="whitesmoke" viewBox="0 0 50 50" aria-hidden="true" height="100">
                <defs>
                    <filter id="blur-filter">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
                    </filter>
                </defs>
                <path className="svg-logo-path" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M10 20l7 7 l7 -7 l7 0 l0 7 l0 -7 l7 0"></path>
            </svg>

            <button onClick={scrollDown} className="btn btn-transparent btn-down flex justify-center items-center absolute" >
                <svg strokeWidth="2" fill="none" stroke="white" viewBox="0 0 24 24" aria-hidden="true" height="20" className="inline text-slate-100">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path>
                </svg>
            </button>
        </div >
    )
}

export default Magic