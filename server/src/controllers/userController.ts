import {Response, Request} from "express";
import db from "../database/db";

export class UserController {
    async createUser(req: Request, res: Response) {
        const {login, password, username} = req.body;
        const newUser = await db.query("INSERT INTO users (login, password, username) values ($1, $2, $3) RETURNING *", [login, password, username])
        console.log(newUser)
        res.json(newUser.rows)
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

