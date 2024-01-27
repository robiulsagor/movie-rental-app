/* eslint-disable react/prop-types */
import { MdOutlineReceiptLong } from "react-icons/md";
import { getImgUrl } from "../utils/getImgUrl";

export default function MovieDetailsModal({
  movie,
  onCloseModal,
  onAddToCart,
}) {
  return (
    <>
      <div
        className="fixed w-full h-screen top-0 left-0 bg-black/80 z-30  backdrop-blur-sm"
        onClick={() => onCloseModal(false)}
      />
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  border rounded-lg z-30
      sm:grid sm:grid-cols-[2fr_1fr] gap-4 overflow-hidden bg-white dark:bg-body w-[90%] md:w-[80%] lg:w-[60%]"
      >
        <img
          src={getImgUrl(movie.cover)}
          className="sm:order-2 w-full object-cover h-full max-sm:max-h-[300px]"
        />
        <div className="p-2 md:p-5 lg:p-7">
          <h1 className="sm:text-lg md:text-3xl lg:text-5xl font-bold mb-1 md:mb-2">
            {movie.title}{" "}
          </h1>
          <span className="text-gray-600 text-sm mb-1 md:mb-2 lg:mb-4 inline-block">
            {movie.genre}
          </span>
          <p className="text-sm md:text-base">{movie.description}</p>

          <div className="flex items-center flex-col gap-1 mt-2 md:mt-4 lg:mt-8 md:flex-row">
            <button
              className="flex items-center justify-center gap-3  bg-primary w-full  p-2 rounded-lg text-black text-sm font-bold hover:opacity-90 transition-all "
              onClick={onAddToCart}
            >
              <MdOutlineReceiptLong />
              $100 | Add to Cart
            </button>{" "}
            <button
              className="flex items-center justify-center gap-3 border text-white w-full  p-2 rounded-lg  text-sm font-bold hover:opacity-90 transition-all "
              onClick={() => onCloseModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
