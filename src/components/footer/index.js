/** Frameworks */
import Image from "next/image";
import Link from "next/link";
/** Assets: Images */
import BGDecor from '@assets/images/illustration/footer-decor.png'

/** Component */
const Footer = () => {
    return (
        <footer className="bg-[#07477A] px-7 pt-9 pb-36 flex flex-col gap-8 items-start relative">
            {/* LOGO */}
            <Link href='/'>
                <Image src={'/logo-white.png'} width={228} height={45} alt='logo' />
            </Link>
            {/* DEPARTMENT & ADDRESS */}
            <div className="bg-white px-6 py-6 flex flex-col gap-10 items-start justify-start">
                <select className="select select-bordered w-full max-w-xs rounded-md">
                    <option disabled selected>Select department</option>
                    <option>TECHNOLOGY DEPARTMENT</option>
                    <option>MARKETING DEPARTMENT</option>
                    <option>FINANCE DEPARTMENT</option>
                </select>

                <a className="text-[#25A0D8] leading-6 text-lg" target='_blank' rel="noopener noreferrer" href='https://www.google.com/maps/place/Jl.+Lembong+No.8,+Braga,+Kec.+Sumur+Bandung,+Kota+Bandung,+Jawa+Barat+40111/@-6.9164231,107.6072516,17z/data=!3m1!4b1!4m5!3m4!1s0x2e68e63a9eec4bb3:0xe97405e8891949df!8m2!3d-6.9164231!4d107.6094403'>
                    Jl. Lembong No 8 <br />
                    Kel. Braga Kec. Sumur Bandung, Kota <br />Bandung, Jawa Barat
                </a>
            </div>
            {/* LINKS */}
            <ul className="text-white flex flex-col gap-6 z-10">
                <li className="cursor-pointer">
                    <Link href={'/about'}>
                        <span className="font-normal">
                            Who We Are
                        </span>
                    </Link>
                </li>
                <li className="cursor-pointer">
                    <Link href={'/values'}>
                        <span className="font-normal">
                            Our Values
                        </span>
                    </Link>
                </li>
                <li className="cursor-pointer">
                    <Link href={'/perks'}>
                        <span className="font-normal">
                            The Perks
                        </span>
                    </Link>
                </li>
            </ul>
            {/* BG DECOR */}
            <div className="absolute bottom-0 right-0 left-0 w-full h-[253px] z-0">
                <Image src={BGDecor} layout='fill' alt='d' />
            </div>
        </footer>
    );
}

export default Footer;