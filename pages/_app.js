//글로벌스타일 적용하는 파일이야! 이름은 무조건 _app.js 여야함
import Layout from "../components/Layout";
import "../styles/globals.css";//nextjs는 원래 css 못불러오지만
// _app.js에서는 불러올수있음
// 여기를 거치고 about.js index.js를 불러온다

export default function MyApp({ Component, pageProps }) {
    return (//Componet: 렌더링하고싶은 페이지가 들어감 * home일땐 home about일땐 about
    //NavBar는 어느홈페이지든 맨위에 렌더링될거임
    <Layout>
        <Component {...pageProps} />
    </Layout>
    );
}