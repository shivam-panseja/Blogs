const express = require("express");
const bodyparser = require("body-parser");
const { PrismaClient } = require("@prisma/client");
const uuid = require("uuid");
const app = express();

const port = 3000;
const prisma = new PrismaClient();

app.use(bodyparser.json()); // Middleware to parse JSON request bodies
// Mock data for storing blog posts
// let blog_title = [];
// let blogPosts = [];

// GET all blog posts
app.get("/posts", async (req, res) => {
  const redblog = await prisma.blogs.findMany();
  console.log("hello sir");
  res.json(redblog);
});

app.post("/newposts", async (req, res) => {
  const { Blog_Post, Blog_Title } = req.body;

  // Create a new blog post
  const newPost = await prisma.blogs.create({
    data: {
      Blog_Title,
      Blog_Post,
    },
  });
  console.log("error");
  res.json(newPost);
});

// to get from particular id
app.get("/;post/:id", (req, res) => {
  const postId = parseInt(req.params.id, 10);
  if (isNaN(postId)) {
    return res.status(404).send({ message: "Post not found" });
  }
  const post = Blogs[postId];
  res.json(post);
  console.log(`GET blog post with id: ${postId}`);
});

app.delete("/id", async (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) {
    res.status(400).json({ error: "id is not a number" });
  }
  const delted = await prisma.blogs.delete({
    where: { id: id },
  });
  res.json("user deleted");
});

app.listen(3000);
console.log("app is listening on port 3000");
