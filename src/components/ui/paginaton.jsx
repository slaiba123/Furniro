"use client"
import React, { useState } from "react";

const Pagination = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4 mt-4">
     

      
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-4 py-2 rounded ${
            currentPage === page ? "bg-yellow-600 text-white" : "bg-[#F9F1E7] hover:bg-yellow-600"
          }`}
        >
          {page}
        </button>
      ))}

      
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className={`px-4 py-2 rounded ${
          currentPage === totalPages ? " bg-yellow-600 cursor-not-allowed" : "bg-[#F9F1E7] hover:bg-yellow-600"
        }`}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
