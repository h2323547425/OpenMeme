const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 2,
        max: 20
    },
    lastName: {
        type: String,
        trim: true,
        min: 2,
        max: 20
    },
    profilePicture: {
        type: String,
    },
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    hash_password: {
        type: String,
        required: true
    }
}, { timestamps: true })


// this will set password of user in encrypted form
userSchema.virtual('password')
    .set(function (password) {
        this.hash_password = bcrypt.hashSync(password, 10)
    })

// this will create another field in database with full name
// and field value will be firstName + lastName
userSchema.virtual('fullName')
    .get(function () {
        return `${this.firstName} ${this.lastName}`
    });

// this is the fuction which we call in signin api endpoint to
// whether the req.body.password === database password
// this is required because we save password in encrypted format
userSchema.methods = {
    authenticate: function (password) {
        return bcrypt.compareSync(password, this.hash_password);
    }
}

module.exports = mongoose.model('User', userSchema)
