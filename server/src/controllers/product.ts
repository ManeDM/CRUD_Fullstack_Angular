import { Request, Response} from 'express'

export const getProducts = (req: Request, res: Response) => {

    res.json({
        msg: "get products"
    })
}

export const getProduct = (req: Request, res: Response) => {
    
    const { id } = req.params;

    res.json({
        msg: "Get product",
        id
    })
}

export const deleteProduct = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        msg: "Delete product",
        id
    })
}

export const postProduct = (req: Request, res: Response) => {
    const { body } = req;
    res.json({
        msg: "Post product",
        body
    })
}

export const updateProduct = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    res.json({
        msg: "Update product",
        id,
        body
    })
}