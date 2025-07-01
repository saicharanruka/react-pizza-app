import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalBill = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-700 p-6 uppercase text-stone-200">
      <p className="space-x-4 font-semibold text-stone-300">
        <span>
          {totalCartQuantity} {totalCartQuantity === 1 ? "pizza" : "pizzas"}
        </span>
        <span>{formatCurrency(totalBill)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
