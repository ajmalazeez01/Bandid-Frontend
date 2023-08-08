import React from "react";

const Pagination = ({ currentPage, totalPages, handlePrevious, handleNext }) => {
  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-blue-500 text-white rounded-md font-semibold mr-2"
      >
        Previous
      </button>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-blue-500 text-white rounded-md font-semibold ml-2"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
