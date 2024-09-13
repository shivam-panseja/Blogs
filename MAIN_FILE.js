const express = require("express");
const bodyparser = require("body-parser");
const { PrismaClient } = require("@prisma/client");
const uuid = require("uuid");
const app = express();

const port = 3000;
const prisma = new PrismaClient();

app.use(bodyparser.json()); // Middleware to parse JSON request bodies
// Mock data for storing blog posts
let blog_title = [];
let blogPosts = [];

// GET all blog posts
app.get("/posts", async (req, res) => {
  await prisma.blogs.findMany({
    data: {
      Blog_Post: req.body.Blog_Post,
      Blog_Title: req.body.Blog_Title,
    },
  });

  res.send({ posts: blogPosts, title: blog_title });
  console.log("GET all blog posts");
});

// to get from particular id
app.get("/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = blogPosts[postId];
  if (!post) {
    return res.status(404).send({ message: "Post not found" });
  }
  res.send(post);
  console.log(`GET blog post with id: ${postId}`);
});

app.post("/newpost", async (req, res) => {
  await prisma.blogs.create({
    data: {
      Blog_Post: req.body.Blog_Post,
      Blog_Title: req.body.Blog_Title,
    },
  });

  res.send("");
});

app.delete("/deletepost", (req, res) => {
  const postIndex = parseInt(req.params.id);
  blogPosts.splice(postIndex, 1);
  res.send({ title: { blog_title, posts: blogPosts } });
});

app.listen(3000);
console.log("app is listening on port 3000");
