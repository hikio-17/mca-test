import { createSlice } from "@reduxjs/toolkit";
import { SewingSummary } from "../../types";

const sewingSlice = createSlice({
   name: 'sewingSummary',
   initialState: {
      sewingSummary: [] as SewingSummary[],
      sewingDetailTransaction: null,
   },
   reducers: {
      getAllSewingSummary: (state, action) => {
         state.sewingSummary = action.payload.map((item: SewingSummary) => ({
            ...item,
            detailView: false,
         }));
      },
      getDetailSewingTransaction: (state, action) => {
         const activefDetailView = state.sewingSummary.findIndex((item: SewingSummary) => item.detailView === true);

         if (activefDetailView === -1) {
            state.sewingDetailTransaction = null;
            return;
         } else {
            state.sewingDetailTransaction = action.payload;
         }
         
      },
      toggleSewingSummary: (state, action) => {
         state.sewingSummary = state.sewingSummary.map((item: SewingSummary, i: number) => {
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