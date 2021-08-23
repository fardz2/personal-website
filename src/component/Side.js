import { motion } from "framer-motion"
import Instagram from '../asset/logo/instagram.svg'


export default function Side({ color }) {

    return (
        <motion.div
            className="fixed flex flex-col justify-center items-center top-0 left-0 bottom-0 z-50"
            exit={{ opacity: 0 }}
        >
            <motion.div
                className={` roboto md:text-4xl  text-3xl tracking-wider text-${color}`}
                initial={{ x: -100, rotate: -90 }}
                animate={{ x: 0 }}
                transition={{ duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }}
            >
                FARDZ2
            </motion.div>

            <motion.div className="flex flex-col justify-center items-center mt-5 ">
                <motion.div
                    className={`bg-${color} w-0 h-0 origin-top`}
                    initial={{ height: 0, width: 1 }}
                    animate={{ scaleY: 65, height: 1 }}
                    transition={{ duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }}
                >

                </motion.div>

                <div className="mt-20 " >
                    <a
                        href="https://www.instagram.com/fardz2/"
                        rel="noreferrer"
                        target="_blank"

                    >

                        <motion.img
                            initial={{ opacity: 0, }}
                            animate={{ opacity: 1, }}
                            transition={{ duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9], delay: 0.5 }}
                            src={Instagram} alt="instagram" width="40" height="40" />
                    </a>


                </div>
            </motion.div>
        </motion.div>
    )
}