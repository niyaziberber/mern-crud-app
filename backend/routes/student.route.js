const express = require("express");
const router = express.Router();

const studentSchema = require("../models/Student");

//create student
router.route("/create-student").post((req, res, next) => {
  studentSchema.create(req.body, (err, data) => {
    if (err) {
      return next(err);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

//student list
router.route("/").get((req, res) => {
  studentSchema.find((err, data) => {
    if (err) {
      return err;
    } else {
      res.json(data);
    }
  });
});

//get student
router.route("/edit-student/:id").get((req, res, next) => {
  studentSchema.findById(req.params.id, (err, data) => {
    if (err) {
      return next(err);
    } else {
      res.json(data);
    }
  });
});

//update student
router.route("/update-student/:id").put((req, res, next) => {
  studentSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, data) => {
      if (err) {
        return next(err);
      } else {
        res.json(data);
        console.log("student is updated..");
      }
    }
  );
});

//delete student
router.route("/delete-studen/:id").delete((req, res, next) => {
  studentSchema.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      return next(err);
    } else {
      res.status(200).json({ message: data });
    }
  });
});

module.exports = router