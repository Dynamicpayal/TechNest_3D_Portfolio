import {socialImgs} from "../constants/index.js";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center">
                    <a href="/">Visit My Blog</a>
                </div>
                <div className="socials">
                    {socialImgs.map((img) => (
                        <a className="icon" target="_blank" href={img.url} key={img.url}>
                            <img src={img.imgPath}/>
                        </a>
                    ))}
                </div>

                <div className="flex flex-col justify-center md:items-start items-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Payal | Software Developer. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer
