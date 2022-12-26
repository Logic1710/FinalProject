import express from "express"
import mongoose from "mongoose";
import cors from "cors";
import BookRoutes from "./routes/BookRoutes.js";

const app = express();
mongoose.connect('mongodb://localhost:27017/gramedia',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.on('open', () => console.log("DB Connected"));

app.use(cors());
app.use(express.json());
app.use(BookRoutes);

app.listen(5000, ()=> console.log('Server running'))