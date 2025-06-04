import { Fragment } from "react";

interface PropsType {
  totalPages: number;
  setPage: (x: number) => void;
  page: number;
}
export default function Pagination({ totalPages, setPage, page }: PropsType) {
  return (
    <Fragment>
      <div className=" mx-auto flex justify-center mt-[2rem] ">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button key={num} onClick={() => setPage(num)} className={`px-3 py-1 mx-1 border rounded ${num === page ? "bg-blue-500 text-white" : "bg-white"}`}>
            {num}
          </button>
        ))}
      </div>
    </Fragment>
  );
}
