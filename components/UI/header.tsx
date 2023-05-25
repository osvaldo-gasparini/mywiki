import Link from "next/link";

const Header = () => {
  return (
    <header className="">
      <Link href="/">
        <h1>mywiki</h1>
      </Link>
      <input type="text" />
      <section>
        <button>Premium</button>
        {/* <div>
            <Image src={"/profile_photo.jpg"} alt="Profile photo" fill />
          </div> */}
      </section>
    </header>
  );
};

export default Header;
