import Linkedin from "../assets/li.png";
import Github from "../assets/gh.png";
import Twitter from "../assets/twitter.png";
import Insta from "../assets/insta.png";

const SocialMediaIcons = () => {
    return (
        <div className="flex gap-10 justify-center md:justify-start my-10">
            <a
                href="https://www.linkedin.com/in/shadabali05/"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="linkedin-link" src={Linkedin} width={30} height={30} />
            </a>

            <a
                href="https://www.github.com/Sh4dab"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="github-link" src={Github} width={30} height={30} />
            </a>

            <a
                href="https://twitter.com/itz_shadabali"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="twitter-link" src={Twitter} />
            </a>

            <a
                href="https://www.instagram.com/shadab_ali05"
                target="_blank"
                rel="noreferrer"
            >
                <img alt="instagram-link" src={Insta} width={30} height={30} />
            </a>
        </div>
    )
}
export default SocialMediaIcons;