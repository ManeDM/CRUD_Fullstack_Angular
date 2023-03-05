import express, { Application, Request, Response } from 'express';
import routeProduct from '../routes/products';

class Server {
    private app: Application;
    private port: String;

    constructor () {
        this.app = express();
        this.port = process.env.PORT || '4001';
        this.listen();
        this.midlewares(); 
        this.routes(); 
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

        this.app.use('/api/products', routeProduct)
    }

    midlewares() {
        //Parseo del body
        this.app.use(express.json());
    }

}

export default Server;