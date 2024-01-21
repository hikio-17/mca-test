const BASE_URL = 'http://localhost:5000/api/v1';

const getAllSummarySewing = async () => {
   const response = await fetch(`${BASE_URL}/summary/sewing`);
   const responseJson = await response.json();

   const { data: { status, sewingSummary } } = responseJson;
   return sewingSummary;
}

const getDetailSewingTransaction = async (date, style) => {
   const response = await fetch(`${BASE_URL}/detail/sewing/transaction?TrnDate=${date}&StyleCode=${style}`);
   const responseJson = await response.json();

   const { data } = responseJson;

   return data;
}

export default {
   getAllSummarySewing,
   getDetailSewingTransaction,
}