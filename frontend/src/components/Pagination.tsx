import {Pagination as PaginationUi, createTheme, ThemeProvider} from "@mui/material";
import {useSearchParams} from "react-router-dom";
import useEvents from "../hook/useEvents";
// import '../assets/scss/components/pagination.scss';
export default function Pagination(props: any) {
  const [_, setSearchParams] = useSearchParams();
  const { usePublish } = useEvents();

  const { emit } = usePublish();

  const theme = createTheme({
    components: {
      MuiPagination: {
        styleOverrides: {
          root: {
            color: 'black'
          }
        }
      }
    }
  })

  function handleChangePagination(_: unknown, page: number): void {
    if(!page) return;

    setSearchParams({ page: `${page}` })

    emit('paginate-change', page)
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
        <PaginationUi
          {...props}
          variant="outlined"
          shape="rounded"
          sx={{ display: 'flex', justifyContent: 'center' }}
          onChange={handleChangePagination}
        />
      </ThemeProvider>
    </div>
  );
}