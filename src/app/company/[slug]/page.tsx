import Header from "@/modules/header";
import Footer from "@/modules/footer";
import Company from "../../../modules/company";
import styles from "./styles.module.scss";

export default function CompanyPage({ params }: { params: { slug: string } }) {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Company id={params.slug}/>
            <Footer />
        </div>
    )
}