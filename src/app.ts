import express from 'express'
import secure from './routers/secure.route'
import cors from 'cors'


class App {
    public express:express.Application

    public constructor (){
        this.express = express()
        this.middlewares()

        this.express.use('/', secure)
        this.express.use("*", (req,res) => res.status(404).json({error: "not found"}))
    }

    private middlewares(): void {
        this.express.use(express.json())
        this.express.use(express.urlencoded({ extended: true }));

    }
}

export default new App().express

