const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)

const Blog = require('../models/blog')

beforeEach(async () => {
    await Blog.deleteMany({})
  
    const blogObject = helper.initialBlogs
      .map(blog => new Blog(blog))
    const promiseArray = blogObject.map(blog => blog.save())
    await Promise.all(promiseArray)
  })

  describe('Blogs API tests:', () => {
    test('blogs are returned as JSON', async () => {
      await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
    }, 100000)
  
    test('All blogs are returned', async () => {
      const response = await api
        .get('/api/blogs')
  
      expect(response.body).toHaveLength(helper.initialBlogs.length)
    })

    test('Check ID instead of _id', async()=> {
      const response = await api
      .get('/api/blogs')
      expect(response.body[0].id).toBeDefined()
    })

    test('Check likes property missing', async()=> {
      const blogs = await helper.blogsInDb()
      const likes = blogs.map(r => r.likes)
      expect(likes).toContain(0)
    })

    test('Check url and title properties missing', async()=> {
      const newBlog = {
        author: 'Cami',
        likes: 10,
      }

      await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(400)

        const checked = await helper.blogsInDb()
        expect(checked).toHaveLength(helper.initialBlogs.length)
    })
  })




  
  afterAll(() => {
    mongoose.connection.close()
  })