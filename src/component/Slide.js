import { motion } from "framer-motion"
export default function Slide() {
    return (
        <motion.div
            className="fixed inset-0  z-50 bg-gray-800	"
            initial={{ display: "none", y: "100vh" }}
            exit={{ display: "block", y: "-100vh" }}
            transition={{ duration: 0.8, ease: [0, 0.87, 1, 0.18] }}
        ></motion.div>
    )
}