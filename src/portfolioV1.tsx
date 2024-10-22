import { Hono } from "hono";
import HomePage from "./templates/HomePage.js";
import { projects } from "./data.js";
export const portfolio = new Hono();

portfolio.get("/", (c) => {
  return c.html(<HomePage />);
});

portfolio.get("/projects", (c) => {
  return c.json(projects);
});

portfolio.get("/projects/:id", (c) => {
  const id = c.req.param("id");
  const project = projects.find((p) => p.id === id);
  return c.json(project);
});
