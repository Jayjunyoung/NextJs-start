import Seo from "../../components/Seo";
import { useRouter } from "next/router";

export default function Detail({ params }) {
    const router = useRouter();
    console.log(router);
    console.log(params);
    const [title, id] = params || [];
    //[] -> js를 받기전에 미리 html을 prerendering 하기때문에 
    //초기에는 빈배열을 추가해 오류가 발생하지 않도록 해준다
    //js를 받아오면 그때 params를 이용하는것!!
    return (
    <div>
        <Seo title={title} /> {/* head*/}
        <h4>{title}</h4>
    </div>
    );
}

export function getServerSideProps({ params: { params } }) {
    console.log(params);
    return {//url에서 정보를 가져오는데 사용 -> 데이터 fetch로쓰지않음
    props: {
            params,
        },
    };
}