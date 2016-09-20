"use strict";
var express = require("express"),
  fs = require("fs");

// "stupid" CMS, database = fs, static, fast
const articles = fs.readdirSync("./articles/")
  .map(name => name.slice(0, -3))
  .filter(name => !name.startsWith("x"))
  .sort()
  .reverse()
  .map(name => {
    var article = require("./articles/" + name);
    article.id = name;
    return article;
  });

const articleMap = {};

articles.forEach(article => articleMap[article.id] = article);

module.exports = app => {
  app.use(express.static(__dirname + "/public"));

  app.get("/", function(req, res) {
    res.render("index", {articles: articles});
  });
  app.get("/blog", function(req, res) {
    res.render("blog", {articles: articles});
  });

  /* Legacy */
  app.get("/cz/transparence/transparence-dle-IT/", function(req, res) {
    res.redirect("/#transparence");
  });
  app.get("/cz/kandidati/", function(req, res) {
    res.redirect("/#kandidati");
  });
  app.get("/cz/loga", function(req, res) {
    res.render("loga.pug");
  });

  app.get("/clanek/:name", function(req, res) {
    var article = articleMap[req.params.name];
    if (!article) {
      res.redirect("/blog");
    } else {
      res.render("article", {article: article});
    }
  });

  app.get("/noviny", function(req, res) {
    res.render("newspaper.pug");
  });

  /* AMP */
  app.get("/index.amp", function(req, res) {
    res.render("index.amp.pug");
  });

  app.get("*", function(req, res){
    res.redirect("/");
  });
};
