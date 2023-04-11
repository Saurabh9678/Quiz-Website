const express = require("express");
const {deleteResult,getAllResult,getSingleUserResult,insertResult} = require("../controllers/resultController")
const router = express.Router();

router.route("/result").post(insertResult).get(getAllResult)

router.route("/result/:id").get(getSingleUserResult).delete(deleteResult)



module.exports = router