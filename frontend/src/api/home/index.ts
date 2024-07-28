import {useQuery} from "@tanstack/react-query";
import {api} from "../../modules/axios";

export function useListPosts(page: number) {
  return useQuery({
    queryKey: ['list-posts', page],
    queryFn: () =>
      api.get('/posts', {
        params: {
          page: page
        }
      }).then(({ data }) => data)
  })
}

export function useCurrentPosts(id: string | undefined) {
  return useQuery({
    queryKey: ['current-posts', id],
    queryFn: () =>
      api.get(`/posts/${id}`).then(({ data }) => data.data),
    enabled: !!id
  })
}