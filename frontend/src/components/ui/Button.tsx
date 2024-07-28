import {Button} from "@mui/material";

export default function ButtonUsage(props: any) {
  return <Button variant="contained">{ props.children }</Button>;
}