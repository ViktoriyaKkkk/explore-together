import {Role, User} from "../models/models.js";
import bcrypt from "bcryptjs"
import {validationResult} from "express-validator";
import jwt from "jsonwebtoken"

const generateToken = (id, role)=>{
    const payload = {
        id,
        role
    }
    return jwt.sign(payload, )
}

class AuthController{
    async registration(req, res){
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message:"Ошибка регистрации", errors})
            }
            let role = "USER"
            const {email, password, name, gender, birthDate, socialNetwork, info} = req.body
            const candidate = await User.findOne({email})
            if(candidate) {
                return res.status(400).json({message:"Пользователь с таким адресом email уже существует"})
            }
            bcrypt.hash(password, 7, async function(err, hash) {
                if (err) {
                    return res.status(500).json({message:"Что-то пошло не так"})
                }
                if (email === 'admin@admin.com') {
                    role = 'ADMIN'
                }
                const [roleData] = await Role.find({name:role}).exec();
                await User.create({email, password: hash, role: roleData._id, name, gender, birthDate, socialNetwork, info})
                return res.json("Успешно")
                })
        } catch (e){
            return res.status(500).json(e)
        }
    }
    async login(req, res){
        try {
            const {email, password} = req.body
            const user = await User.findOne({email}).exec()
            if (!user) {
                return res.status(400).json({message:`Пользователь ${email} не найден`})
            }
            bcrypt.compare(password, user.password, function(err, result) {
                if (err || !result) {
                    return res.status(400).json({message:'Неверный пароль'})
                }
              const token = generat
            });
        } catch (e){
            res.status(500).json(e)
        }
    }
    async update(req, res){
        try {

        } catch (e){
            res.status(500).json(e)
        }
    }
    async getAll(req, res){
        try {
            res.json('works')
        } catch (e){
            res.status(500).json(e)
        }
    }
}

export default new AuthController()