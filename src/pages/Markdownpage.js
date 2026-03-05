import React, { useState, useEffect, use } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownPage({filePath}) {
    const [content, setContent] = useState('');
    useEffect(() => {
        fetch(filePath)
            .then((response) => response.text())
            .then((text) => setContent(text))
            .catch((error) => console.error('Error loading markdown file:', error));
    }, [filePath]);

    return (
        <div className="markdown-container">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
}