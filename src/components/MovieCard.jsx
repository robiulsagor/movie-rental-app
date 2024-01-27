import { useContext, useState } from "react";
import { MdOutlineReceiptLong } from "react-icons/md";
import { toast } from "react-toastify";
import { MovieContext } from "../context/MovieContext";
import { TYPES } from "../reducers/CartReducer";
import { getImgUrl } from "../utils/getImgUrl";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

/* eslint-disable react/prop-types */
export default function MovieCard({ movie }) {
  const [detailsModal, setDetailsModal] = useState(false);

  const { state, dispatch } = useContext(MovieContext);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    const isExists = state.cartItems.filter((m) => m.title === movie.title);
    if (isExists.length > 0) {
      toast.error("This movie already exists in cart!");
      return;
    }

    dispatch({
      type: TYPES.ADD_TO_CART,
      payload: {
        id: Date.now(),
        ...movie,
      },
    });
    toast.success("Item added to cart");
  };

  return (
    <>
      {detailsModal && (
        <MovieDetailsModal
          movie={movie}
          onCloseModal={setDetailsModal}
          onAddToCart={handleAddToCart}
        />
      )}
      <div
        className="border dark:border-gray-700 p-4 rounded-lg"
        onClick={() => setDetailsModal(true)}
      >
        <img
          src={getImgUrl(movie.cover)}
          alt="movie cover"
          className="w-full h-[400px]"
        />

        <h3 className="mt-5 mb-1 text-lg font-bold">{movie.title} </h3>
        <span className="text-gray-500 text-sm">{movie.genre} </span>

        <Rating rating={movie.rating} />

        <button
          className="flex items-center justify-center gap-3 bg-primary w-full mt-4 p-2 rounded-lg text-black text-sm font-bold hover:opacity-90 transition-all "
          onClick={handleAddToCart}
        >
          <MdOutlineReceiptLong />
          $100 | Add to Cart
        </button>
      </div>
    </>
  );
}
