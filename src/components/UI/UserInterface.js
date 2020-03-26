import React, { useContext } from "react"
import Header from "./Header"
import "./UI.scss"
import Intro from "./Intro"
import Scene2 from "./Scene2"
import Scene3 from "./Scene3"
import { Context } from "../../Context"

const UserInterface = () => {
  const { activeScene } = useContext(Context)
  // console.log(context)
  return (
    <div className="ui">
      <Header />
      <div className="main_container">
        {activeScene === 0 && <Intro />}
        {activeScene === 1 && <Scene2 />}
        {activeScene === 2 && <Scene3 />}
      </div>
    </div>
  )
}

export default UserInterface
