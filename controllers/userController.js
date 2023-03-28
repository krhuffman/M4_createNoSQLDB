const User = require('./../models/userModel');

// exports.getAllUsers =   async (req, res) => {
//   // const {id}  = req.params.id;
//   try {
//     // EXECUTE QUERY

//     const users = await User.find()

//     // SEND RESPONSE
//     res.status(200).json({
//       status: 'success',
//       results: users.length,
//       data: {
//         users
//       }
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };

exports.getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    // Loan.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        user
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createUser = async  (req, res) => {
  const newUser = req.body;
  if(newUser){ 
    try {
      const newUser = await User.create(newUser);

      res.status(201).json({
        status: 'success',
        data: {
          newUser
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err
      });
    }
} else{
  res.status(400).json({
    status: 'fail',
    message: err
  });
}

};

exports.updateUser = async (req, res) => {
  try {
    const loupdatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        course
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};