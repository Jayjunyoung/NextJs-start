/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;
console.log(API_KEY);

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",//리퀘스트하는경로
        destination: "/new-sexy-blog/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {//redirect랑 비슷한데 url의 변활르 직접적으로 볼수없음
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",//:id는 위아래 동일하게
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
}
