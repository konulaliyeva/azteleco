"use client";
import ReactPaginate from "react-paginate";
import type { PaginationType } from "./pagination.type";
import { PaginationVM } from "./pagination.vm";
import { cn } from "@/core/utils/cn";
import { ArrowRightSVG } from "@public/vectors";
import { useTranslations } from "next-intl";

const Pagination = ({ total, perPage = 20, pageChange }: PaginationType) => {
    const { pageCount, currentPage, handlePageClick } = PaginationVM({
        total,
        perPage,
        pageChange,
    });
    const t = useTranslations("Pagination");

    return (
        <div className={`w-full ${total ? "flex justify-between items-center" : "hidden"}`}>
        {/* Left Arrow */}
        <div className="flex-shrink-0">
            <div
                onClick={() => currentPage > 1 && handlePageClick({ selected: currentPage - 2 })}
                className={cn(
                    "border border-gray-200 size-9 flex justify-center gap-x-2 w-full py-5 px-4 items-center rounded-3xl text-[#0C0C0C]",
                    currentPage === 1 && "text-gray-500 bg-gray-200 cursor-not-allowed"
                )}
            >
                <ArrowRightSVG className='rotate-180'/>
                 {t("prev")}
            </div>
        </div>
    
        {/* Pagination Numbers */}
        <div className="flex-grow flex justify-center">
            {total > perPage && (
                <ReactPaginate
                    containerClassName="flex items-center gap-x-2"
                    pageClassName="size-9 flex rounded-full border-none hover:bg-gray-50 text-14px600 items-center justify-center"
                    pageLinkClassName="py-2 px-4"
                    activeClassName="bg-gray-50 text-14px600 rounded-full pointer-events-none size-9 flex items-center justify-center border border-gray-200"
                    breakLabel="..."
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={2}
                    forcePage={currentPage - 1}
                    initialPage={currentPage - 1}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    previousLabel={null}
                    nextLabel={null}
                />
            )}
        </div>
    
        {/* Right Arrow */}
        <div className="flex-shrink-0">
            <div
                onClick={() => currentPage < pageCount && handlePageClick({ selected: currentPage })}
                className={cn(
                    "border border-gray-200 size-9  flex justify-center gap-x-2 w-full py-5 px-4 items-center rounded-3xl text-[#0C0C0C]",
                    currentPage === pageCount && "text-gray-500 bg-gray-200 cursor-not-allowed"
                )}
            >
                {t("next")}
                <ArrowRightSVG />
            </div>
        </div>
    </div>
    
    );

};

export default Pagination;
