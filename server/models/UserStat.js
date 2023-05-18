import mongoose from "mongoose";

const UserStatSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    affiliateSales: {
      type: [mongoose.Types.ObjectId],
      ref: "Transaction",
    },
  },
  { versionKey: false, timestamps: true }
);

const UserStat = mongoose.model("UserStat", UserStatSchema);
export default UserStat;
