import { Outlet } from "react-router-dom"


export const MainLayaout = () => {
  return (
    <>
    <h2>Header</h2>
    <Outlet/>
    <h2>Footer</h2>
    </>
  )
}
