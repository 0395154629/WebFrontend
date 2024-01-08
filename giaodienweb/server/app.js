const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const eLayout = require('express-ejs-layouts')
const cookieParser = require('cookie-parser')


// sử dụng cookie
app.use(cookieParser())

//view engine (ejs)
app.use(eLayout)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.set('layout', './layout/layout.ejs')
app.use(express.static(path.join(__dirname, 'public')))

// homepage
app.get('/', (req, res, next) => {

    res.render('index')
})

app.get('/post.html', (req, res, next) => {

    res.render('post')

})

app.get('/cart.html', (req, res, next) => {
    res.render('cart')
})

app.get('/category.html', (req, res, next) => {
    res.render('category',

        {
            layout: './layout/layout-danhMuc.ejs'
        })
})

app.get('/contact.html', (req, res, next) => {
    res.render('contact')
})

app.get('/product.html', (req, res, next) => {

    res.render('product')

})

app.get('/admin-product.html', (req, res, next) => {
    res.render('admin/product', {
        layout: './layout/admin-layout.ejs'
    })
})

app.get('/edit_product.html', (req, res, next) => {
    res.render('admin/edit_product', {
        layout: './layout/admin-layout.ejs'
    })
})

app.get('/add_product.html', (req, res, next) => {
    res.render('admin/add_product', {
        layout: './layout/admin-layout.ejs'
    })
})

app.use(cookieParser())


app.get('/index.html', (req, res, next) => {
    console.log(req.cookies);
    res.cookie('session_id', '12345')
    res.cookie('cartInfo', '0')
    res.render('index')
})


//chay app
app.listen(port, function () {
    console.log(`Đang chạy app tại: http://localhost:${port}`)
})