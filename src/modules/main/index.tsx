import CompanyItem from "./components/companyItem";
import {Api} from "@/api";
import {companyList} from "@/types";
import styles from './styles.module.scss'
export default async function Main() {
    const companyListData = await Api.companyList()
    const renderCompaniesList = companyListData.data?.map((item: companyList) => {
        return (
            <CompanyItem
                key={item.id}
                title={item.title}
                description={item.description}
                images={item.images}
                id={item.id}
            />
        )
    })

    return (
        <div className={styles.wrapper}>
            {renderCompaniesList}
        </div>
    )
}