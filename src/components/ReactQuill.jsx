import { Box, FormHelperText, styled } from "@mui/material";

//react quill
import dynamic from "next/dynamic";
const CustomQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const Container = styled(Box)(({ theme, box_height }) => ({
  "& .ql-toolbar": {
    borderColor: "transparent",
    borderRadius: "12px 12px 0px 0px",
    backgroundColor: theme.palette.divider,
  },
  "& .ql-editor": {
    minHeight: box_height ?? 500,
    direction: theme.direction, // ...(theme.direction === "rtl" && { direction: "rtl", textAlign: "right" }),
  },
  "& .ql-container": {
    minHeight: box_height ?? 500,
    borderColor: theme.palette.divider,
  },
})); // ===================================================

// ===================================================
const ReactQuill = ({ error, box_height, ...props }) => {
  return (
    <Container box_height={box_height}>
      <CustomQuill theme="snow" modules={modules} {...props} />
      {error && <FormHelperText error>{error}</FormHelperText>}
    </Container>
  );
};

const modules = {
  toolbar: [
    [
      {
        header: [1, 2, 3, 4, 5, 6, false],
      },
    ],
    [
      {
        font: [],
      },
    ],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      {
        list: "ordered",
      },
      {
        list: "bullet",
      },
      {
        indent: "-1",
      },
      {
        indent: "+1",
      },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};
export default ReactQuill;
