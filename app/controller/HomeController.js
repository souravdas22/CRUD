const User = require("../model/user");
const Post = require("../model/post");
const Product = require("../model/product");
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
      res.status(200).json({
        status: 200,
        message: "users fetched successfully",
        data: data,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  async updateUser(req, res) {
    try {
      const id = req.params.id;
      const newData = req.body;
      const response = await User.findByIdAndUpdate(id, newData, {
        new: true,
        runValidators: true,
      });
      if (response) {
        res
          .status(200)
          .json({ message: "User updated sucessfully", status: 200 });
      } else {
        res.status(404).json({ message: "user not found", status: 404 });
      }
    } catch (err) {
      res.status(500).json({ error: `Internal server error ${err}` });
    }
  }
  async deleteUser(req, res) {
    try {
      const id = req.params.id;
      const response = await User.findByIdAndDelete(id);
      if (response) {
        res
          .status(200)
          .json({ message: "User deleted sucessfully", status: 200 });
      }
    } catch (err) {
      res.status(500).json({ error: `Internal server error ${err}` });
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
      res.status(200).json({
        status: 200,
        message: "post fetched successfully",
        data: response,
      });
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

  //product

  //post request
  async postProduct(req, res) {
    try {
      const data = req.body;
      const newProduct = new Product(data);
      const response = await newProduct.save();
      if (response) {
        res
          .status(200)
          .json({ message: "product added successfully", status: 200 });
      }
    } catch (err) {
      res.status(500).json({ error: `Internal server Error ${err}` });
    }
  }

  //get all products
  async getAllProducts(req, res) {
    try {
      const data = await Product.find();
      if (data) {
        res.status(200).json({
          message: "products fetched successfully",
          status: 200,
          data: data,
        });
      }
    } catch (err) {
      res.status(500).json({ error: `Internal server Error ${err}` });
    }
  }
}
module.exports = new Controller();
