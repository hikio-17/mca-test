/* eslint-disable consistent-return */
const db = require('../db');

const getSummarySewing = async (req, res) => {
  const sewingSummary = await db('lygsewingoutput')
    .select(db.raw("DATE_FORMAT(TrnDate, '%Y-%m-%d') as Date"), 'StyleCode as Style')
    .countDistinct('SizeName as TotalSize')
    .sum('QtyOutput as TotalOutput')
    .groupBy('TrnDate', 'StyleCode');

  res.status(200).json({
    status: 'success',
    data: {
      sewingSummary,
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

  if (StyleCode === 'BOSSE FANCY OH HOOD S.9') {
    const detailTransaction = await db('lygsewingoutput')
      .select('lygsewingoutput.OperatorName', 'lygsewingoutput.DestinationCode', 'lygdestination.DestinationName')
      .sum({ xs_total: db.raw("CASE WHEN sizeName = 'XS' THEN QtyOutput ELSE 0 END") })
      .sum({ s_total: db.raw("CASE WHEN sizeName = 'S' THEN QtyOutput ELSE 0 END") })
      .sum({ m_total: db.raw("CASE WHEN sizeName = 'M' THEN QtyOutput ELSE 0 END") })
      .sum({ l_total: db.raw("CASE WHEN sizeName = 'L' THEN QtyOutput ELSE 0 END") })
      .sum({ xl_total: db.raw("CASE WHEN sizeName = 'XL' THEN QtyOutput ELSE 0 END") })
      .sum({ xxl_total: db.raw("CASE WHEN sizeName = 'XXL' THEN QtyOutput ELSE 0 END") })
      .sum('QtyOutput as total_qtyoutput')
      .groupBy('OperatorName', 'destinationCode')
      .leftJoin('lygdestination', 'lygsewingoutput.DestinationCode', 'lygdestination.DestinationCode')
      .where({
        TrnDate,
        StyleCode,
      })
      .orderBy('OperatorName', 'desc');

    res.status(200).json({
      status: 'success',
      data: {
        StyleCode,
        detailTransaction,
      },
    });
  } else {
    const detailTransaction = await db('lygsewingoutput')
      .select('lygsewingoutput.OperatorName', 'lygsewingoutput.DestinationCode', 'lygdestination.DestinationName')
      .sum({ size_92: db.raw("CASE WHEN sizeName = '92' THEN QtyOutput ELSE 0 END") })
      .sum({ size_98: db.raw("CASE WHEN sizeName = '98' THEN QtyOutput ELSE 0 END") })
      .sum({ size_104: db.raw("CASE WHEN sizeName = '104' THEN QtyOutput ELSE 0 END") })
      .sum({ size_110: db.raw("CASE WHEN sizeName = '110' THEN QtyOutput ELSE 0 END") })
      .sum({ size_116: db.raw("CASE WHEN sizeName = '116' THEN QtyOutput ELSE 0 END") })
      .sum({ size_122: db.raw("CASE WHEN sizeName = '122' THEN QtyOutput ELSE 0 END") })
      .sum({ size_128: db.raw("CASE WHEN sizeName = '128' THEN QtyOutput ELSE 0 END") })
      .sum({ size_134: db.raw("CASE WHEN sizeName = '134' THEN QtyOutput ELSE 0 END") })
      .sum({ size_140: db.raw("CASE WHEN sizeName = '140' THEN QtyOutput ELSE 0 END") })
      .sum({ size_146: db.raw("CASE WHEN sizeName = '146' THEN QtyOutput ELSE 0 END") })
      .sum({ size_152: db.raw("CASE WHEN sizeName = '152' THEN QtyOutput ELSE 0 END") })
      .sum('QtyOutput as total_qtyoutput')
      .groupBy('OperatorName', 'destinationCode')
      .leftJoin('lygdestination', 'lygsewingoutput.DestinationCode', 'lygdestination.DestinationCode')
      .where({
        TrnDate,
        StyleCode,
      })
      .orderBy('OperatorName', 'desc');

    res.status(200).json({
      status: 'success',
      data: {
        StyleCode,
        detailTransaction,
      },
    });
  }
};

module.exports = {
  getSummarySewing,
  getDetailSewingTransaction,
};
