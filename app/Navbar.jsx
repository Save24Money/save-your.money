import Image from "next/image";
import transparentLogo from '../public/logo_transparent.png';

export default function Navbar() {

    return (
        <div className="sticky top-0 w-screen h-12 bg-gradient-to-b from-brand-500 to-brand-300 md:px-2 px-8 select-none">
            <input type="checkbox" id="navbar-check" className="hidden peer" />
            <label htmlFor="navbar-check" className="">
                <svg className="hidden float-right h-6 my-3 mx-3 cursor-pointer fill-primary-900 md:inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
            </label>
            <Image src={transparentLogo} width={130} height={130} alt="save your money" className="hidden  md:inline-block" />
            <h1 className="inline-block text-xl py-2 font-medium md:hidden">save your money</h1>
            <ul className="transition-all float-right list-none md:fixed md:w-screen md:float-none md:h-12 md:bg-brand-300 md:top-[-50px] md:left-0 md:text-center peer-checked:md:top-[48px]">
                <li className=" cursor-pointer transition-all text-center inline-block m-2 rounded w-14 hover:">
                    <a href="#" className="leading-8 px-1">Kurse</a>
                </li>
                <li className=" cursor-pointer transition-all text-center inline-block m-2 rounded -100 w-14 hover:">
                    <a href="#" className="leading-8 px-1">Bücher</a>
                </li>
            </ul>
        </div>
    )
}