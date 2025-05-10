import React from "react";
import Logo from "../assets/website/logo.png";

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#",

    },
    {
        id: 2,
        name: "Best Seller",
        link: "/#",
    },
    {
        id: 3,
        name: "About",
        link: "/#",
    },
    {
        id: 4,
        name: "Contact",
        link: "/#",
    }
]

const Navbar = () => {
    return (
        <div>
            <div className="container py-3 sm:py-0">
                <div className="flex justify-between items-center">
                    <div>
                        <a href={"#"} className="font-bold text-2xl sm:text-3xl flex gap-2">
                            <img src={Logo} alt="" className="w-10"/>
                            Books
                        </a>
                        
                    </div>
                    <div>
                        <ul className="items-center gap-4 hidden sm:flex">
                           {Menu.map((menu) => (
                            <li key={menu.id}>
                                <a 
                                    href={menu.link} 
                                    className="inline-block py-4 px-4 hover:text-primary duration-200"
                                >
                                    {menu.name}
                                </a>
                            </li>
                           ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;