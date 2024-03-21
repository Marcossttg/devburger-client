import { Router } from "express";

const routes = new Router();

routes.get("/", (request, response) => {
    return response.json({ message: "Hello Node" });
})

export default routes;