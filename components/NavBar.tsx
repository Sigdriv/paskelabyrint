import { AppBar, Toolbar, Typography } from "@mui/material";

import { Button } from "./Button";

export function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense" sx={{ bgcolor: "secondary.main" }}>
        <Button variant="text" href="/">
          Home
        </Button>
        <Button variant="text" href="/about">
          About
        </Button>
        <Button variant="text" href="/contact">
          Contact
        </Button>
        <Typography sx={{ flexGrow: 1 }} />
        <Button variant="text" href="/login">
          Login
        </Button>
        <Button variant="text" href="/signup">
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
}
