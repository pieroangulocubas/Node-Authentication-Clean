import { Router } from "express";
import { AuthRoutes } from "./auth/routes";
export class AppRoutes{
    static get routes():Router{
        const router=Router()

        router.use("/api/v1/auth",AuthRoutes.routes)
        return router
    }
    static get routes2():Router{
        const router=Router()

        router.use("/api/v2/auth",AuthRoutes.routes2)
        return router
    }
}