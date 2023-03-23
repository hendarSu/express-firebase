const GeneralRepositories = require("./general.repository");

const UserRepository = class extends GeneralRepositories {
    constructor(model) {
        super();
        this.model = this.conection().collection("users")
    }

    async get(filters) {
        return this.model.get()
            .then((snapshot) => {
                let users = []
                snapshot.forEach((doc) => {
                    users.push({
                        id: doc.id,
                        data: doc.data()
                    });
                });
                return users
            })
            .catch((error) => {
                throw error;
            });
    }

    async getById(id) {
        return this.model.doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    return {
                        id: doc.id,
                        data: doc.data()
                    };
                } else {
                    throw error('Item not found');
                }
            })
            .catch((error) => {
                throw error;
            });
    }
}

module.exports = UserRepository;

// TODO: implemetasi di repo
// // Route untuk menambah data
// router.post('/', (req, res) => {
//   const data = req.body;
//   const db = generalRepo.conection();
//   db.collection('users')
//     .add(data)
//     .then((doc) => {
//       res.status(201).json({
//         id: doc.id,
//         data: data
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//       res.status(500).json({ error: 'Error adding item' });
//     });
// });

// // Route untuk mengubah data
// router.put('/:id', (req, res) => {
//   const id = req.params.id;
//   const data = req.body;
//   const db = generalRepo.conection();
//   db.collection('users')
//     .doc(id)
//     .update(data)
//     .then(() => {
//       res.status(200).json({
//         id: id,
//         data: data
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//       res.status(500).json({ error: 'Error updating item' });
//     });
// });

// // Route untuk menghapus data
// router.delete('/:id', (req, res) => {
//   const id = req.params.id;
//   const db = generalRepo.conection();
//   db.collection('users')
//     .doc(id)
//     .delete()
//     .then(() => {
//       res.status(204).send();
//     })
//     .catch((error) => {
//       console.log(error);
//       res.status(500).json({ error: 'Error deleting item' });
//     });
// });
