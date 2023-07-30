import React, {useRef} from 'react'

const RefTest = () => {
    const RefInput = useRef(null)
    const FocusRef = () => {
        RefInput.focus()
    }
    return (
        <div>
            <input ref={RefInput}/>
            <button onClick={FocusRef}>Click</button>
        </div>
    )
}

export default RefTest