import React from 'react';
import clsx from "clsx";

function Message() {
    return (
        <div className={clsx('text-center', 'bg-success', 'text-light','py-2', 'fs-4')}>
            <div>
                Розмовляємо українською
            </div>
            <div>
                Говорим по-русски
            </div>
            <div>
                Wir sprechen deutsch
            </div>
        </div>
    );
}

export default Message;