import express from "express";
import doctorRoutes from "./src/features/doctor/routes/doctor.route.js"
import patientRoutes from "./src/features/patient/routes/patient.route.js"
import cookieParser from "cookie-parser";
import jwtAuth from "./src/middlewares/jwtAuth.js";
import db from "./src/config/mongoose.js"

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/doctors", doctorRoutes);
app.use("/api/patients",jwtAuth,patientRoutes)

export default app;
