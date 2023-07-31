//  export default function Pagination({ currentPage, itemsPerPage, totalItems, onPageChange }) {
//     const totalPages = Math.ceil(totalItems / itemsPerPage);
  
//     const handlePrevClick = () => {
//       if (currentPage > 1) {
//         onPageChange(currentPage - 1);
//       }
//     };
  
//     const handleNextClick = () => {
//       if (currentPage < totalPages) {
//         onPageChange(currentPage + 1);
//       }
//     };
  
//     return (
//       <nav aria-label="Pagination">
//         <ul className="flex items-center space-x-4">
//           <li>
//             <button
//               onClick={handlePrevClick}
//               disabled={currentPage === 1}
//               className={`px-2 py-1 rounded ${
//                 currentPage === 1 ? 'bg-gray-300 cursor-default' : 'bg-blue-600 hover:bg-blue-700'
//               } text-white`}
//             >
//               Previous
//             </button>
//           </li>
//           <li>
//             <span className="text-gray-600">
//               Page {currentPage} of {totalPages}
//             </span>
//           </li>
//           <li>
//             <button
//               onClick={handleNextClick}
//               disabled={currentPage === totalPages}
//               className={`px-2 py-1 rounded ${
//                 currentPage === totalPages ? 'bg-gray-300 cursor-default' : 'bg-blue-600 hover:bg-blue-700'
//               } text-white`}
//             >
//               Next
//             </button>
//           </li>
//         </ul>
//       </nav>
//     );
//   }
 
  