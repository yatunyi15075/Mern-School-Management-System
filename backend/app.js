import express from "express";
import {config} from 'dotenv';

const app = express();
config({path: "./config/config.env"});

app.use( 
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/v1/student", studentRouter);

dbConnection()

export default app;
