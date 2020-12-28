import mongoose from 'mongoose';

const EntrySchema = mongoose.Schema({
    user_name: {
        type: String,
        required: true,
    },
    message: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const entry = mongoose.model('Entries', EntrySchema);

export default entry;