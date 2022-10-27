import { useEffect, useState } from "react";
import Seo from "../components/Seo";


export default function Home() {
    const [movies, setMovies] = useState();
    useEffect(() => {
        (async () => {
        const { results } = await (await fetch(`/api/movies`)).json();
        setMovies(results);
        })();
    }, []);
    console.log(movies);
    return (//jsx 구문 적용가능: react임포트 안해도됌
        <div className="container">
            <Seo title="Home" />
            {!movies && <h4>Loading...</h4>}
            {movies?.map((movie) => (//?를 통해 영화가없으면실행안되게할것
                <div className="movie" key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                    <h4>{movie.original_title}</h4>
                </div>
        ))}
        <style jsx>{`
        .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
        }
        .movie img {
            max-width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
            transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
            font-size: 18px;
            text-align: center;
        }
        `}</style>
        </div>
    );//style jsx: 1.컴포넌트에 한정되어 적용  2. xxxx.module.css보다 유용함
}

//hydration: 초기상태의 컴포넌트로된 
//미리생성된 html 보게되고 react.js와 상호작용 통해
//onclick시 카운터증가하는 동작 구현
//자바스크립트를 비활성화 해도 next.js덕분에 
//초기 html 구조는 보는거 가능!!
//SEO: 검색엔진최적화