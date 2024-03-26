import CompanyItem from "./components/companyItem";
import {Api} from "@/api";
import {companyList} from "@/types";
import styles from './styles.module.scss'
export default async function Main() {
    let companyList = []
    companyList = await Api.companyList()
    const renderCompanysList = companyList.data?.map((item: companyList) => {
        return (
            <CompanyItem
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
            {renderCompanysList}
        </div>
    )
}