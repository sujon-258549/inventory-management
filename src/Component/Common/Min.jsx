import { Outlet } from "react-router-dom"
import Navber from "./Navber"
import Fooer from "./Fooer"


const Min = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Fooer></Fooer>
    </div>
  )
}

export default Min
