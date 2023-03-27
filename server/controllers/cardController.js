import {Card} from "../models/models.js";

class CardController {
    async create(req, res) {
        try {
            const {name, owner, level, duration, periodicity, time, format, numberOfPeople, gender, age, participants} = req.body
            const card = await Card.create({name, owner, level, duration, periodicity, time, format, numberOfPeople, gender, age, participants})
            console.log(req.body)
            res.json(card);
        } catch (e) {
            res.status(500).json(e)
        }

    }

    async update(req, res) {
        try {
            const card = req.body
            if (!card._id) {
                res.status(400).json({message:'Id не указан'})
            }
            const updatedCard = await Card.findByIdAndUpdate(card._id, card, {new: true})
            console.log(req.body)
            res.json(updatedCard);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const cards = await Card.find();
            return res.json(cards)
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
            const card = await Card.findByIdAndDelete(id);
            return res.json(card)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new CardController();