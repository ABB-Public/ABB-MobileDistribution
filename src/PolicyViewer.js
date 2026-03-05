import { useParams } from "react-router-dom";
import MarkdownPage from "./componets/MarkdownPage.jsx";
import AbbHeader from "./componets/AbbHeader.jsx";

export default function PolicyViewer() {
  const { appName, fileName } = useParams();

  const file = `${process.env.PUBLIC_URL}/policies/${appName}/${fileName}`;
  
  console.log("PolicyViewer component loaded");
  console.log("Loading file:", file);
  console.log("File extension:", fileName.split('.').pop());
  console.log("App name:", appName)
  return (
    <>
  <AbbHeader appName={appName} />
  <div className="mid">
    {fileName.endsWith(".md") ? (
        <MarkdownPage filePath={file} />
    ) : fileName.endsWith(".pdf") ? (
        <iframe
            src={file}
            width="100%"
            height="600px"
            title="PDF Viewer"
        />
    ) : (
        <p>Unsupported file type.</p>
    )}
  </div>
  </>
  ) ;
}