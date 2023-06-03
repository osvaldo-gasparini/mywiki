"use client";

import Image from "next/image";
import Link from "next/link";
import style from "./header.module.css";
import TextInput from "../Input/TextInput";

const Header = () => {
  return (
    <header className={style.header}>
      <Link href="/">
        <h1 className={style.title}>mywiki</h1>
      </Link>
      <TextInput
        type="text"
        placeholder="Search something..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          console.log(e.target.value)
        }
      />
      <section className={style.profileSection}>
        <button>Premium</button>
        <div className={style.profilePhoto}>
          <Image src={"/profile_photo.jpg"} alt="Profile photo" fill />
        </div>
        <div className={style.profileName}>Osva G</div>
      </section>
    </header>
  );
};

export default Header;
