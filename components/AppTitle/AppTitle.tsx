import Link from "next/link";
import style from "./AppTitle.module.css";

type AccountType = "Basic" | "Premium";

export default function AppTitle({
  accountType = "Basic",
}: {
  accountType: AccountType;
}) {
  const mock =
    "“Nuestro miedo mas profundo no es ser inadecuados, nuestro miedo mayor es nuestro poder inconmensurable, es nuestra luz, no nuestra oscuridad lo que nos aterra. Optar por la mezquindad no sirve al mundo, no hay lucidez en encogerse para que los demás no se sientan inseguros junto a ti, nuestro destino es brillar como los niños, no es el de unos cuantos, es el de todos, y conforme dejamos que nuestra luz propia alumbre, inconcientemente permitimos lo mismo en los demás y al liberarnos de nuestro propio miedo, nuestra presencia automáticamente libera a otros.”";

  return (
    <div className={style.container}>
      <Link href="/">
        <h1 className={style.title}>mywiki</h1>
      </Link>
      <button
        type="button"
        onClick={() => console.log(mock)}
        className={`${style.anchor} ${style[accountType]} `}
      >
        {accountType}
      </button>
    </div>
  );
}
