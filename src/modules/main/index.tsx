import ProjectItem from "./components/projectItem";
import {Api} from "@/api";
import {companyList} from "@/types";
import styles from './styles.module.scss'
export default async function Main() {
    let companyList = []
    companyList = await Api.companyList()
    const renderProjectsList = companyList.data?.map((item: companyList) => {
        return (
            <ProjectItem
                key={item.id}
                title={item.title}
                description={item.description}
                imgUrl={item.images[0]?.path}
                id={item.id}
            />
        )
    })

    return (
        <div className={styles.wrapper}>
            {renderProjectsList}
        </div>
    )
}