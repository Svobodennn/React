import React from 'react'
import { Link } from "react-router-dom";
import style from "./style.module.css"
import { Button, ButtonGroup } from '@chakra-ui/react'

function index() {
    return (
        <nav className={style.nav}>
            <div className={style.left}>
                <div className="logo">
                    <Link to="/">eCommerce</Link>
                </div>

                <ul className={style.menu}>
                    <li>
                        <Link to="/">Products</Link>
                    </li>
                </ul>

            </div>
            <div className={style.right}>
                <Link to="/signin">
                    <Button colorScheme='pink'>Login</Button>
                </Link>

                <Link to="/signup">
                    <Button colorScheme='pink'>Register</Button>
                </Link>

            </div>
        </nav>
    )
}

export default index
