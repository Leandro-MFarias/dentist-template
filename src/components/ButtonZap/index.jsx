import { FaWhatsapp } from "react-icons/fa";

export function ButtonZap() {
    return (
        <button className="fixed top-[88%] sm:top-[90%] right-[1%] bg-green-400 hover:bg-green-500 p-4 rounded-full">
            <a href="#" className="text-white text-4xl">
                <FaWhatsapp />
            </a>
        </button>
    )
}