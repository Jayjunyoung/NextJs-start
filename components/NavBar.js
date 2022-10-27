import Link from "next/link";
import { useRouter } from "next/router";//next.js에서 라우터쓰는 2가지 코드



export default function NavBar() {
    const router = useRouter();
    console.log(router);
    return (//Link는 주소를 지정하는거에만 쓰여 나머진 a태그에다가 정의
        <nav>
        <Link href="/">
            <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about">
            <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
        <style jsx>{`
            a {
            text-decoration: none;
            }
            .active {
            color: tomato;
            }
        `}</style>
        </nav>
    );
}