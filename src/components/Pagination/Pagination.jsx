/* eslint-disable react/prop-types */
import s from "./Pagination.module.scss";

export const Pagination = ({
  totalCards,
  cardsPerPage,
  curentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const arrPagination = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
      <ul className={s.pagination}>
        {arrPagination.map((page) => (
          <li
            key={page}
            className={s.paginationItem}
            onClick={() => handlePageChange(page)}
          >
            <a href="#" className={s.paginationLink}>
              {page}
            </a>
          </li>
        ))}
      </ul>
      <button
        className={s.next}
        disabled={curentPage === totalPages}
        onClick={() => handlePageChange(curentPage + 1)}
      >
        {"-->"}
      </button>
    </section>
  );
};
