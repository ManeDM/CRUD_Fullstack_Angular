import { Request, Response} from 'express'
import Product from '../models/product'

export const getProducts = async (req: Request, res: Response) => {
    const listProducts = await Product.findAll()

    res.json(listProducts)
}

export const getProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product =  await Product.findByPk(id);

    if(product) {
        res.json(product)
    } else {
        res.status(404).json({
            msg: `Product with ID # ${id} doesn't exits`
        })
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product =  await Product.findByPk(id);
    
    if(!product) {
        res.status(404).json({
            msg: `Product with ID # ${id} doesn't exits`
        })
    } else {
        await product.destroy();
        res.json({
            msg: "The product has been successfully removed"
        })
    }
}


export const postProduct = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        await Product.create(body);

        res.json({
        msg: "The product has been added successfully"
    })        
    } catch (error) {
        console.log(error);
        res.json({
            msg: "ops, an error has been ocurred, please contact with support"
        })
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const product =  await Product.findByPk(id);
        if(product) {
           await product.update(body);
           res.json({
            mgs: "The product has been successfully updated"
           })
    
        } else {
            res.status(404).json({
                msg: `Product with ID # ${id} doesn't exits`
            })
        } 
    } catch (error) {
        console.log(error);
        res.json({
            msg: "ops, an error has been ocurred, please contact with support"
        })
        
    }

    

}