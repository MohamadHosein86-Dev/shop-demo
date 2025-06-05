"use client";

import { Button } from "../ui/button";

interface PropsType {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ page, totalPages, onPageChange }: PropsType) {
  return (
    <div className="flex justify-center gap-4 mt-18">
      <Button variant="default" onClick={() => onPageChange(page - 1)} disabled={page === 1}>
        Previous
      </Button>
      <span className="px-4 font-semibold py-2">
        Page {page} of {totalPages}
      </span>
      <Button variant="default" onClick={() => onPageChange(page + 1)} disabled={page === totalPages}>
        Next
      </Button>
    </div>
  );
}
