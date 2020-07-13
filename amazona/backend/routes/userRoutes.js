import express from 'express';
import User from '../models/userModel';
import { getToken } from '../util';
const router = express.Router();

router.post('/signin', async (req, res) => {
    const { body: { email, password } } = req;
    const signinUser = await User.findOne({
        email,
        password
    });

    if(signinUser) {
        res.send({
            id: signinUser._id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken(signinUser)
        });
    } else {
        res.status(401).send({ msg: 'Invalid Email or Password.'});
    }
})

router.post('/register', async (req, res) => {
    const { body: { name, email, password } } = req;
    const user = new User({
        name,
        email,
        password
    });

    const newUser = await user.save();

    if(newUser) {
        res.send({
            id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            token: getToken(newUser)
        });
    } else {
        res.status(401).send({ msg: 'Invalid User Data.'});
    }
})

router.get("/createadmin", async (req, res) => {
    try { 
        const user = new User({
            name: 'Elder',
            email: 'ediluik@gmail.com',
            password: '123123',
            isAdmin: true
        });

        const newUser = await user.save();
        res.send(newUser);
    } catch(err) {
        res.send({ msg: err.message });
    }
});

export default router;

