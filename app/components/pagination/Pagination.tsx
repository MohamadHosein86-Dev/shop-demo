"use client";

interface PropsType {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ page, totalPages, onPageChange }: PropsType) {
  return (
    <div className="flex justify-center gap-4 mt-18">
      <button onClick={() => onPageChange(page - 1)} disabled={page === 1} className="px-4 py-2  cursor-pointer bg-blue-500  text-white rounded disabled:opacity-50">
        Previous
      </button>
      <span className="px-4 font-semibold py-2">
        Page {page} of {totalPages}
      </span>
      <button onClick={() => onPageChange(page + 1)} disabled={page === totalPages} className="px-4 py-2 cursor-pointer bg-blue-500   text-white rounded disabled:opacity-50">
        Next
      </button>
    </div>
  );
}
