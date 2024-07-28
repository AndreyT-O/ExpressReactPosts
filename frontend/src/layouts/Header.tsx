import {AppBar} from "@mui/material";
import {Button} from "@mui/material";
import {Toolbar, Box} from "@mui/material";
import logo from '../assets/images/logo-second.svg';
import '../assets/scss/layouts/header.scss';
export default function Header() {
  return (
    <AppBar position="static" className="header" sx={{ mb: 1 }}>
      <Toolbar className="header__wrapper">
        <Box sx={{flexGrow: 1}}>
          <img
            src={logo}
            alt="logo"
            className="header__logo"
          />
        </Box>
        <Button color="inherit">login</Button>
      </Toolbar>
    </AppBar>
  );
}