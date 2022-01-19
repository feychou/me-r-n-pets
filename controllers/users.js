import User from '../models/User.js';

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json({
      data: users,
      msg: 'list of all Users in the db',
      success: true
    })

  } catch(err) {
    console.log(err)
  }
}

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id)
    res.json({
      data: user,
      msg: `user with id ${id}`,
      success: true
    })

  } catch(err) {
    console.log(err)

  }
}

const createUser = async (req, res) => {
  try {
    const { name } = req.body;
    const user = await User.create({ name });

    res.json({
      data: user,
      success: true,
      msg: `user with id ${user.id} successfully created`
    })
  } catch(err) {
    console.log(err)
  }


}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params

    const user = await User.findByIdAndDelete(id);

    res.json({
      data: user,
      success: true,
      msg: `user with id ${id} has been successfully deleted!`
    })
  } catch(err) {
    console.log(err)
  }
}

const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const user = await User.findByIdAndUpdate(id, { name }, { new: true });
    res.json({
      data: user,
      msg: `user with id ${id} successfully updated`,
      success: true
    })

  } catch(err) {
    console.log(err)
  }



}

export { 
  getUsers,
  getUser,
  createUser,
  deleteUser,
  editUser
}
