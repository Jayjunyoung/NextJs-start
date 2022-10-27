import Link from "next/link";
import { useRouter } from "next/router";//next.js에서 라우터쓰는 2가지 코드



export default function NavBar() {
    const router = useRouter();
    console.log(router);
    return (//Link는 주소를 지정하는거에만 쓰여 나머진 a태그에다가 정의
        <nav>
        <img src="/vercel.svg" />
        <div>
        <Link href="/">
            <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about">
            <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
        </div>
        <style jsx>{`//이건 index에서 a를 white로 지정해도 애네는 간섭못해!
            nav {
            display: flex;
            gap: 10px;
            flex-direction: column;
            align-items: center;
            padding-top: 20px;
            padding-bottom: 10px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
            max-width: 100px;
            margin-bottom: 5px;
        }
        nav a {
            font-weight: 600;
            font-size: 18px;
        }
        .active {
            color: tomato;
        }
        nav div {
            display: flex;
            gap: 10px;
        }
            
        `}</style>
        </nav>
    );
}