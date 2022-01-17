import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add a pet name']
  }
});

// User => users
// Pet => pets
const UserModel = mongoose.model('User', UserSchema)

export default UserModel;