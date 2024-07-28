import {Typography, Button} from "@mui/material";
import {Link} from "react-router-dom";
function Error404() {
  return <div>
    <Typography variant={'h5'}>404</Typography>
    <Button component={Link} to='/'>go home</Button>
  </div>
}

export default Error404