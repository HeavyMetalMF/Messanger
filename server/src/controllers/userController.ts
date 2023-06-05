import {Response, Request} from "express";

export class UserController {
    async createUser(req: Request, res: Response) {
        console.log(req.body)
        res.json('ok')
    }

    // async getUsers(req: Request, res: Response) {
    //
    // }
    //
    // async getOneUser(req: Request, res: Response) {
    //
    // }
    //
    // async updateUser(req: Request, res: Response) {
    //
    // }
    //
    // async deleteUser(req: Request, res: Response) {
    //
    // }
}

