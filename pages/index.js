export default function Home() {

    return (//jsx 구문 적용가능: react임포트 안해도됌
        <div>
            <h1 className="active">Hello</h1>
        </div>
    );//style jsx: 1.컴포넌트에 한정되어 적용  2. xxxx.module.css보다 유용함
}

//hydration: 초기상태의 컴포넌트로된 
//미리생성된 html 보게되고 react.js와 상호작용 통해
//onclick시 카운터증가하는 동작 구현
//자바스크립트를 비활성화 해도 next.js덕분에 
//초기 html 구조는 보는거 가능!!
//SEO: 검색엔진최적화