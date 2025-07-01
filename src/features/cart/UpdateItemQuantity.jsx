import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "./cartSlice";

function UpdateItemQuantity({ pizzaId }) {
  const quantity = useSelector(getCurrentQuantityById(pizzaId));
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center gap-1">
      <Button onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
      {quantity}
      <Button onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</Button>
    </div>
  );
}

export default UpdateItemQuantity;
