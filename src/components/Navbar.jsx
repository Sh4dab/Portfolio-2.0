import { useState } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import useMediaQuery from "../hooks/useMediaQuery"
import menuIcon from "../assets/menu-icon.svg";
import closeIcon from "../assets/close-icon.svg";

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const LowercasePage = page.toLowerCase();
    return (
        <AnchorLink
            className={`${selectedPage === LowercasePage ? "" : ""}
            hover:text-yellow-500 transition duration-500 
            
            `}
            href={`#${LowercasePage}`}
            onClick={() => setSelectedPage(LowercasePage)}
        >
            {page}
        </AnchorLink>
    )
}

export default function Navbar({ isTopOfPage, selectedPage, setSelectedPage }) {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width:760px)");
    const navbarBg = isTopOfPage ? "bg-blend-normal" : "bg-opaque-black";
    return (
        <nav className={`${navbarBg} z-40 w-full fixed top-0 py-6`}>
            <div className={`flex items-center justify-center mx-auto w-5/6`}>
                {isAboveSmallScreens ? (
                    <div className={`flex justify-center gap-16 font-opensans text-md font-semibold`}>
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="About"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Skills"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                ) : (
                    <div className={`flex items-center justify-between mx-auto w-5/6`}>
                        <h4 className={`font-playfair text-3xl font-bold`}><span className="text-navy-blue">sнα∂αв</span> αℓι</h4>
                        <button
                            className="rounded-full bg-navy-blue p-2 "
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <img src={menuIcon} alt="menu-icon" />
                        </button>
                    </div>
                )}
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full bg-navy-blue w-[300px]">
                        <div className="flex justify-end p-10">
                            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <img alt="close-icon" src={closeIcon} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-10 ml-[33%] text-2xl text-black">
                            <Link
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="About"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Skills"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Projects"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                    </div>
                )}

            </div>
        </nav>

    )
}