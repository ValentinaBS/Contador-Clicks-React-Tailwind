import React from "react";
import githubLogo from "../imagenes/github-logo.png"
import linkedinLogo from "../imagenes/linkedin-logo.png"

export default function Footer() {
    return (
        <footer className="mt-10 h-full p-9">
            <div className="flex-none md:flex justify-end items-center">
                <a 
                className="mr-4 inline-flex"
                href="https://github.com/ValentinaBS">
                    <img 
                    className="inline"
                    alt="GitHub logo" 
                    src={githubLogo} />
                    <p>
                        ValentinaBS
                    </p>
                </a>
                <a 
                className="inline-flex"
                href="https://www.linkedin.com/in/valentina-bel%C3%A9n-s%C3%A1nchez-495ab1217/">
                    <img 
                    alt="Linkedin logo" 
                    src={linkedinLogo} />
                    <p>
                        Valentina Belén Sánchez
                    </p>
                </a>
            </div>
        </footer>
    )
}