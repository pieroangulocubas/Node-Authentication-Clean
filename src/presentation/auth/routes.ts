import { Router } from "express";
export class AuthRoutes{
    static get routes():Router{
        const router=Router()

        router.get("/login",(req,res)=>{
            res.json('Login')
        })

        router.get("/register",(req,res)=>{
            res.json('Register')
        })
        return router
    }
    static get routes2():Router{
        const router=Router()

        router.get("/login",(req,res)=>{
            res.json('Login v2')
        })

        router.get("/register",(req,res)=>{
            res.json('Register v2')
        })
        return router
    }
}