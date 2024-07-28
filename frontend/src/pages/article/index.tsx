import {Typography} from "@mui/material";
import Link from "../../components/ui/Link";
import Breadcrumbs from "../../components/Breadcrumbs";
import {grey} from "@mui/material/colors";
import type { IPost } from "../../@type";
import {useQuery} from "@tanstack/react-query";
import {useCurrentPosts} from "../../api/home";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const color = grey[700]

export default function Articles() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: postData } = useCurrentPosts(id);

  if(postData === null) navigate('/*', { replace: true })

  return (
    <div className="articles">
      <Breadcrumbs>
        <Link to='/'>
          Home
        </Link>
        <Typography color={color}>{ postData?.id }</Typography>
      </Breadcrumbs>
      <Typography variant="h5" sx={{mb: 2}}>
        { postData?.title }
      </Typography>
      <Typography sx={{mb: 3}}>
        { postData?.content }
      </Typography>
      <Typography variant="caption">Author: { postData?.user.name }</Typography>
    </div>
  );
}