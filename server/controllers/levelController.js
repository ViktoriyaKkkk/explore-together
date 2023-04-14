import {Level} from "../models/models.js";

class LevelController {
    async create(req, res) {
        try {
            const {name, section_id} = req.body
            const level = await Level.create({name, section_id})
            res.json(level);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const level = req.body
            if (!level._id) {
                res.status(400).json({message:'Id не указан'})
            }
            const updatedLevel = await Level.findByIdAndUpdate(level._id, level, {new: true})
            res.json(updatedLevel);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const levels = await Level.find();
            return res.json(levels)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                res.status(400).json({message:'Id не указан'})
            }
            const level = await Level.findByIdAndDelete(id);
            return res.json(level)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new LevelController();