const SocialMediaIcons = () => {
    return (
        <div className="flex gap-10 justify-center md:justify-start my-10">
            <a
                href="https://www.linkedin.com/in/shadabali05/"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="linkedin-link" src="\src\assets\li.png" width={30} height={30} />
            </a>

            <a
                href="https://www.github.com/Sh4dab"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="github-link" src="\src\assets\gh.png" width={30} height={30} />
            </a>

            <a
                href="https://twitter.com/itz_shadabali"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="twitter-link" src="\src\assets\twitter.png" />
            </a>

            <a
                href="https://www.instagram.com/shadab_ali05"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="instagram-link" src="\src\assets\insta.png" width={30} height={30} />
            </a>
        </div>
    )
}
export default SocialMediaIcons;