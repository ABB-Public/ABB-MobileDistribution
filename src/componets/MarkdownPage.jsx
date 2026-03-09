import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import "../styles/markdown.css";

export default function MarkdownPage({ filePath }) {
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  const sanitizeSchema = {
    ...defaultSchema,
    attributes: {
      ...defaultSchema.attributes,
      a: [...(defaultSchema.attributes?.a || []), "target", "rel"],
      code: [...(defaultSchema.attributes?.code || []), "className"],
      pre: [...(defaultSchema.attributes?.pre || []), "className"],
      span: [...(defaultSchema.attributes?.span || []), "className"],
      h1: [...(defaultSchema.attributes?.h1 || []), "id"],
      h2: [...(defaultSchema.attributes?.h2 || []), "id"],
      h3: [...(defaultSchema.attributes?.h3 || []), "id"],
      h4: [...(defaultSchema.attributes?.h4 || []), "id"],
      h5: [...(defaultSchema.attributes?.h5 || []), "id"],
      h6: [...(defaultSchema.attributes?.h6 || []), "id"],
    },
  };

  useEffect(() => {
    fetch(filePath)
      .then((res) => {
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
          [rehypeSanitize, sanitizeSchema],
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