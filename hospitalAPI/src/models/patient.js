// patient.js
import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    patientId: {
        type: String, // Change to String
        required: true
    },
    doctor: {
        type: String,
        required: true
    },
    reports: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Report'
    }]
});

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;
