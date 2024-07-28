import {Typography} from "@mui/material";
import ListArticles from "../../components/ListArticles";
function Home() {
  return (
    <div className="home">
      <Typography variant="h5">Articles</Typography>
      <ListArticles class='home__list-articles' />
    </div>
  );
}

export default Home;