import { useState } from "react"

export default function useCalculator() {
    const [display, setDisplay] = useState("0")
    const [buffer, setBuffer] = useState(null)
    const [operator, setOperator] = useState(null)
    const [showResult, setShowResult] = useState(false)

    const MAX_LENGTH = 9

    const isOperator = (val) => ["+", "-", "*", "/", "%"].includes(val)

    const handleButton = (val) => {
        setShowResult(false)

        if (val === "AC") {
            setDisplay("0")
            setBuffer(null)
            setOperator(null)
            return
        }

        if (val === "C") {
            setDisplay(display.length === 1 ? "0" : display.slice(0, -1))
            return
        }

        if (val === "=") {
            calculate()
            return
        }

        if (isOperator(val)) {
            if (operator && buffer !== null) {
                calculate(val)
            } else {
                setBuffer(parseFloat(display))
                setOperator(val)
                setDisplay("0")
            }
            return
        }

        if (display.length >= MAX_LENGTH) return

        if (display === "0") setDisplay(val)
        else setDisplay(display + val)
    }

    const calculate = (nextOperator = null) => {
        const current = parseFloat(display)
        if (buffer === null || operator === null) return

        let result = 0
        switch (operator) {
            case "+": result = buffer + current; break
            case "-": result = buffer - current; break
            case "*": result = buffer * current; break
            case "/": result = current === 0 ? "ERROR" : buffer / current; break
            case "%": result = buffer % current; break
            default: return
        }

        const formatted = typeof result === "number"
            ? parseFloat(result.toFixed(8)).toString()
            : "ERROR"

        const tooLarge = parseFloat(formatted) > 999999999
        const isNegative = parseFloat(formatted) < 0

        const final = (tooLarge || isNegative || result === "ERROR")
            ? "ERROR"
            : formatted.slice(0, MAX_LENGTH)

        setDisplay(final)
        setBuffer(nextOperator ? parseFloat(final) : null)
        setOperator(nextOperator)
        setShowResult(true)
    }

    return { display, showResult, handleButton }
}