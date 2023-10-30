import React from 'react'
// import { read } from "react-papaparse";
function Demo_1() {
    const handleFileRead = (content: any) => {
        const jsonContent = JSON.parse(content)
        console.log(jsonContent)
    }

    return (
        <div>
            <button className="bg-" onClick={() => {}}>
                Read File
            </button>
            <div className="bg-blue-500 text-white p-4">This is a TailwindCSS component!</div>
            <div className="pt-8 text-base font-semibold leading-7">
                <p className="text-gray-900">Want to dig deeper into Tailwind?</p>
                <p>
                    <a
                        href="https://tailwindcss.com/docs"
                        className="text-sky-500 hover:text-sky-600"
                    >
                        Read the docs &rarr;
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Demo_1
