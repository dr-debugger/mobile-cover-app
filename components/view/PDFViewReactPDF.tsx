import { Paper } from "@mui/material";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import PaginationView from "../common/PaginationView";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewReactPDF = () => {
  const [numPages, setNumPages] = useState(0);
  const [page, setPage] = useState(1);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  const onPageClick = (e: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  return (
    <Paper elevation={3} sx={{ p: 2, borderRadius: "10px", mb: 2 }}>
      <div
        style={{
          width: "100%",
          overflow: "auto",
          height: "500px",
          marginBottom: "10px",
        }}
      >
        <Document
          file={"/static/file/sample.pdf"}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            pageNumber={page}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </Document>
      </div>
      <PaginationView page={page} count={numPages} onPageClick={onPageClick} />
    </Paper>
  );
};

export default PDFViewReactPDF;
