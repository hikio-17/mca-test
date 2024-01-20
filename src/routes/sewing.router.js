const express = require('express');
const { getSummarySewing, getDetailSewingTransaction } = require('../controllers/sewing.controller');

const router = express.Router();

router.get('/summary/sewing', getSummarySewing);
router.get('/detail/sewing/transaction/:date/:style', getDetailSewingTransaction);

module.exports = router;
