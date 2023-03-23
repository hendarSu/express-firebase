// const GeneralRepositories = require("../repositories/general.repository");
const UserModel = require("../models/user");
const userModel = new UserModel()

const UserController = class {
    async get(req, res, next) {
        try {
            const data = await userModel.get(null)
            res.status(200).json(data);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Error getting item' });
        }
    }

    async getById(req, res, next) {
        const id = req.params.id;
        try {
            const data = await userModel.getById(id);
            res.status(200).json(data);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Error getting item' });
        }
    }
}

module.exports = UserController;