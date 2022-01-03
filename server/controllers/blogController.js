const Blog = require("../models/blog");
exports.createBlog = async (req, res) => {
  try {
    //create a blog
    const blog = await Blog.create(req.body);

    res.status(201).json({
      status: "Success",
      data: blog,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.getAllBlog = async (req, res) => {
  //filters
  const { category, search, all } = req.query;
  const modQuery =
    category && category.split("-").length > 1
      ? category.replace("-", " ")
      : category;
  console.log(modQuery);
  try {
    let blogs;
    if (category) {
      if (category !== "hot" && category !== "top") {
        blogs = await Blog.find({ category: modQuery });
      } else {
        if (category === "hot") blogs = await Blog.find();
        blogs = blogs.slice(0, 6);
      }
    } else blogs = await Blog.find();

    if (search) {
      if (blogs.length > 1) {
        blogs = blogs.filter((blg) =>
          blg.title.toLowerCase().includes(search.toLowerCase())
        );
      }
      if (!all) blogs = blogs.slice(0, 3);
    }
    res.status(201).json({
      status: "Success",
      data: blogs,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getBlogBySlug = async (req, res) => {
  try {
    console.log(req.params);
    const blog = await Blog.find({ slug: req.params.slug });
    res.status(201).json({
      status: "Success",
      data: blog,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// exports.searchPosts = async (req, res) => {
//   try {

//   }catch(err) {

//   }
// }
