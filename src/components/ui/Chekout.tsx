// import React, { useEffect } from "react";/
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
// import { useNavigate } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../redux/features/cart/cartSlice";
import { usePlaceOrderMutation } from "../../redux/features/order/Order.Api";
import { toast } from "sonner";
import PhForm from "../form/PhForm";
import PhSelect from "../form/PhSelect";
import { useAppSelector } from "../../redux/hooks";
import { Button } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
// type TUSer = {
//   email: string;
//   exp: number;
//   iat: number;
//   role: string;
//   userId: string;
// };
const Checkout = () => {
  //   const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fetching cart data from Redux store
  const cart = useSelector((state: RootState) => state.cart.items);

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };
  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const [placeOrder, { isSuccess, data }] = usePlaceOrderMutation();
  console.log(cart);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user: any = useAppSelector((state) => state.auth.user);
  console.log(user);
  const info = cart.map(({ name, id }) => ({
    value: id,
    label: name,
  }));
  const onSubmit: SubmitHandler<FieldValues> = async (info) => {
    // Find the item in the cart based on the product ID
    const item = cart.find((item) => item.id === info.product);

    // If item is not found or quantity is undefined, show an error or handle the case
    if (!item || item.quantity <= 0) {
      toast.error("Invalid product or quantity", { id: "cart" });
      return;
    }

    // Prepare order data
    const orderData = {
      email: user!.email,
      product: info.product,
      quantity: item.quantity, // Use the found item's quantity
    };

    try {
      // Call placeOrder with the orderData
      await placeOrder(orderData);

      toast.success("Ordered successful");

      // Wait for success state (or use useEffect to handle this change elsewhere)
      if (isSuccess) {
        toast.success("Order successful make sure the payment", { id: "cart" });
        console.log(data);

        // Delay the redirection slightly to ensure the success message is shown
        setTimeout(() => {
          window.location.href = data.data; // Redirect to the success URL
        }, 1000); // 1-second delay, adjust based on need
      }
    } catch (error) {
      // Handle error during the order process
      toast.error("Order failed. Please try again later.", { id: "cart" });
      console.error("Error placing order:", error);
    }
  };

  // Handle Checkout
  //   const handleCheckout = async (data) => {
  //     console.log(data);
  //     // const;
  //     // const orderData = {};
  //     // if (isLoading) {
  //     //   toast.loading("Processing....");
  //     // }
  //     // if (!cart.length) return alert("Your cart is empty!");
  //     // alert("Order placed successfully! ✅");
  //     // navigate("/");
  //   };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Checkout
        </h1>

        {/* Cart Summary */}
        <div className="space-y-4">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="flex items-center border-b pb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-contain rounded-lg border mr-4"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-medium">{item.name}</h2>
                  <p className="text-green-500 font-semibold">${item.price}</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center mt-2 space-x-3">
                    <button
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      className="px-3 py-1 bg-red-500 text-white rounded disabled:bg-gray-400"
                      disabled={item.quantity === 1}
                    >
                      −
                    </button>
                    <span className="text-lg font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => dispatch(increaseQuantity(item.id))}
                      className="px-3 py-1 bg-green-500 text-white rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="px-3 py-1 bg-green-500 text-white rounded"
                    >
                      remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">Your cart is empty 🛒</p>
          )}
        </div>

        {/* Total Price */}
        <div className="flex justify-between items-center mt-6 text-lg font-semibold">
          <span>Total:</span>
          <span className="text-green-500">${totalPrice.toFixed(2)}</span>
        </div>

        {/* Checkout Form */}
        <PhForm onSubmit={onSubmit}>
          <div className="mt-6 space-y-4">
            <PhSelect
              options={info}
              name="product"
              label="Product want to payment"
              //   placeholder="Full Name"
            />
            {/* <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="text"
              placeholder="Shipping Address"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            /> */}
          </div>
          <Button htmlType="submit" color="blue">
            Place Order
          </Button>
          <Button htmlType="submit" variant="filled" color="green">
            make payment
          </Button>
        </PhForm>

        {/* Checkout Button */}
      </div>
    </div>
  );
};

export default Checkout;
