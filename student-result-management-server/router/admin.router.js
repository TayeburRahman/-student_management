const { createAdmin, getAdmin, getAllAdmin } = require("../controllers/admin.controllers"); 
const verifyToken = require("../middleware/verifyToken");

const router = require("express").Router();

router.route('/signup').post(createAdmin);
router.route('/login').post(getAdmin);
router.route('/getByAllAuthor').get(verifyToken,getAllAdmin);

module.exports = router;