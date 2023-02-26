import express, { Application } from 'express';

class Server {
    private app: Application;
    private port: String;

    constructor () {
        this.app = express();
        this.port = "4000";
        this.listen();
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log(`Aplicación corriendo en el puerto ${this.port}`)
        })
    }

}

export default Server;