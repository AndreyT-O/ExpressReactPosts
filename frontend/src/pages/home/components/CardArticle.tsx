import {Card, CardContent, CardActions, Typography, Button} from "@mui/material";
import {IPost} from "../../../@type";
import { Link as RouterLink } from "react-router-dom";

interface ICardArticle {
  data: IPost
}
export default function CardArticle(props: ICardArticle) {

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">
          { props.data.title }
        </Typography>
        <Typography>
          { props.data.content }
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={RouterLink} to={`/articles/${props.data.id}`} color="inherit" size="small" sx={{ml: 'auto'}}>view</Button>
      </CardActions>
    </Card>
  );
}