import React from 'react';

import './styles.css';

const Spinner = ({ text = 'mohon tunggu sebentar ...', isAbsolute = false }) => (
    <div className={`spinner-overlay gap-3 ${isAbsolute ? 'absolute' : 'fixed'}`}>
        <div className="spinner-container" />
        {!text ? null : <h5>{text}</h5>}
    </div>
);

export default Spinner;