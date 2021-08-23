import { motion } from 'framer-motion'
import { useEffect } from 'react'


export default function Loading({ color }) {

    useEffect(() => {
        document.querySelector("body").style.background = color
    }, [color])
    return (


        <motion.div
            className="roboto flex justify-center items-center h-screen bg-black background-grain "
            exit={{ y: "-100vh" }}
            transition={{
                duration: 0.8,
                ease: [0.6, 0.01, -0.05, 0.9],
                delay: 1
            }}
        >
            <div>
                <div className="overflow-hidden">
                    <motion.div
                        className="text-9xl"
                        initial={{ x: -200 }}
                        animate={{ x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 2,
                            ease: [0.6, 0.01, -0.05, 0.9],

                        }}
                    >
                        F
                    </motion.div>
                </div>
                <div className="overflow-hidden">
                    <motion.div
                        className="text-9xl"
                        initial={{ x: 200 }}
                        animate={{ x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, ease: [0.6, 0.01, -0.05, 0.9] }}
                    >
                        A
                    </motion.div>
                </div>
                <div className="overflow-hidden">
                    <motion.div
                        className="text-9xl"
                        initial={{ x: -200 }}
                        animate={{ x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, ease: [0.6, 0.01, -0.05, 0.9] }}
                    >
                        R
                    </motion.div>
                </div>


            </div>
        </motion.div >
    )
}