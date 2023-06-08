import {Router} from 'express'
import {UserController} from '../controllers/userController'


const router = Router()
const userController = new UserController()

router.get('/user', userController.getUsers)
router.get('/user/:id', userController.getOneUser)
router.post('/user', userController.createUser)
// router.put('/user', userController.updateUser)
// router.delete('/user', userController.deleteUser)


export default router;