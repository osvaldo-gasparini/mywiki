import Image from "next/image";
import Link from "next/link";
import style from "./header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <Link href="/">
        <h1 className={style.title}>mywiki</h1>
      </Link>
      <input type="text" placeholder="Search something..." />
      <section>
        <button>Premium</button>
        <div>
          {/* <Image src={"/profile_photo.jpg"} alt="Profile photo" fill /> */}
        </div>
      </section>
    </header>
  );
};

export default Header;
