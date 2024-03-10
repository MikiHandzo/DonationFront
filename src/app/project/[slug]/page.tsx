import Header from "@/modules/header";
import Footer from "@/modules/footer";
import Project from "@/modules/project";
import styles from "./styles.module.scss";

export default function ProjectPage() {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Project />
            <Footer />
        </div>
    )
}