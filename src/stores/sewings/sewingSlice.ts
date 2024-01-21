import { createSlice } from "@reduxjs/toolkit";

const sewingSlice = createSlice({
   name: 'sewingSummary',
   initialState: {
      sewingSummary: [],
      sewingDetailTransaction: null,
   },
   reducers: {
      getAllSewingSummary: (state, action) => {
         state.sewingSummary = action.payload.map((item) => ({
            ...item,
            detailView: false,
         }));
      },
      getDetailSewingTransaction: (state, action) => {
         const activefDetailView = state.sewingSummary.findIndex((item) => item.detailView === true);

         console.log(activefDetailView, 'dari toggle')

         if (activefDetailView === -1) {
            state.sewingDetailTransaction = null;
            return;
         } else {
            state.sewingDetailTransaction = action.payload;
         }
         
      },
      toggleSewingSummary: (state, action) => {
         state.sewingSummary = state.sewingSummary.map((item, i) => {
            if (i === action.payload) {

               return {
                  ...item,
                  detailView: !item.detailView,
               }
            }

            return {
               ...item,
               detailView: false,
            };
         })
      }
   },
});

export const { getAllSewingSummary, toggleSewingSummary, getDetailSewingTransaction } = sewingSlice.actions;
export default sewingSlice.reducer;