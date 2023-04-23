// import {NumberOfPeople} from "../models/models.js";
//
// class NumberOfPeopleController {
//     async create(req, res) {
//         try {
//             const {name} = req.body
//             const number = await NumberOfPeople.create({name})
//             console.log(req.body)
//             res.json(number);
//         } catch (e) {
//             res.status(500).json(e)
//         }
//
//     }
//
//     async update(req, res) {
//         try {
//             const number = req.body
//             if (!number._id) {
//                 res.status(400).json({message:'Id не указан'})
//             }
//             const updatedNumber = await NumberOfPeople.findByIdAndUpdate(number._id, number, {new: true})
//             console.log(req.body)
//             res.json(updatedNumber);
//         } catch (e) {
//             res.status(500).json(e)
//         }
//     }
//
//     async getAll(req, res) {
//         try {
//             const numbers = await NumberOfPeople.find();
//             return res.json(numbers)
//         } catch (e) {
//             res.status(500).json(e)
//         }
//     }
//
//     async delete(req, res) {
//         try {
//             const {id} = req.params
//             if (!id) {
//                 res.status(400).json({message:'Id не указан'})
//             }
//             const number = await NumberOfPeople.findByIdAndDelete(id);
//             return res.json(number)
//         } catch (e) {
//             res.status(500).json(e)
//         }
//     }
// }
//
// export default new NumberOfPeopleController();