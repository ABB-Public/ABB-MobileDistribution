import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import "../styles/markdown.css";

export default function MarkdownPage({ filePath }) {
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("MarkdownPage fetching:", filePath);
    fetch(filePath)
      .then((res) => {
        console.log("Fetch response status:", res.status, res.statusText);
        if (!res.ok) {
          throw new Error(`Failed to load ${filePath}: ${res.status} ${res.statusText}`);
        }
        return res.text();
      })
      .then(setContent)
      .catch(err => {
        console.error("Error loading markdown:", err);
        setError(err.message);
      });
  }, [filePath]);

  if (error) {
    return (
      <div className="md-body" style={{ color: 'red', padding: '20px' }}>
        <h2>Error Loading Document</h2>
        <p>{error}</p>
        <p>Attempted to load: {filePath}</p>
      </div>
    );
  }

  return (
    <div className="md-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeRaw,
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
          rehypeHighlight,
        ]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}