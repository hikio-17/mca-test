import React from 'react';
import '../assets/styles/tabledetailtransaction.css'
import { TableDetailTransactionProps } from './../types/index';

const TableDetailTransaction: React.FC<TableDetailTransactionProps> = ({ detailTransaction }) => {
   return (
      <>
         {detailTransaction.StyleCode === 'BOSSE FANCY OH HOOD S.9' ? (<table>
            <thead>
               <tr>
                  <th rowSpan={2}>Operator</th>
                  <th colSpan={6}>Size</th>
                  <th rowSpan={2}>Total Qty</th>
                  <th rowSpan={2}>Destination</th>
               </tr>
               <tr>
                  <th>XS</th>
                  <th>S</th>
                  <th>M</th>
                  <th>L</th>
                  <th>XL</th>
                  <th>XXL</th>
               </tr>
            </thead>

            <tbody>
               {detailTransaction.detailTransaction.map((item) => (
                  <tr>
                     <td className="operator">{item.OperatorName}</td>
                     <td className={`size ${item.xs_total === 0 ? 'red' : ''}`}>{item.xs_total}</td>
                     <td className={`size ${item.s_total === 0 ? 'red' : ''}`}>{item.s_total}</td>
                     <td className={`size ${item.m_total === 0 ? 'red' : ''}`}>{item.m_total}</td>
                     <td className={`size ${item.l_total === 0 ? 'red' : ''}`}>{item.l_total}</td>
                     <td className={`size ${item.xl_total === 0 ? 'red' : ''}`}>{item.xl_total}</td>
                     <td className={`size ${item.xxl_total === 0 ? 'red' : ''}`}>{item.xxl_total}</td>
                     <td className="qty">{item.total_qtyoutput}</td>
                     <td className="destination">({item.DestinationCode}) {item.DestinationName}</td>
                  </tr>
               ))}
            </tbody>
         </table>) : (<table>
            <thead>
               <tr>
                  <th rowSpan={2}>Operator</th>
                  <th colSpan={11}>Size</th>
                  <th rowSpan={2}>Total Qty</th>
                  <th rowSpan={2}>Destination</th>
               </tr>
               <tr>
                  <th>92</th>
                  <th>98</th>
                  <th>104</th>
                  <th>110</th>
                  <th>116</th>
                  <th>122</th>
                  <th>128</th>
                  <th>134</th>
                  <th>140</th>
                  <th>146</th>
                  <th>152</th>
               </tr>
            </thead>

            <tbody>
               {detailTransaction.detailTransaction.map((item) => (
                  <tr>
                     <td className="operator">{item.OperatorName}</td>
                     <td className={`size ${item.size_92 === 0 ? 'red' : ''}`}>{item.size_92}</td>
                     <td className={`size ${item.size_98 === 0 ? 'red' : ''}`}>{item.size_98}</td>
                     <td className={`size ${item.size_104 === 0 ? 'red' : ''}`}>{item.size_104}</td>
                     <td className={`size ${item.size_110 === 0 ? 'red' : ''}`}>{item.size_110}</td>
                     <td className={`size ${item.size_116 === 0 ? 'red' : ''}`}>{item.size_116}</td>
                     <td className={`size ${item.size_122 === 0 ? 'red' : ''}`}>{item.size_122}</td>
                     <td className={`size ${item.size_128 === 0 ? 'red' : ''}`}>{item.size_128}</td>
                     <td className={`size ${item.size_134 === 0 ? 'red' : ''}`}>{item.size_134}</td>
                     <td className={`size ${item.size_140 === 0 ? 'red' : ''}`}>{item.size_140}</td>
                     <td className={`size ${item.size_146 === 0 ? 'red' : ''}`}>{item.size_146}</td>
                     <td className={`size ${item.size_152 === 0 ? 'red' : ''}`}>{item.size_152}</td>
                     <td className="qty">{item.total_qtyoutput}</td>
                     <td className="destination">({item.DestinationCode}) {item.DestinationName}</td>
                  </tr>
               ))}
            </tbody>
         </table>)}
      </>
   )
}

export default TableDetailTransaction