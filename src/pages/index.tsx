import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-green-200">
      <header className="container flex h-16 items-center">
        <span className=" text-lg text-blue-500">ブックカード</span>
      </header>
    </div>
  );
};

export default Home;
