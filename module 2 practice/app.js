const express = require("express");
const path = require("path");


const bodyParser = require("body-parser")

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


const adminRoutes = require("./routers/admin")
const userRoutes = require("./routers/shop")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))

app.use( '/admin',adminRoutes.routes )
app.use(userRoutes)


app.use((req, res, next) => {
res.sendFile(path.join(__dirname, "views", "page-not-found.html"))
})

app.listen(3000);