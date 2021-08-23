import React, { useState, useEffect } from 'react'
import './App.css';
import Main from './component/Main'
import About from './component/About'
import Loading from './component/Loading'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedCursor from 'react-animated-cursor'
import {
  Switch,
  Route,
  useLocation,


} from "react-router-dom";

function App() {
  const [isLoading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)


  }, [])
  return (
    <>

      <AnimatedCursor
        innerSize={10}
        outerSize={20}
        color='219, 217, 217'
        outerAlpha={0.7}
        innerScale={1}
        outerScale={5}
        trailingSpeed={10}
      />
      <AnimatePresence exitBeforeEnter>

        {
          isLoading ?

            <motion.div key="loader">
              {
                location.pathname === '/' ? <Loading color="#1d1d1d" /> : <Loading color="white" />
              }

            </motion.div>

            :

            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route path="/about">
                  <About color="black" />
                </Route>
                <Route path="/" exact>
                  <Main color="white" />
                </Route>
              </Switch>
            </AnimatePresence>




        }
      </AnimatePresence>














    </>

  );
}

export default App;