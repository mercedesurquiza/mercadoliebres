const path = require("path")
const app = express()

app.listen(3016);
app.listen(process.env.PORT ||3018);

const staticFolder = path.resolve(__dirname, "./public")
app.use(express.static(staticFolder));
app.get("/", (req, res) => {
 res.sendFile(path.resolve(__dirname, "views/home.html"));
 })
 app.get("/register", (req, res) => {
     res.sendFile(path.resolve(__dirname, "./views/register.html"));
 })
 app.get("/login", (req, res) => {
     res.sendFile(path.resolve(__dirname, "./views/login.html"));
 }) 
 app.get("/search", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/search.html"));
}) 