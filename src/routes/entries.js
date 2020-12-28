import express from 'express';
import Entry from '../models/Entry.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const query = Entry.find({});
        const entries = await query.exec();
        res.json(entries);
    } catch (err) {
        res.json({ message: 'Something went wrong' });
    }
});

router.post('/', async (req, res) => {
    const entry = new Entry({
        user_name: req.body.user_name,
        message: req.body.message,
    });

    try {
        const data = await entry.save();
        res.json(data);
    } catch (err) {
        res.json({ message: err });
    }
});

export default router;