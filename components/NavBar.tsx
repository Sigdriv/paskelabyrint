import { AppBar, Toolbar, Typography } from "@mui/material";

export function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6">Kor ska oss reis</Typography>
      </Toolbar>
    </AppBar>
  );
}
