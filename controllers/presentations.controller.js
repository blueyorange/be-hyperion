const Presentation = require("../models/presentations.models.js");

exports.getPresentations = (req, res, next) => {
  return Presentation.find()
    .then((presentations) => {
      res.status(200).send({ presentations });
    })
    .catch((err) => next(err));
};
exports.readPresentation = (req, res, next) => {
  const { _id } = req.params();
  return Presentation.find(_id).then((presentation) => {
    res.status(200).send({ presentation });
  });
};

exports.createPresentation = (req, res, next) => {
  console.log("hey hey");
  const newPresentation = req.body;
  console.log(newPresentation);
  return Presentation.create(newPresentation)
    .then((presentation) => res.status(201).send({ presentation }))
    .catch((err) => next(err));
};

exports.updatePresentation = (req, res, next) => {
  const { _id } = req.params;
  const update = req.body;
  Presentation.findByIdAndUpdate(_id, update, { new: true })
    .exec()
    .then((presentation) => {
      console.log(presentation);
      if (!presentation)
        res.status(404).send({ msg: "Presentation does not exist." });
      return res.status(204).send();
    })
    .catch((err) => {
      err.status = 400;
      next(err);
    });
};

exports.deletePresentation = (req, res, next) => {
  const { _id } = req.params;
  return Presentation.deleteOne({ _id })
    .then(({ deletedCount }) => {
      if (deletedCount === 0) return res.status(404).send();
      res.status(200).send();
    })
    .catch((err) => {
      err.status = 400;
      next(err);
    });
};
