import {Response, Request} from "express";
// import db from "../database/db";

export class UserController {
    async createUser(req: Request, res: Response) {
        const {name, lastname} = req.body;
        // const newUser = db.query('INSERT INTO my_spoty (name, )')
        console.log(name, lastname)
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

