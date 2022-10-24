const _ = require('lodash');
const dummy = (blogs) => {
    // ...
    return 1
  }

  
const totalLikes = (blogs) => {
    const likes = blogs.length === 0 ? 0 : blogs.reduce((sum, blog) => sum + blog.likes, 0)
  
    return likes
  }

const favoriteBlog = (blogs) => {

   const topBlog = blogs.reduce((blog, likes) => likes.likes > blog.likes ? likes : blog)

    return {
        title: topBlog.title,
        author: topBlog.author,
        likes: topBlog.likes,
    }
}

const mostBlogs = (popularAuthor) => {
  const testing = Math.max(...popularAuthor.map(o => o.blogs))

  return {
    blogs: testing
  }
}

console.log(mostBlogs)
  
  module.exports = {
    dummy, totalLikes, favoriteBlog, mostBlogs,
  }
