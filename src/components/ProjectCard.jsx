import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { RiGithubFill } from "react-icons/ri";

export default function ProjectCard({ id, imgSrc, title, demoLink, codeLink }) {
    return (
        <>
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                    src={imgSrc}
                    alt=""
                    className="rounded-md "
                    style={{ height: '200px', width: '100%', objectFit: 'cover' }}
                />

                <p className="flex items-center justify-center text-2xl pt-5 font-playfair font-semibold">{title}</p>
                <div className="flex items-center justify-center">
                    {demoLink != "" ?
                        <a className="px-6 py-3 m-4 duration-200 hover:scale-105"
                            target="_blank"
                            rel="noreferrer"
                            href={demoLink}>
                            Demo <FaExternalLinkAlt className="inline" />
                        </a> : <></>
                    }
                    <a className="px-6 py-3 m-4 duration-200 hover:scale-105 "
                        target="_blank"
                        rel="noreferrer"
                        href={codeLink}>
                        Code <RiGithubFill size={25} className="inline" />
                    </a>
                </div>
            </div>
        </>
    )
}