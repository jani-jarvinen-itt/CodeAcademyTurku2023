import React from 'react';

interface WarningMessageProps
{
    message: string;
}

const WarningMessage: React.FC<WarningMessageProps> = ({message}) =>
    <div className='warnmsg'>Warning! {message}</div>

export default WarningMessage;
