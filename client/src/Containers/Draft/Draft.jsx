import React from "react";
import "./Draft.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Categories from "./Catergories/Categories";
import ImageUploader from "./ImageUploader/ImageUploader";
import Nav from "../../Components/Nav/Nav";
import uploadAdapter from "./uploadAdapter";
import axios from "../../axios/axios";
import axiosClient from "axios";
class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: {
        title: "",
        createdAt: "",
        category: "react",
        author: {
          name: "Ahmed Khelili",
          job: "Software Engineer and a Blogger",
          avatar: "",
        },
        tags: [],
        mainImage: "",
        content: "",
        likes: 0,
        comments: [],
      },
      endPoint:
        !process.env.NODE_ENV || process.env.NODE_ENV === "development"
          ? "http://localhost:5000"
          : "",
    };
  }
  handleBlogTitle = (e) => {
    const title = e.target.value;
    const blog = this.state.blog;
    const updatedBlog = {
      ...blog,
      title: title,
    };
    console.log(updatedBlog);
    this.setState({ blog: updatedBlog });
  };
  handleBlogTags = (e) => {
    const tags = e.target.value;
    const blog = this.state.blog;

    const arrayOfTags = tags.split(", ");
    const updatedBlog = {
      ...blog,
      tags: arrayOfTags,
    };

    this.setState({ blog: updatedBlog });
  };
  handleCategory = (e) => {
    const category = e.target.value;
    console.log(category);
    const blog = this.state.blog;
    const updatedBlog = {
      ...blog,
      category: category,
    };

    this.setState({ blog: updatedBlog });
    console.log(this.state.blog);
  };
  handleMainImage = (base64) => {
    const blog = this.state.blog;

    const updatedBlog = {
      ...blog,
      mainImage: base64,
    };
    this.setState({ blog: updatedBlog });
    this.handleDateOfCreation();
  };
  handleDateOfCreation = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "Mai",
      "Juin",
      "July",
      "Augest",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date();
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getUTCDate();

    const formatedDate = `${year} ${month} ${day}`;
    const blog = this.state.blog;

    const updatedBlog = {
      ...blog,
      createdAt: formatedDate,
    };
    this.setState({ blog: updatedBlog });
  };
  handleGetMyInfoFromGitHub = async () => {
    const response = await axiosClient.get(
      "https://api.github.com/users/Midoukh"
    );
    const updatedBlog = {
      ...this.state.blog,
      author: {
        ...this.state.blog.author,
        avatar: response.data.avatar_url,
      },
    };
    this.setState({ blog: updatedBlog });
  };
  handlePostBlog = async () => {
    await axios
      .post(`${this.state.endPoint}/blogs/post`, this.state.blog)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  handleBlog = async (e) => {
    await this.handleGetMyInfoFromGitHub();
    await this.handlePostBlog();
  };
  render() {
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <Nav handleBlog={this.handleBlog} />
        <input
          className="Input"
          type="text"
          placeholder="Title"
          value={this.state.blog.title}
          onChange={this.handleBlogTitle}
          required
        />
        <input
          className="Input"
          type="text"
          placeholder="Tags"
          onChange={this.handleBlogTags}
          required
        />
        <Categories getCategory={this.handleCategory} />
        <ImageUploader getMainImage={this.handleMainImage} />
        <CKEditor
          editor={ClassicEditor}
          data={this.state.content}
          onReady={(editor) => {
            editor.plugins.get("FileRepository").createUploadAdapter = (
              loader
            ) => {
              return new uploadAdapter(loader);
            };
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            const blog = this.state.blog;
            const updatedBlog = {
              ...blog,
              content: data,
            };
            this.setState({ blog: updatedBlog });
            console.log(data);
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </form>
    );
  }
}

export default MyEditor;
