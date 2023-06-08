import {Response, Request} from "express";
import db from "../database/db";

export class UserController {
    async createUser(req: Request, res: Response) {
        const {login, password, username} = req.body;
        const newUser = await db.query(
            "INSERT INTO users (login, password, username) values ($1, $2, $3) RETURNING *",
            [login, password, username]
        )
        console.log(newUser)
        res.json(newUser.rows)
    }

    async getUsers(_: Request, res: Response) {
        const allUsers = await db.query("SELECT * FROM users")
        res.json(allUsers)
    }

    async getOneUser(req: Request, res: Response) {
        const id: number = Number(req.params.id)
        const user = await db.query(
            "SELECT * FROM users WHERE id = $1",
            [id]
        )
        res.json(user.rows)
    }

    // async updateUser(req: Request, res: Response) {
    //
    // }
    //
    // async deleteUser(req: Request, res: Response) {
    //
    // }
}

