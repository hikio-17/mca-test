export interface TransactionDetail {
   size_92: number;
   size_98: number;
   size_104: number;
   size_110: number;
   size_116: number;
   size_122: number;
   size_128: number;
   size_134: number;
   size_140: number;
   size_146: number;
   size_152: number;
   OperatorName: string;
   DestinationCode: string;
   DestinationName: string;
   xs_total: number;
   s_total: number;
   m_total: number;
   l_total: number;
   xl_total: number;
   xxl_total: number;
   total_qtyoutput: number;
}

export interface DetailTransactionProps {
   StyleCode: string;
   Date: string;
   detailTransaction: TransactionDetail[];
}

export interface SewingSummary {
   Date: string;
   Style: string;
   TotalSize: number;
   TotalOutput: number;
   detailView: boolean;
}

export interface StatesSewing {
   sewingSummary: SewingSummary[];
   sewingDetailTransaction: DetailTransactionProps
}

export interface States {
   sewing: StatesSewing
}

export interface TableSummaryProps {
   sewingSummary: SewingSummary[];
   onToggle: (item: SewingSummary, i: number) => void;
}

export interface TableDetailTransactionProps {
   detailTransaction: DetailTransactionProps;
}
