import express from "express";
import {PostsController} from "../../controllers";

const { handleFind, handleGet } = PostsController

const routes = express.Router();

routes.get('/', handleFind)

routes.get('/:id', handleGet)

export default routes