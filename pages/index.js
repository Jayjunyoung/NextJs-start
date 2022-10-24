import NavBar from "../components/NavBar";


export default function Home() {

    return (//jsx 구문 적용가능: react임포트 안해도됌
        <div>
            <NavBar />
            <h1 className="active">Hello</h1>
            <style jsx>{`
                a {
                    color: white;
                }//nav의 컴포넌트 에서 a에 css적용한거만 적용
                //위의 active도 작동안됌
            `}</style>
        </div>
    );
}

//hydration: 초기상태의 컴포넌트로된 
//미리생성된 html 보게되고 react.js와 상호작용 통해
//onclick시 카운터증가하는 동작 구현
//자바스크립트를 비활성화 해도 next.js덕분에 
//초기 html 구조는 보는거 가능!!
//SEO: 검색엔진최적화