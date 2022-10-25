const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

//async function blogsRouter REFACTOR
    blogsRouter.get('/', async(request,response)=> {
        const blogs = await Blog.find({}).populate('user', {username: 1, name: 1})
        response.json(blogs.map((blog) => blog.toJSON()))

    })


    blogsRouter.post ('/', async(request, response, next)=> {
        const body = request.body

        if (!mongoose.Types.ObjectId.isValid(body.user)) {
            return response.status(404).end()
          }
    
        const decodedToken = jwt.verify(request.token, process.env.SECRET)

        const user =  await  User.findById(decodedToken.id)

        if(!user){
            return response.status(404).end()
        }
    
        const blog = new Blog({
            title: body.title,
            author: body.author,
            url: body.url,
            likes: body.likes,
            user : user
        })
        if(!blog.title || !blog.url){
            response.status(400).end()
        }
    
        const savedBlog = await blog.save()
        user.blogs = user.blogs.concat(savedBlog._id)
        await user.save({ validateModifiedOnly: true })
    
        response.status(201).json(savedBlog.toJSON())
    
    })


blogsRouter.get("/:id", (request, response, next)=> {
    Blog.findById(request.params.id)
    .then(blog=> {
        blog ? response.json(blog) : response.status(404).end()
    })
    .catch(error => next(error))
})

//async function delete one blog REFACTOR
blogsRouter.delete('/:id', async(request,response)=> {
    const blog = await Blog.findById(request.params.id)
    const decodedToken = jwt.verify(request.token, process.env.SECRET)

    const user = await User.findById(decodedToken.id)

    if(user.id.toString()=== blog.user.toString()){
        await Blog.findByIdAndRemove(request.params.id)
        response.status(204).end()
    }else{
        return response.status(401.).end()
    }

})

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



module.exports = blogsRouter



/* blogsRouter.get("/", (request, response)=> {
    Blog.find({})
    .then(blogs => {
        response.json(blogs)
    })
}) */

/* blogsRouter.post('/', async(request, response)=> {
    const blog = new Blog(request.body)

    if(!blog.title || !blog.url){
        response.status(400).end()
    }else{
        const savedBlog = await blog .save()
        response.status(201).json(savedBlog.toJSON())
    }
}) */

/* blogsRouter.delete('/:id', (request, response, next)=>{
    Blog.findByIdAndRemove(request.params.id)
    .then(()=>{
        response.status(204).end()
    })
    .catch(error => next(error))
}) */

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