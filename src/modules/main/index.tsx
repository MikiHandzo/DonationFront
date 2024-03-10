import ProjectItem from "./components/projectItem";
import styles from './styles.module.scss'

export default function Main() {
    return (
        <div className={styles.wrapper}>
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
        </div>
    )
}