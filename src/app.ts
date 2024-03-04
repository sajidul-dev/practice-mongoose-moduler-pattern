import express, { Application } from "express";
import cors from "cors";
const app: Application = express();

//application routes

import userRoutes from "./app/modules/user/user.route";

app.use(cors());

//perse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);

export default app;

//inserting test data into mongodb
/*
    step 1: Interface
    step 2: Schema
    step 3: Model
    step 4: Database Query on Model
    */

/*
Interface => interface.ts
Schema, Model => model.ts

route
route function => controller.ts
database query => service.ts

*/
