const mongoose = require('mongoose')

const testMongo = async () => {
    const SchemaT = mongoose.Schema({
        name: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            default: '111111',
        }
    });

    const User = mongoose.model('user', SchemaT);

    const user = new User({name: 'licheng'});

    try {
        const result = await user.save();

        const users = await User.find({});

        console.log(users);

        // response.json(users);

    } catch(err) {
        console.log(err.message);
    }

}



module.exports = testMongo