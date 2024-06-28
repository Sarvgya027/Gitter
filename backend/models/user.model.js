import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    reuired: true,
    uniue: true
  },
  name: {
    type: String,
    default: '',
  },
  profileURL: {
    type: String,
    required: true
  },
  avatarURL: {
    type: String,

  },
  likeProfiles: {
    type: [String],
    default: [],
  },
  likedBy: [{
    username: {
      type: String,
      required: true,
    },
    avatarURL: {
      type: String
    },
    typeDate: {
      type: Date,
      default: Date.now
    }
  }]
}, {timestamps: true})

const User = mongoose.model("User", userSchema)

export default User;