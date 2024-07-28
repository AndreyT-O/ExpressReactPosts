export interface IUser {
  id: number,
  email: string,
  is_admin: boolean,
  name: string,
  posts: IPost[],
  surname: string
}

export interface IPost {
  id: number,
  title: string,
  content: string,
  published: boolean,
  userId: number,
  user: IUser
}