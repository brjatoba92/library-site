import React from "react";
import { FaFacebook, FaLinkedin, FaMobileAlt, FaLocationArrow, FaInstagram, FaWhatsapp } from "react-icons/fa";
import footerLogo from "../../assets/website/logo.png";

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
];

const CategoriasLinks = [
    {
        title: "Teologia Sistematica",
        link: "/#",
    },
    {
        title: "Exegese",
        link: "/#",
    },
    {
        title: "Comentarios Biblicos",
        link: "/#",
    },
    {
        title: "Bíblias",
        link: "/#",
    },
    {
        title: "Hinários",
        link: "/#",
    },
    {
        title: "Livros de Devocionais",
        link: "/#",
    },
    {
        title: "Livros de Teologia Prática",
        link: "/#",
    },
    {
        title: "Livros de Ética Cristã",
        link: "/#",
    },

    
]

const anoAtual = new Date().getFullYear();

const Footer = () => {
    return <div className="bg-gray-100 dark:bg-gray-950">
        <div className="container">
            <div className="grid md:grid-cols-3 py-5">
                {/* company details */}
                <div className="py-8 px-4">
                    <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                        Livraria Sola Fide
                    </h1>
                    <p>Uma livraria de qualidade{" "}</p>
                    <br />
                    {/* social media links */}
                    <div className="flex items-center gap-3">
                        <FaLocationArrow />
                        <p>Maceió, Brasil</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaMobileAlt />
                        <p>(82) 9 3425-9755</p>
                    </div>
                    <div className="flex items-center gap-3 mt-6">
                        <a href="#">
                            <FaFacebook className="text-3xl" />
                        </a>
                        <a href="#">
                            <FaInstagram className="text-3xl" />
                        </a>
                        <a href="#">
                            <FaWhatsapp className="text-3xl" />
                        </a>
                        <a href="#">
                            <FaLinkedin className="text-3xl" />
                        </a>
                        
                    </div>
                </div>
                {/* Link Section */}
                <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                    <div>
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-bold sm:text-left text-justify mb-3 ">
                                Institucional
                            </h1>
                            <ul className="flex flex-col gap-3">
                                {
                                   FooterLinks.map((data)=>(
                                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                                        <span>&#11162;</span>
                                        <span>{data.title}</span>
                                    </li>
                                   )) 
                                }
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-bold sm:text-left text-justify mb-3 ">
                                Categorias
                            </h1>
                            <ul className="flex flex-col gap-3">
                                {
                                   CategoriasLinks.map((data)=>(
                                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                                        <span>&#11162;</span>
                                        <span>{data.title}</span>
                                    </li>
                                   )) 
                                }
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-bold sm:text-left text-justify mb-3 ">
                                Atendimento
                            </h1>
                            <ul className="flex flex-col gap-3">
                                <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                                    <span>&#11162;</span>
                                    <span>FAQ</span>
                                </li>
                                <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                                    <span>&#11162;</span>
                                    <span>Suporte</span>
                                </li>
                                <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                                    <span>&#11162;</span>
                                    <span>Política de Privacidade</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* copyright section */}
            <div className="">
                <div className="border-t-2 border-gray-300/50">
                    <p className="text-center py-10">
                        Copyright &copy; {anoAtual} Todos os Direitos Reservados || Desenvolvido  <span className="text-red-600">❤</span> por <span className="text-primary">Jatoba Dev Technologies</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
};

export default Footer;