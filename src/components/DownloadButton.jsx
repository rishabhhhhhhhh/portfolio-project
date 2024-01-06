import React, { useRef } from "react";

const DownloadButton = () => {
  const linkRef = useRef(null);

  const downloadPdf = () => {
    const pdfPath = process.env.PUBLIC_URL + "/rishabh_arora_resume.pdf";

    linkRef.current.href = pdfPath;

    linkRef.current.download = "rishabh_arora_resume.pdf";

    linkRef.current.click();
  };

  return (
    <div className={"flex flex-col items-center m-2"}>
      <a ref={linkRef} href="/#" style={{ display: "none" }}>
        {" "}
      </a>
      <button
        className={
          "group w-fit text-white flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-4 rounded-md"
        }
        onClick={downloadPdf}
      >
        Download Resume
      </button>
    </div>
  );
};

export default DownloadButton;
