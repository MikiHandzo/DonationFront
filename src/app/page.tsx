import Header from "@/modules/header";
import Footer from "@/modules/footer";
import Main from "@/modules/main";
import styles from "./styles.module.scss";

export default function Home() {

    return (
        <main className={styles.wrapper}>
            <Header />

            <div className={styles.content}>
                <Main />
            </div>

            <Footer />
        </main>
    );
}
