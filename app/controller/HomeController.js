const User = require("../model/user");
const Post = require("../model/post");
class Controller {
  async default(req, res) {
    try {
      res.render("home");
    } catch (err) {
      console.log(err);
    }
  }
  async about(req, res) {
    try {
      res.render("about");
    } catch (err) {
      console.log(err);
    }
  }
  async getAllusers(req, res) {
    try {
      const data = await User.find();
      res.status(200).json({ status: 200, data: data });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async postUser(req, res) {
    try {
      const data = req.body;
      const newUser = new User(data);
      const response = await newUser.save();
      if (response) {
        res
          .status(200)
          .json({ message: "user added sucessfully", status: 200 });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: `Internal server error ${err}` });
    }
  }
  async getAllPosts(req, res) {
    try {
      const response = await Post.find();
      res.status(200).json({ status: 200, data: response });
    } catch (err) {
      res.status(500).json({ error: `Internal server error${err}` });
    }
  }
  async postPost(req, res) {
    try {
      const data = req.body;
      const newPost = new Post(data);
      const response = await newPost.save();
      if (response) {
        res
          .status(200)
          .json({ message: "post added sucessfully", status: 200 });
      }
    } catch (err) {
      res.status(500).json({ error: `Internal server error ${err}` });
    }
  }
}
module.exports = new Controller();
