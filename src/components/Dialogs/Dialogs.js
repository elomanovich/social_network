import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className="dialogs">
            <div className="dialogs-items">
                <div className="dialog">
                    Dimych
                </div>
                <div className='dialog'>
                    Sveta
                </div>
                <div className='dialog'>
                    Valera
                </div>
            </div>
            <div className='messages'>
                <div className="message">Hi</div>
                <div className="message">Hello</div>
                <div className="message">Yo</div>
            </div>
        </div>
    )
};

export default Dialogs;