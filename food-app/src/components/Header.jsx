export default function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src="/logo.jpg" alt="ReactFood Restaurant Logo" />
                <h1>FoodOrder</h1>
            </div>
            <nav>
                {/* Text button styled by #main-header button / .text-button */}
                <button className="text-button">Cart (0)</button>
            </nav>
        </header>
    )
}