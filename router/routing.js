const express = require('express')
const router = express.Router()

const contact = require('../pages/contact/contact');
const about = require('../pages/about/about');

router.use('/contact', contact)
router.use('/about', about)


module.exports = router;