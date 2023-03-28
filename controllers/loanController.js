const Loan = require('./../models/loanModel');

exports.getAllLoans =   async (req, res) => {
  // const {id}  = req.params.id;
  try {
    // EXECUTE QUERY

    const courses = await Loan.find()

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: loans.length,
      data: {
        loans
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getloan = async (req, res) => {
  const id = req.params.id;
  try {
    const loan = await Loan.findById(id);
    // Loan.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        loan
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createLoan = async  (req, res) => {
  const loadData = req.body;
  if(loaData){ 
    try {
      const newLoan = await Loan.create(loadData);

      res.status(201).json({
        status: 'success',
        data: {
          course: newLoan
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

exports.updateLoan = async (req, res) => {
  try {
    const loan = await Loan.findByIdAndUpdate(req.params.id, req.body, {
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

exports.deleteLoan = async (req, res) => {
  try {
    await Loan.findByIdAndDelete(req.params.id);

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