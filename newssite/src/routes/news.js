const express = require("express");
const newsRouter = express.Router();
const axios = require("axios");

newsRouter.get("", async (req, res) => {
  try {
    const newsAPI = await axios.get(
      "https://newsapi.org/v2/everything?q=Apple&from=2021-03-01&sortBy=popularity&apiKey=d3131e92c089440ca8ed3824b733369e"
    );
    // console.log(newsAPI.data);
    res.render("news", { articles: newsAPI.data.articles });
  } catch (error) {
    if (error.response) {
      res.render("news", { articles: null });
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      res.render("news", { articles: null });

      console.log("Error", err.message);
    }
  }
});

newsRouter.post("", async (req, res) => {
  let search = req.body.search;
  try {
    const newsAPI = await axios.get(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=d3131e92c089440ca8ed3824b733369e`
    );
    // console.log(newsAPI.data);
    res.render("newsSearch", { articles: newsAPI.data.articles });
  } catch (error) {
    if (error.response) {
      res.render("newsSearch", { articles: null });
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      res.render("newsSearch", { articles: null });
      console.log(error.request);
    } else {
      res.render("newsSearch", { articles: null });

      console.log("Error", err.message);
    }
  }
});

module.exports = newsRouter;
