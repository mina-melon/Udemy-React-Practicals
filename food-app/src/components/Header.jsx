import { use } from "react";
import { CartContext } from "../store/CartContext";
import Button from "./UI/Button";

export default function Header() {
    const { items } = use(CartContext);
    const totalItems = items.reduce((total, item) => {
        return total + item.quantity
    }, 0)
    return (
        <header id="main-header">
            <div id="title">
                <img src="/logo.jpg" alt="ReactFood Restaurant Logo" />
                <h1>FoodOrder</h1>
            </div>
            <nav>
                {/* Text button styled by #main-header button / .text-button */}
                <Button textOnly >Cart ({totalItems})</Button>
            </nav>
        </header>
    )
}