const express = require('express')
const FrontController = require('../controllers/FrontController')
const AdminControler = require('../controllers/admin/AdminController')
const CategoryController = require('../controllers/admin/CategoryController')
const BlogController = require('../controllers/admin/BlogController')
const route = express.Router()

//ROUTING
route.get('/',FrontController.home)
route.get('/about',FrontController.about)
route.get('/bloglist',FrontController.bloglist)
route.get('/contact',FrontController.contact)
route.get('/login',FrontController.login)


//admin
route.get('/admin/dashboard',AdminControler.dashboard)

//category 
route.get('/admin/categoryDisplay',CategoryController.display)



//blog
route.get('/admin/blogDisplay',BlogController.display)






module.exports =route