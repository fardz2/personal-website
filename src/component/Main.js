import React, { useEffect } from 'react'
import img1 from '../asset/img/img-1.jpg'
import Side from './Side'
import Nav from './Nav'
import { motion } from 'framer-motion'
import Slide from './Slide'




export default function Main({ color }) {

    useEffect(() => {
        document.querySelector("body").style.background = "#1d1d1d"
    }, [])

    return (



        <motion.div className=" relative h-screen overflow-hidden bg-main"
            exit={{ backgroundColor: "white" }}
            transition={{ delay: 0.299 }}
        >

            <Nav color={color} />
            <Side color={color} />
            <Slide />
            <motion.div
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.14, 0.74, 0.92, 0.33], delay: 0.095 }}
            >

                <div className="flex flex-1 flex-col justify-center items-center relative  uppercase h-screen ">
                    <div className="z-20">
                        <div className="overflow-hidden ">
                            <motion.div
                                className="roboto  md:text-8xl text-5xl text-center  tracking-widest "
                                initial={{ y: 85 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9], delay: 0.4 }}
                            >
                                I'm
                            </motion.div>

                        </div>
                        <div className="overflow-hidden ">
                            <motion.div className="roboto md:text-9xl text-6xl text-center font-bold tracking-widest"
                                initial={{ y: 115 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1.6, ease: [0.6, 0.01, -0.05, 0.9], delay: 0.7 }}
                            >

                                web developer
                            </motion.div>
                        </div>
                    </div>


                </div>
                <motion.div
                    className="  flex flex-1 justify-center items-center absolute  inset-0 z-10  "

                >
                    <div className="relative p-20  ">
                        <motion.div
                            initial={{
                                y: -200,
                                opacity: 0
                            }}
                            animate={{
                                y: 0,
                                opacity: 1
                            }}
                            transition={{
                                duration: 1.8
                                , ease: [0.6, 0.01, -0.05, 0.9],


                            }}
                        >
                            <motion.img
                                className=" w-52 h-80 filter grayscale  brightness-50 md:h-3/6 md:w-custom z-20"

                                src={img1} alt="" />
                        </motion.div>

                        <motion.p
                            className=" absolute md:top-36 md:right-0 top-28 right-6 text-lg md:text-4xl  text-3xl tracking-wider"
                            initial={{ rotate: 90, x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                duration: 1.7
                                , ease: [0.6, 0.01, -0.05, 0.9],
                                delay: 1


                            }}

                        >Muhammad Faridz</motion.p>


                    </div>


                </motion.div>
            </motion.div>
        </motion.div>





    )
}
