const blogsRouter = require('express').Router()
const Blog = require('../models/blog')


/* blogsRouter.get("/", (request, response)=> {
    Blog.find({})
    .then(blogs => {
        response.json(blogs)
    })
}) */

//async function blogsRouter REFACTOR
    blogsRouter.get('/', async(request,response)=> {
        const blogs = await Blog.find({})
        response.json(blogs)
    })

   

blogsRouter.get("/:id", (request, response, next)=> {
    Blog.findById(request.params.id)
    .then(blog=> {
        blog ? response.json(blog) : response.status(404).end()
    })
    .catch(error => next(error))
})

blogsRouter.post('/', async(request, response)=> {
    const blog = new Blog(request.body)

    if(!blog.title || !blog.url){
        response.status(400).end()
    }else{
        const savedBlog = await blog .save()
        response.status(201).json(savedBlog.toJSON())
    }
})

/* blogsRouter.delete('/:id', (request, response, next)=>{
    Blog.findByIdAndRemove(request.params.id)
    .then(()=>{
        response.status(204).end()
    })
    .catch(error => next(error))
}) */

//async function delete one blog REFACTOR
blogsRouter.delete('/:id', async(request,response)=> {
    await Blog.findByIdAndRemove(request.params.id)
    response.status(204).end()
})

/*
blogsRouter.put('/:id', (request, response, next)=>{
    const body = request.body

     const blog = {
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes
    }

    Blog.findByIdAndUpdate(request.params.id, blog, {new: true})
    .then(updateBlog=> {
        response.json(updateBlog)
    })
    .catch(error => next(error))
}) */

//async function update Blog REFACTOR
blogsRouter.put('/:id',async(request, response, next)=>{
    const body = request.body

    const blog = {
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes
    }

    const update = await Blog.findByIdAndUpdate(
        request.params.id,
        blog,
        {new: true}
    )
    response.json(update.toJSON())
})


/* blogsRouter.post("/", (request, response, next)=> {
    const body = request.body

    const blog = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes || 0,
    })

    blog
    .save()
    .then((savedBlog) => savedBlog.toJSON())
    .then((savedAndFormattedBlog) => response.json(savedAndFormattedBlog))
    .catch((error) => next(error))
}) */




module.exports = blogsRouter
