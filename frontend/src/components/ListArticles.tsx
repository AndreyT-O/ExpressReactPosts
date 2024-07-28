import {Grid} from "@mui/material";
import CardArticle from "../pages/home/components/CardArticle";
import Pagination from "./Pagination";
import {useListPosts} from "../api/home";
import {useState} from "react";
import useEvents from "../hook/useEvents";
import Loader from "./loader/Loader";
import {useSearchParams} from "react-router-dom";

function ListArticles(props: any) {
  const { class: className } = props;
  const [query, setQuery] = useSearchParams();
  const startPage = query.get('page') ? Number(query.get('page')) : 1;
  const [page, setPage] = useState(startPage);

  const { useSubscribe } = useEvents();
  const { data, isFetching } = useListPosts(page);

  useSubscribe('paginate-change', (page: any) => {
    setPage(page.detail);
  })

  return (
    <div style={{ position: "relative" }}>
      <Loader loader={isFetching} />
      <div style={{padding: 30}}>
        <Grid
          container
          className={className}
          spacing={4}
        >
          {
            (data?.data as [])?.map((post, index) =>
              <Grid item key={index} xs={4}>
                  <CardArticle data={post}/>
              </Grid>
            )
          }
        </Grid>
      </div>
      { data?.meta && <Pagination
        count={data.meta.last_page}
        page={data.meta.current_page}
      /> }
    </div>
  );
}

export default ListArticles;