import {Link} from "react-router-dom"
import { NavMenu } from "../styled"
import Logo from "../assets/logo_cp.png"

export default function Menu(){

    return(
        <>
            <NavMenu>
                <img src={Logo} alt="" />
                <div className="menu">
                    <Link to='/'>HOME</Link>
                    <Link to='/produtos'>PRODUTOS</Link>
                    <Link to='/sobre'>SOBRE</Link>
                </div>
            </NavMenu>
        </>
    )
}