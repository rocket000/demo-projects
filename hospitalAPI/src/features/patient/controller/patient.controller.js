// patient.controller.js
import mongoose from 'mongoose';
import Patient from '../../../models/patient.js';
import Report from '../../../models/report.js';

export const registerPatient = async (req, res, next) => {
    try {
      const { patientId, doctor } = req.body;
      let existingPatient = await Patient.findOne({ patientId }).populate('reports');
  
      if (existingPatient) {
        res.status(200).json({ status: "success", patient: existingPatient });
      } else {
        const newPatient = await Patient.create({ patientId, doctor });
  
        existingPatient = await Patient.findOne({ patientId }).populate('reports');
        res.status(201).json({ status: "success", patient: existingPatient });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "failure", msg: "Server error" });
    }
  };

  export const createReport = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { createdBy, status } = req.body;
        console.log('id----',id)
        console.log('createdBy----',createdBy)
        console.log('status----',status)
        
        const newReport = await Report.create({
            createdBy,
            status,
            patient: id, // Use phone number directly as a string
        });

        res.status(201).json({ status: "success", report: newReport });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "failure", msg: "Server error" });
    }
  };

  
export const getAllReports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const reports = await Report.find({ patient: id }).sort({ date: 1 });
    res.status(200).json({ status: "success", reports });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "failure", msg: "Server error" });
  }
};

export const getAllReportsByStatus = async (req, res, next) => {
  try {
    const { status } = req.params;
    const reports = await Report.find({ status }).sort({ date: 1 });
    res.status(200).json({ status: "success", reports });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "failure", msg: "Server error" });
  }
};
