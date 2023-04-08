import  express from "express";
import multer from "multer";
import { addProduct, getCategories, getProduct, getProducts } from "../controllers/ProductController.js";
import { checkUserLoggedIn, userLogin, userLogout, userRegister } from "../controllers/UserController.js";




const router=express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()+".jpg"
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
const upload = multer({ storage: storage })


router.get("/", (req, res)=>{res.json("hai")})
router.post("/register", userRegister)
router.post("/login", userLogin)
router.post('/add-product', upload.single('image'), addProduct )
router.get('/products', getProducts )
router.get("/logout", userLogout)
router.get('/product/:id', getProduct )
router.get("/check-auth", checkUserLoggedIn)
router.get("/categories", getCategories)


export default router