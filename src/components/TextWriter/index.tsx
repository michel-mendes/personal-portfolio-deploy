import { useState, useEffect, useReducer } from "react"

interface ITextWriterProps {
    text: Array<string> | string;
    delay: number;
    nextPhraseDelay: number;
    repeat: boolean;
}

interface ITextWriterState {
    currentText?: string;
    currentIndex?: number;
    currentPhrase?: string;
    currentPhraseIndex?: number;
    currentState?: "typing" | "erasing"
}

import style from "./style.module.css"

function TextWriter({ text, delay, nextPhraseDelay, repeat }: ITextWriterProps) {
    const [state, updateState] = useReducer((prev: ITextWriterState, next: ITextWriterState) => ({ ...prev, ...next }), {
        currentText: "",
        currentIndex: 0,
        currentPhrase: "",
        currentPhraseIndex: 0,
        currentState: "typing"
    })

    const [showCaret, setShowCaret] = useState(true)

    useEffect(() => {

        if (state.currentState == "typing") {
            typeText()
        } else {
            eraseText()
        }

    }, [state, delay])

    useEffect(() => {
        if (typeof text === "string") {
            updateState({ currentPhrase: text })
        } else {
            updateState({ currentPhrase: text[0], currentPhraseIndex: 0 })
        }

        const interval = setInterval(() => {
            setShowCaret(prevState => !prevState)
        }, 500)

        return () => { clearInterval(interval) }
    }, [])

    return (
        <span>
            <span>{state.currentText}</span>
            <span className={style.caret} show-caret={(showCaret) ? "" : null}>|</span>
        </span>
    )




    // Helper functions
    function typeText() {

        // typeof "text" = string
        // Will stop the text writing or restart again if "repeat" is set true
        if (typeof text == "string") {
            if (state.currentIndex! >= state.currentPhrase!.length && repeat) {
                delayStateUpdate({
                    currentPhrase: text,
                    currentPhraseIndex: 0,
                    currentIndex: 0,
                    currentText: ""
                }, nextPhraseDelay)
            }
        }

        // typeof "text" = Array<string>
        // Will select next text or restart again if "repeat" is set true
        else {
            if (state.currentIndex! >= state.currentPhrase!.length) {
                const nextPhraseIndex = state.currentPhraseIndex! + 1

                // Start to erase the current word
                if (nextPhraseIndex < text.length || (nextPhraseIndex >= text.length && repeat)) {
                    delayStateUpdate({ currentState: "erasing" }, nextPhraseDelay)
                }

            }
        }


        // This block will type char by char under the specified "delay"
        if (state.currentIndex! < state.currentPhrase!.length) {
            delayStateUpdate({
                currentText: `${state.currentText}${state.currentPhrase![state.currentIndex!]}`,
                currentIndex: state.currentIndex! + 1
            }, delay)
        }
    }

    function eraseText() {

        // This block will delete char by char until the first index
        if (state.currentIndex! > 0) {
            delayStateUpdate({
                currentText: `${state.currentText!.slice(0, state.currentText!.length - 2)}`,
                currentIndex: state.currentIndex! - 1
            }, delay)
        }

        // This block will switch to next "text" array after the erase completion
        else {
            const thereIsNoNextPhrase = (state.currentPhraseIndex! + 1) >= text.length
            const nextPhraseIndex = (thereIsNoNextPhrase) ? 0 : state.currentPhraseIndex! + 1

            delayStateUpdate({
                currentPhrase: text[nextPhraseIndex],
                currentPhraseIndex: nextPhraseIndex,
                currentIndex: 0,
                currentText: "",
                currentState: "typing"
            }, Math.round(nextPhraseDelay * .1))
        }
    }

    function delayStateUpdate(stateProps: ITextWriterState, delayMs: number) {
        const timeout = setTimeout(() => {
            updateState(stateProps)
        }, delayMs)

        return () => { clearTimeout(timeout) }
    }
}

export { TextWriter }