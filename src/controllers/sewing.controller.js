const db = require('../db');

const getSummarySewing = async (req, res) => {
  const results = await db('lygsewingoutput')
    .select('TrnDate as Date', 'StyleCode as Style')
    .countDistinct('SizeName as TotalSize')
    .sum('QtyOutput as TotalOutput')
    .groupBy('TrnDate', 'StyleCode');

  res.status(200).json({
    status: 'success',
    data: {
      results,
    },
  });
};

const getDetailSewingTransaction = async (req, res) => {
  const { TrnDate, StyleCode } = req.query;

  if (!TrnDate || !StyleCode) {
    return res.status(400).json({
      status: 'error',
      message: 'TrnDate and StyleCode are required parameters.',
    });
  }

  const results = await db('lygsewingoutput')
    .select('OperatorName', 'destinationCode')
    .sum({ xs_total: db.raw("CASE WHEN sizeName = 'XS' THEN QtyOutput ELSE 0 END") })
    .sum({ s_total: db.raw("CASE WHEN sizeName = 'S' THEN QtyOutput ELSE 0 END") })
    .sum({ m_total: db.raw("CASE WHEN sizeName = 'M' THEN QtyOutput ELSE 0 END") })
    .sum({ l_total: db.raw("CASE WHEN sizeName = 'L' THEN QtyOutput ELSE 0 END") })
    .sum({ xl_total: db.raw("CASE WHEN sizeName = 'XL' THEN QtyOutput ELSE 0 END") })
    .sum({ xxl_total: db.raw("CASE WHEN sizeName = 'XXL' THEN QtyOutput ELSE 0 END") })
    .sum('QtyOutput as total_qtyoutput')
    .groupBy('OperatorName', 'destinationCode')
    .where({
      TrnDate,
      StyleCode,
    })
    .orderBy('OperatorName', 'desc');

  res.status(200).json({
    status: 'success',
    data: {
      results,
    },
  });
};

module.exports = {
  getSummarySewing,
  getDetailSewingTransaction,
};
