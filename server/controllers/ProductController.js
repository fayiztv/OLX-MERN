import productModel from  "../models/ProductModel.js"
import UserModel from "../models/UserModel.js"

export const addProduct=async (req, res)=>{
    try{
        const image = req.file;
        let product = await productModel.create({...req.body, category:req.body.category.toLowerCase(), image})
        res.json({error:false})
    }catch(err){
        res.json({error:true, err, message:"something went wrong"})
    }
}

export const getProducts=async (req, res)=>{
    try{
        const search= req.query.search ?? ""
        const category= req.query.category ?? ""
        console.log(search)
        let products = await productModel.find({$or:[{name:new RegExp(search, 'i')},  {category:new RegExp(search, 'i')}], category:new RegExp(category, 'i')}).lean()
        res.json({error:false, products})
    }catch(err){
        res.json({error:true, err, message:"something went wrong"})
    }
}

export const getProduct=async (req, res)=>{
    try{
        let product = await productModel.findById(req.params.id)
        let user;
        if(product){
            user= await UserModel.findById(product.userId);
        }
        console.log(product)
        res.json({error:false, product, user})
    }catch(err){
        res.json({error:true, err, message:"something went wrong"})
    }
}

export const getCategories=async (req, res)=>{
    try{
        let categories = await productModel.aggregate([{$group:{_id:"$category"}}]);
        return res.json({categories, error:false})

    }catch(err){
        console.log(err)
    }
}