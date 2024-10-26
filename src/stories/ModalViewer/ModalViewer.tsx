import React, { FC, useState } from "react"
import Modal from "../../shared/ui/Modal/Modal"

type ModalViewerProps = {
    text: string,
}

const ModalViewer: FC<ModalViewerProps> = ({ text }) => {
    const [visible, SetVisible] = useState(false)
    const [inputText, SetInputText] = useState(text)

    return (
        <>
            <Modal visible={visible} setVisible={SetVisible} children={inputText} />
            <input value={inputText} onChange={(e) => SetInputText(prev => e.target.value)} />
            <button onClick={() => SetVisible(() => true)}>Show modal</button>
        </>
    )
}

export default ModalViewer