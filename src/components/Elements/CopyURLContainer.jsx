import React, { useState } from 'react';
import '../Design/CopyURL.css';

const URLContainer = () => {
    const [copySuccess, setCopySuccess] = useState(false);
    const [url, setUrl] = useState('https://example.com');

    const copyToClipboard = () => {
        navigator.clipboard.writeText(url)
            .then(() => setCopySuccess(true))
            .catch(() => setCopySuccess(false));
    };

    return (
        <div className="url-container">
<div className="input-urlcontainer">
    <input type="text" value={url} readOnly />
    <button onClick={copyToClipboard}>{copySuccess ? 'Copied!' : 'Copy'}</button>
</div>

        </div>
    );
};

export default URLContainer;
