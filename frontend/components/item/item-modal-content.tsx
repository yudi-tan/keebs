import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  padding: 4,
  outline: "none",
};

// React.forwardRef is needed when using this as a child component for modal.
// https://mui.com/guides/composition/#caveat-with-refs
const ItemModelContent = React.forwardRef((props, ref) => {
  return (
    <Box {...props} ref={ref} sx={style}>
      <Typography>Hello this is a jinsoul best board thank you.</Typography>
    </Box>
  );
});

export default ItemModelContent;
