import React, { useState } from 'react';
import CloseIcon from './../img/close-icon.png';

function Modal() {

    const [open, setOpen] = useState(false);

    return (
        <div className="App">
            <button onClick={() => setOpen(true)} className="open-modal-btn">✨ Открыть окно</button>
            <div className={`overlay ${open ? 'show' : ''}`}>
                <div className="modal">
                    <img onClick={() => setOpen(false)} src={CloseIcon} />
                    <h2>Модальное окно</h2>
                </div>
            </div>
        </div>
    );
}

export default Modal;