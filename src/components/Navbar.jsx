import React from "react";
import Logo from "../assets/website/logo.png";
import { FaCaretDown} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
    {
        id: 1,
        name: "Promoção do Dia",
        link: "/#",

    },
    {
        id: 2,
        name: "Mais vendidos",
        link: "/#",
    },
    {
        id: 3,
        name: "Novidades",
        link: "/#",
    },
    {
        id: 4,
        name: "Kit Reformado ",
        link: "/#",
    }
    
]

const BibliasDropdownLinks = [
    {
        name: "NAA",
        link: "/#",
    },
    {
        name: "ARA",
        link: "/#",
    },
    {
        name: "NVI",
        link: "/#",
    }
]

const CombosDropdownLinks = [
    {
        name: "Spurgeon",
        link: "/#",
    },
    {
        name: "Bavinck",
        link: "/#",
    },
    {
        name: "Matthew Henry",
        link: "/#",
    }
]

const CategoriesDropdownLinks = [
    {
        name: "Sistematica",
        link: "/#",
    },
    {
        name: "Exegese",
        link: "/#",
    },
    {
        name: "Comentarios",
        link: "/#",
    },
    {
        name: "Devocionais",
        link: "/#",
    },
    {
        name: "Hinos",
        link: "/#",
    },
    {
        name: "Infantis",
        link: "/#",
    },
    {
        name: "Literatura Reformada",
        link: "/#",
    }
]


const Navbar = ({ handleOrderPopup }) => {
    return (
        <div className="shadow-lg bg-white dark:bg-gray-900 dark:text-white duration-200">
            <div className="container py-3 sm:py-0">
                <div className="flex justify-between items-center">
                    <div>
                        <a href={"/#"} className="font-bold text-2xl sm:text-3xl flex gap-2">
                            <img src={Logo} alt="" className="w-10"/>
                            Livraria Sola Fide
                        </a>
                    </div>
                    <div className="flex items-center justify-beetwen gap-4 ">
                        <div>
                            <DarkMode />
                        </div>
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
                           {/* dropdown section */}
                           <li className="group relative cursor-pointer">
                            <a href="/#" className="flex h-[72px] items-center gap[2px]">
                                Combos
                                <span>
                                    <FaCaretDown className="transition duration-200 group-hover:rotate-180" />
                                </span>
                            </a>
                            {/* dropdown link section */}
                            <div className="absolute -left-9 z-[10] hidden group-hover:block text-black bg-white p-2 shadow-md w-[150px]">
                                <ul>
                                    {CombosDropdownLinks.map((data) => (
                                        <li key={data.id}>
                                            <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20 shadow-md">
                                                {data.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            </li>
                           <li className="group relative cursor-pointer">
                            <a href="/#" className="flex h-[72px] items-center gap[2px]">
                                Biblias
                                <span>
                                    <FaCaretDown className="transition duration-200 group-hover:rotate-180" />
                                </span>
                            </a>
                            {/* dropdown link section */}
                            <div className="absolute -left-9 z-[10] hidden group-hover:block text-black bg-white p-2 shadow-md w-[150px]">
                                <ul>
                                    {BibliasDropdownLinks.map((data) => (
                                        <li key={data.id}>
                                            <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20 shadow-md">
                                                {data.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            </li>
                            <li className="group relative cursor-pointer">
                            <a href="/#" className="flex h-[72px] items-center gap[2px]">
                                Categorias
                                <span>
                                    <FaCaretDown className="transition duration-200 group-hover:rotate-180" />
                                </span>
                            </a>
                            {/* dropdown link section */}
                            <div className="absolute -left-9 z-[10] hidden group-hover:block text-black bg-white p-2 shadow-md w-[150px]">
                                <ul>
                                    {CategoriesDropdownLinks.map((data) => (
                                        <li key={data.id}>
                                            <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20 shadow-md">
                                                {data.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            </li>
                        </ul>
                        <button 
                            onClick={() => handleOrderPopup()}
                            className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full flex items-center gap-3 hover:scale-105 duration-300" 
                        >
                            Compras
                            <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;