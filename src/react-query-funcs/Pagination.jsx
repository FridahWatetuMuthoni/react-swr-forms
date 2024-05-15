import PropTypes from "prop-types";

function Pagination({ setPage, page, total }) {
  const total_pages = total / 10;

  const handlePreviosPage = () => {
    if (page === 1) {
      setPage(total_pages);
    } else {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (total_pages === page) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  };
  const handleSetPage = (current) => {
    setPage(current);
  };

  const in_active =
    "w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100";
  const active =
    "w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100";

  return (
    <div className="flex items-center py-5 w-4/5 mx-auto">
      <button
        onClick={handlePreviosPage}
        className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"
      >
        <svg
          width={9}
          fill="currentColor"
          height={8}
          className=""
          viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
        </svg>
      </button>
      {[...Array(5).keys()].map((current_page) => {
        return (
          <button
            className={page === current_page + 1 ? active : in_active}
            onClick={() => handleSetPage(current_page + 1)}
            key={current_page}
          >
            {current_page + 1}
          </button>
        );
      })}

      <button
        onClick={handleNextPage}
        className="w-full p-4 border-t border-b border-r text-base rounded-r-xl text-gray-600 bg-white hover:bg-gray-100"
      >
        <svg
          width={9}
          fill="currentColor"
          height={8}
          className=""
          viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
        </svg>
      </button>
    </div>
  );
}

Pagination.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  total: PropTypes.number,
};

export default Pagination;
