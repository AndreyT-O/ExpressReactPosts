import express from "express";
import {UsersController} from "../../controllers";

const { handleFind, handleGet } = UsersController

const routes = express();

routes.get('/', handleFind)

routes.get('/:id', handleGet)

// routes.post('users', handleCreate)
//
// routes.put('/:id', handleUpdate)
//
// routes.delete('/:id', handleDelete)

export default routes