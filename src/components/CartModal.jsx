/* eslint-disable react/prop-types */
import { useContext } from "react";
import { IoTrashBinOutline } from "react-icons/io5";
import { MdShoppingCartCheckout } from "react-icons/md";
import { toast } from "react-toastify";
import { MovieContext } from "../context/MovieContext";
import { TYPES } from "../reducers/CartReducer";
import { getImgUrl } from "../utils/getImgUrl";

export default function CartModal({ onCloseModal }) {
  const { state, dispatch } = useContext(MovieContext);

  const handleDeleteItem = (cartId) => {
    dispatch({
      type: TYPES.DELETE_FROM_CART,
      payload: {
        cartId,
      },
    });

    toast.success("Movie deleted successfully the the cart! ");
  };

  return (
    <>
      <div
        className="fixed w-full h-screen top-0 left-0 bg-black/80 z-30  backdrop-blur-sm"
        onClick={onCloseModal}
      />
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  border rounded-lg z-30 
    w-[90%] sm:w-[80%] md:w-[60%]  xl:w-[50%] md:p-7 bg-body"
      >
        <h2 className="text-3xl font-bold mb-10 text-white">Your Carts</h2>

        <div className=" max-h-[450px] overflow-auto pr-1">
          {state.cartItems.length > 0 ? (
            state.cartItems.map((cart) => {
              return (
                <div
                  key={cart.id}
                  className="flex items-center justify-between mb-10"
                >
                  <div className="flex items-center gap-5">
                    <img
                      src={getImgUrl(cart.cover)}
                      alt="cart pic"
                      width={50}
                      height={50}
                    />
                    <div>
                      <h3 className="text-xl font-bold">{cart.title} </h3>
                      <span className="text-base text-gray-600 block">
                        {cart.genre}
                      </span>
                      <span>${cart.price}</span>
                    </div>
                  </div>
                  <button
                    className="flex items-center gap-3 bg-[#d42967] py-2 px-3 rounded-lg    "
                    onClick={() => handleDeleteItem(cart.id)}
                  >
                    <IoTrashBinOutline /> Remove
                  </button>
                </div>
              );
            })
          ) : (
            <h2 className="text-white ">No Items in Cart</h2>
          )}
        </div>

        {/* checkout and close modal button */}
        <div className="flex items-center justify-end gap-4">
          <button
            className="flex items-center gap-3 bg-primary px-4 py-2 rounded-lg text-black disabled:cursor-not-allowed disabled:opacity-70"
            disabled={state.cartItems.length === 0}
          >
            <MdShoppingCartCheckout /> Checkout
          </button>
          <button
            className="border px-4 py-2 rounded-lg text-white "
            onClick={onCloseModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
