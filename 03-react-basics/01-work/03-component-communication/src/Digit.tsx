import React, {useState} from "react";
import figlet from "figlet";
// @ts-ignore
import standard from "figlet/importable-fonts/Standard.js";

export default function Digit() {
    figlet.parseFont("Standard", standard);
    const [asciiArt, setAsciiArt] = useState("")

    convertNumber(0).then(setAsciiArt)

    return <pre>
        {asciiArt}
    </pre>


}

function convertNumber(number: number): Promise<string> {
    return new Promise((resolve, reject) => {
            figlet.text(number.toString(), {font: "Standard"}, (err, result) => {
                if (!err && result) {
                    resolve(result)
                } else {
                    reject()
                }
            })
        }
    )
}