import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
        },
        email: {
            type: String,
            require: true,
            unique: true,
        },
        password: {
            type: String,
            require: true,
        },
        avatar: {
            type: String,
            default:
                "https://hocdohoacaptoc.com/storage/2022/02/avata-dep-nam-2.jpg",
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
