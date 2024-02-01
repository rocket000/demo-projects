// report.js
import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
    createdBy: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit'],
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    patient: {
        type: String,
        ref: 'Patient',
        required: true
    }
});

const Report = mongoose.model('Report', reportSchema);

export default Report;
