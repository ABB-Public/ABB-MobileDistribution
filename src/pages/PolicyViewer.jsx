import { useParams } from "react-router-dom";
import MarkdownPage from "../componets/MarkdownPage.jsx";
import AbbHeader from "../componets/AbbHeader.jsx";

export default function PolicyViewerPage({ defaultAppName, defaultFileName, basePath = "policies" }) {
  const params = useParams();
  const appName = params.appName || defaultAppName;
  const fileName = params.fileName || defaultFileName || "index.md";

  const file = `${process.env.PUBLIC_URL}/${basePath}/${appName}/${fileName}`;

  return (
    <>
      <AbbHeader appName={appName} />
      <div className="mid">
        {fileName.endsWith(".md") ? (
          <MarkdownPage filePath={file} />
        ) : fileName.endsWith(".pdf") ? (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            margin: 0,
            padding: 0,
            zIndex: 9999
          }}>
            <iframe
              src={file}
              width="100%"
              height="100%"
              title="PDF Viewer"
              allowFullScreen
              style={{ border: 'none' }}
            />
          </div>
        ) : (
          <p>Unsupported file type.</p>
        )}
      </div>
    </>
  );
}