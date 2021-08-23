import { useEffect } from "react"
import { motion } from "framer-motion"
import Side from './Side'
import Nav from './Nav'
import Slide from "./Slide"
export default function About({ color }) {

    useEffect(() => {
        document.querySelector("body").style.background = "white"
    }, [])
    return (
        <motion.div
            className={`text-black bg-white h-screen `}
            exit={{ backgroundColor: "#1d1d1d" }}
            transition={{ duration: 0.1, ease: [0.14, 0.74, 0.92, 0.33], delay: 0.20 }}
        >
            <Nav color={color} />
            <Side color={color} />
            <Slide />
            <motion.div
                className="relative h-full px-10 md:px-24 pt-24 z-30"
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.14, 0.74, 0.92, 0.33], delay: 0.095 }}
            >

                <div className="overflow-hidden" >
                    <motion.div
                        className="text-5xl md:text-7xl"
                        initial={{ y: 65 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }}
                    >
                        About
                    </motion.div>
                </div>
                <div className="overflow-hidden absolute left-24 top-32 md:left-44 z-40 ">
                    <motion.div className="text-6xl md:text-8xl font-bold"
                        initial={{ y: 85 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9], delay: .3 }}
                    >
                        ME
                    </motion.div>
                </div>
                <motion.div
                    className="bg-white text-4xl pl-5 pr-5 md:pl-40 py-16 relative z-10 "
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2, ease: [0.6, 0.01, -0.05, 0.9], delay: .4 }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9], delay: 1 }}
                    >
                        <div>
                            Hi, My name is Muhammad Faridz
                        </div>
                        <div>
                            I'm full stack Web Developer from Indonesia
                        </div>
                        <br />
                        <div>
                            Contact
                        </div>
                        <div className="text-3xl">
                            <a
                                href="mailto:faridzmuhamad679@gmail.com"
                                rel="noreferrer"
                                target="_blank"
                            >faridzmuhamad679@gmail.com</a>
                        </div>
                    </motion.div>

                </motion.div>
            </motion.div>

        </motion.div >
    )
}