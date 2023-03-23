
// connection firebase
const admin = require('firebase-admin');

// Inisialisasi Firebase Admin
const serviceAccount = require('../config/firebase.config.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${process.env.FIREBASE_FIRESTORE_DB_NAME}.firebaseio.com`
});

class GeneralRepositories {
    constructor() {
    }

    conection() {
        return admin.firestore();
    }
}

module.exports = GeneralRepositories; 