# Blog API

## Introduction
It's nothing but a simple blog API written with the help of `expressjs` and `sqlite` only. I wanted it to be as fast as possible while supporting most famous technologies so that many users will be comfortable using it. still, the database and routers are decoupled, if you want you can just replace anything and it should not affect the other. 

> NOTE: currently I have not added any type of security mechanism whatsoever. API will be open to everyone.

## Schema

### Blog
A blog is the site you visit. Assuming you plan to support multiple blogs, like `food.fosslife.com` for food blogs, `travel.fosslife.com` for travel blogs etc, you have to first register the `blog` with a proper name.

To register blog use `/blog/register` route. it requires only `Title` and `Description` (case-sensitive JSON key-value pairs). will add more attributes as I proceed. 
```json
{
    "Title"       : "fosslife",
    "Description" : "A blog of randomness"
}
```

### Author
After that, you need to register the author. Authors are universal, like `Spark` can write posts for both `food.fosslife.com` and `travel.fosslife.com`. Same process goes for registering author. use `/author/register` route with JSON:

```json
{
    "Name" : "Spark",
    "Bio"  :  "Programming Enthusiast, Traveller, Foodie"
}
```

### Post
Each blog has posts, for right now, the REST-api is not so RESTful considering hierarchy, it should have been something like `blog -> post -> search_criteria` etc, but I messed up while starting and made it like `post -> blog -> search_criteria` which I am too lazy to fix now. Anyway, to register a Post, use `post/register` route with following schema:
```json
{
  "title": "How to JavaScript",
  "slug": "how-to-js",
  "author": "Spark",
  "excerpt": "in this post, learn how to js",
  "preview": "/* preview image URL here */",
  "post": "Entire post as markdown or whatever format you want to support on UI",
  "tags": [
    "coding",
    "js"
  ],
  "blog": "Fosslife // Case sensitive",
  "category": "programming"
}
```

I hope all the fields are self explanatory, for 