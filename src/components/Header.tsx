'use client'
import {useState, useEffect} from 'react'
import {Menu, X, Terminal} from 'lucide-react'

const navLinks = [
    {name: 'Inicio', href: '#hero'},
    {name: 'Proyectos', href: '#proyectos'},
    {name: 'Habilidades', href: '#habilidades'},
    {name: 'Contacto', href: '#contacto'},
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header
            className={`flex justify-between items-center px-4 fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>

            {/* Logo */}
            <a href="#hero" className="flex items-center space-x-2 text-fuchsia-400 group">
                <Terminal size={28} className="group-hover:text-cyan-400 transition-colors"/>
                <span
                    className="font-bold text-xl text-white tracking-wider group-hover:text-cyan-400 transition-colors">
                    CRISTOBAL.DEV
                </span>
            </a>

            {/* Nav Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        {link.name}
                    </a>
                ))}
                <a
                    href="#contacto"
                    className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all transform hover:-translate-y-0.5"
                >
                    Contratar
                </a>
            </nav>

            {/* Botón Hamburguesa */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
                {isOpen ? <X size={28}/> : <Menu size={28}/>}
            </button>

            {/* Menú Móvil */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-gray-900 border-b border-slate-800 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-md w-full text-center"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>

        </header>
    )
}