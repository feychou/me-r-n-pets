import Pet from '../models/Pet.js';

const getPets = async (req, res, next) => {
  try {
    const pets = await Pet.find().populate('userId');
    res.json({
      data: pets,
      msg: 'list of all pets in the db',
      success: true
    })
  } catch(err) {
    next(err)
  }
}

const getPet = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pet = await Pet.findById(id).populate('userId');
    res.json({
      data: pet,
      msg: `pet with id ${id}`,
      success: true
    })
  } catch(err) {
    next(err)
  }
}

const createPet = async (req, res, next) => {
  try {
    const {
      name,
      userId,
      type,
      age,
      features
    } = req.body;
    const pet = await Pet.create({ name, userId, age, type, features });

    res.json({
      data: pet,
      success: true,
      msg: `pet with id ${pet.id} successfully created`
    })
  } catch(err) {
    next(err)
  }


}

const deletePet = async (req, res, next) => {
  try {
    const { id } = req.params

    const pet = await Pet.findByIdAndDelete(id);

    res.json({
      data: pet,
      success: true,
      msg: `pet with id ${id} has been successfully deleted!`
    })
  } catch(err) {
    next(err)
  }
}

const editPet = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      name,
      userId,
      type,
      age,
      features
    } = req.body;
    const pet = await Pet.findByIdAndUpdate(id, { name, userId, age, type, features }, { new: true });
    res.json({
      data: pet,
      msg: `pet with id ${id} successfully updated`,
      success: true
    })
  } catch(err) {
    next(err)
  }
}

export { 
  getPets,
  getPet,
  createPet,
  deletePet,
  editPet
}