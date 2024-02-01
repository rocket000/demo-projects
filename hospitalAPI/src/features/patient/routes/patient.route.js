// patient.route.js
import express from "express";
import { registerPatient, createReport, getAllReports, getAllReportsByStatus } from "../controller/patient.controller.js";

const router = express.Router();

router.route("/register").post(registerPatient);
router.route("/:id/create_report").post(createReport);
router.route("/:id/all_reports").get(getAllReports);
router.route("/reports/:status").get(getAllReportsByStatus);

export default router;
