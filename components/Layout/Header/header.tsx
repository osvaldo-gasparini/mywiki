"use client";
import Image from "next/image";
import style from "./header.module.css";
import TextInput from "../../UI/Inputs/Text/TextInput";
import AppTitle from "../../AppTitle/AppTitle";

const Header = () => {
  return (
    <header className={style.header}>
      <AppTitle accountType="Premium" />
      <div className={style.searchBar}>
        <TextInput
          type="search"
          placeholder="Search something..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            console.log(e.target.value)
          }
        />
      </div>
      <article className={style.profileSection}>
        <div className={style.profileName}>Osva G</div>
        <div className={style.profilePhoto}>
          <Image src={"/profile_photo.jpg"} alt="Profile photo" fill />
        </div>
      </article>
    </header>
  );
};

export default Header;
