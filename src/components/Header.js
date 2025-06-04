import { Link } from "react-router-dom";
import "../App.css";

export const Header = () => {
  return (
    <>
      <header className="flex justify-between p-6 bg-[#333] text-[#fff] font-bold">
        <Link to="/">Blog</Link>
        <Link to="/">お問い合わせ</Link>
      </header>
    </>
  );
};
