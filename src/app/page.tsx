import Header from "../../components/Layout/Header/header";
import TextArea from "../../components/UI/Inputs/TextArea/TextArea";
import style from "./page.module.css";

const Dashboard = () => {
  return (
    <div className={style.pageContainer}>
      <Header />
      <main>
        <section className={style.firstSection}>
          <article className={`${style.quickNotes} ${style.article}`}>
            <h2>Quick Notes</h2>
            <TextArea />
          </article>
          <article className={`${style.quickNotes} ${style.article}`}>
            <h2>I&apos;m gonna create</h2>
            <button></button>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
