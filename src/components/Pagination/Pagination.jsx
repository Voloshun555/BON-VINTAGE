/* eslint-disable react/prop-types */
import s from "./Pagination.module.scss";

export const Pagination = ({
  totalCards,
  cardsPerPage,
  curentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const visibleCount = 12;

  let startPage = Math.max(1, curentPage - Math.floor(visibleCount / 2));
  let endPage = startPage + visibleCount - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - visibleCount + 1);
  }

  const visiblePages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className={s.container}>
      <button
        className={s.prev}
        disabled={curentPage === 1}
        onClick={() => handlePageChange(curentPage - 1)}
      >
        &lt;--
      </button>
      {startPage > 2 && (
        <div className={s.prevContainer}>
          <button
            className={s.prev}
            disabled={curentPage === 1}
            onClick={() => handlePageChange(1)}
          >
            1
          </button>
          <button
            className={s.prev}
            onClick={() => handlePageChange(startPage - 1)}
          >
            ...
          </button>
        </div>
      )}
      <ul className={s.pagination}>
        {visiblePages.map((page) => (
          <li
            key={page}
            className={`${s.paginationItem} ${
              curentPage === page ? s.isActive : ""
            }`}
            onClick={() => handlePageChange(page)}
          >
            <a href="#" className={s.paginationLink}>
              {page}
            </a>
          </li>
        ))}
      </ul>

      {endPage < totalPages && (
        <div className={s.prevContainer}>
          <button
            className={s.next}
            onClick={() => handlePageChange(endPage + 1)}
          >
            ...
          </button>
          <button
            className={s.next}
            disabled={curentPage === totalPages}
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </button>
        </div>
      )}
      <button
        className={s.next}
        disabled={curentPage === totalPages}
        onClick={() => handlePageChange(curentPage + 1)}
      >
        --&gt;
      </button>
    </section>
  );
};