import {CircularProgress} from "@mui/material";
import styles from './loader.module.scss';
function Loader({ loader }: {loader: boolean}) {
    return (<div>
      { loader && <div className={styles.loader}>
        <CircularProgress className={styles.loader__box}/>
      </div>}
    </div>)
}

export default Loader;