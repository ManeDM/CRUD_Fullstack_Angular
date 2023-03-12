import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import routeProduct from '../routes/products';
import routeUser from '../routes/user';
import Product from './product';
import User from './user';

class Server {
    private app: Application;
    private port: String;

    constructor () {
        this.app = express();
        this.port = process.env.PORT || '4001';
        this.listen();
        this.midlewares(); 
        this.routes(); 
        this.dbConnect();
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log(`Aplicación corriendo en el puerto ${this.port}`)
        })
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: "API Working"
            })
        })

        this.app.use('/api/products', routeProduct);
        this.app.use('/api/users', routeUser );
    }

    midlewares() {
        //Parseo del body
        this.app.use(express.json());

        //cors
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            await Product.sync()
            await User.sync()
            console.log('Data Base Connected') 
        } catch (error) {
             console.log(error);
            console.log('Error Triying to create a connection with the database')
        }
    }
 
}

export default Server;