import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ code, language = "javascript" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-sm"
      >
        {copied ? "Copied!" : "Copy"}
      </button>

      <SyntaxHighlighter
        language={language}
        style={tomorrow}
        showLineNumbers
        customStyle={{ padding: "20px", borderRadius: "4px" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
