import {Topic} from "../models/models.js";

class TopicController {
    async create(req, res) {
        try {
            const {name} = req.body
            const topic = await Topic.create({name})
            console.log(req.body)
            res.json(topic);
        } catch (e) {
            res.status(500).json(e)
        }

    }

    async update(req, res) {
        try {
            const topic = req.body
            if (!topic._id) {
                res.status(400).json({message:'Id не указан'})
            }
            const updatedTopic = await Topic.findByIdAndUpdate(topic._id, topic, {new: true})
            console.log(req.body)
            res.json(updatedTopic);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const topics = await Topic.find();
            return res.json(topics)
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
            const topic = await Topic.findByIdAndDelete(id);
            return res.json(topic)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new TopicController();