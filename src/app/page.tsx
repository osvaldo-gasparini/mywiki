import Header from "../../components/Layout/Header/header";
import Button from "../../components/UI/Button/Button";
import TextArea from "../../components/UI/Inputs/TextArea/TextArea";
import style from "./page.module.css";

const Dashboard = () => {
  const WIKIS = [
    {
      label: "Personal Development",
    },
    {
      label: "Web Development",
    },
    {
      label: "Physical Development",
    },
  ];

  return (
    <div className={style.pageContainer}>
      <Header />
      <main>
        <section className={style.firstSection}>
          <article className={`${style.quickNotes} ${style.article}`}>
            <h2>Quick Notes</h2>
            <TextArea />
          </article>
          <article className={`${style.create} ${style.article}`}>
            <h2>I&apos;m gonna create</h2>
            <div className={style.buttonContainer}>
              <Button className={`${style.button} ${style.wikiButton}`}>
                Wiki
              </Button>
              <Button className={`${style.button} ${style.noteButton}`}>
                Note
              </Button>
            </div>
          </article>
          <article className={`${style.settings} ${style.article}`}>
            <Button>Wikis</Button>
            <Button>Notes</Button>
            <Button>Trash</Button>
            <Button>Settings</Button>
          </article>
        </section>
        <section className={style.secondSection}>
          <article className={style.container}>
            <h3 className={style.title}>Wiki&apos;s</h3>
            <div className={`${style.itemContainer} ${style.wikis}`}>
              {WIKIS.map((item, index) => {
                return (
                  <Button key={`${item.label}${index}`}>{item.label}</Button>
                );
              })}
            </div>
          </article>
          <article className={style.container}>
            <h3 className={style.title}>Note&apos;s</h3>
            <div className={`${style.itemContainer} ${style.notes}`}>
              {WIKIS.map((item, index) => {
                return (
                  <Button key={`${item.label}${index}`}>{item.label}</Button>
                );
              })}
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
