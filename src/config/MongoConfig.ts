import mongoose, { Mongoose } from "mongoose";

export class MongoConfig {
    constructor(
    ) { }

    connect() {
        mongoose.connect("mongodb://localhost:27017/todo",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
    }
}