import {Breadcrumbs as MaterialBreadcrumbs} from "@mui/material";
import {grey} from "@mui/material/colors";

const color = grey[600];
export default function Breadcrumbs(props: any) {
  return (
    <MaterialBreadcrumbs color={color} aria-label="breadcrumb" sx={{mb: 3}}>
      { props.children }
    </MaterialBreadcrumbs>
  );
}