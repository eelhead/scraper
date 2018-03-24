//dependancies
var express = require("express");
var mongo js = require ("mongojs");
// require request and cheerio, this makes scraping possible 
var request = require("request");
var cheerio = require("cheerio");


//Init express
var app = express();

//the database
var databaseUrl = "scraper";
var collection = ["scrapedData"];

//link mogojs config to db variable
var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
	console.log("Database Error:", error);
});