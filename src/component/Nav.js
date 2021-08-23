import { Link, useLocation } from "react-router-dom";

export default function Nav({ color }) {
    const location = useLocation()
    return (
        <div className={`absolute top-10 right-5 md:right-8 z-50 text-${color} md:text-4xl  text-3xl tracking-wider`}>
            <div className={location.pathname === '/' ? 'font-bold' : ''}>
                <Link to="/">Home</Link>
            </div>
            <div className={location.pathname === '/about' ? 'font-bold' : ''}>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}