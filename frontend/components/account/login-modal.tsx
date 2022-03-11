import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { FormControl, InputLabel, FormHelperText, Input } from "@mui/material";

interface LoginModalProps {
  closeModal(): void;
}

const LoginModal = React.forwardRef((props: LoginModalProps, ref) => {
  const { closeModal } = props;
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Stack direction="column" alignItems="left" justifyContent="center">
        <Button onClick={closeModal} variant="contained">
          Close
        </Button>
        <FormControl>
          <InputLabel>Email address</InputLabel>
          <Input id="email-address" />
        </FormControl>
      </Stack>
    </Box>
  );
});

export default LoginModal;
