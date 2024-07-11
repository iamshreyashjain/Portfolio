import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function SocialLinks() {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedinIn size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/iamshreyashjain001",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/iamshreyashjain",
            style: "",
        },
        {
            id: 3,
            child: (
                <>
                    Send Mail <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:shreyashJain41@gmail.com",
            style: "rounded-br-md",
        },
    ];

    return (
        <div className="flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map(({ id, child, href, style }) => (
                    <li
                        key={id}
                        className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[0px] hover:rounded-md duration-500 bg-gray-500 ${style}`}
                    >
                        <a
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className="flex justify-between items-center w-full text-white"
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
