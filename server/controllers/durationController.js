import {Duration} from "../models/models.js";

class DurationController {
    async create(req, res) {
        try {
            const {name} = req.body
            const duration = await Duration.create({name})
            console.log(req.body)
            res.json(duration);
        } catch (e) {
            res.status(500).json(e)
        }

    }

    async update(req, res) {
        try {
            const duration = req.body
            if (!duration._id) {
                res.status(400).json({message:'Id не указан'})
            }
            const updatedDuration = await Duration.findByIdAndUpdate(duration._id, duration, {new: true})
            console.log(req.body)
            res.json(updatedDuration);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const durations = await Duration.find();
            return res.json(durations)
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
            const duration = await Duration.findByIdAndDelete(id);
            return res.json(duration)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new DurationController();