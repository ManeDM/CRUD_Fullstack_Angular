import { Request, Response, NextFunction} from 'express'
import  Jwt  from 'jsonwebtoken';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    const headerToken = req.headers['authorization']
   
    if(headerToken != undefined &&  headerToken.startsWith('Bearer')){
    //Ya tiene Token - Paso la validacion el IF
        try {
            const bearerToken = headerToken.slice(7);
            Jwt.verify(bearerToken, process.env.SECRET_KEY || 'prueba1234')
            next()
            
        } catch (error) {
            res.status(401).json({
                msg: "Invalid Token"
            })        
        }
        
        
    } else {
        res.status(401).json({
            msg: "Access Denied"
        })
    }
    
    
}

export default validateToken;