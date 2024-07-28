import { Link as RouterLink } from "react-router-dom";
import { Link as MaterialLink } from "@mui/material";
import {grey} from "@mui/material/colors";

const color = grey[600];

export default function Link(props: any) {
  return (
    <MaterialLink component={RouterLink} color={color} {...props} to={props.to} className="link" />
  );
}