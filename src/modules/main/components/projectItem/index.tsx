import {truncateWithEllipsis} from "@/helper";
import LinkButton from "@/UI/LinkButton";
import styles from "./styles.module.scss";

interface Props {
    title: string
    description: string
    imgUrl: string
    id: number
}

export default function ProjectItem({title, description, imgUrl, id}: Props) {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL
    const protocol = process.env.NEXT_PUBLIC_PROTOCOL

    return (
        <div className={styles.projectItem}>
            <div className={styles.projectPreview}>
                <img src={`${protocol}://${baseUrl}${imgUrl}`} alt="imagePreview"/>
            </div>

            <div className={styles.description}>
                <div>
                    <h2>{title}</h2>

                    <p>
                        {truncateWithEllipsis(description)}
                    </p>
                </div>

                <LinkButton
                    href={`/project/${id}`}
                >
                    Підтримати
                </LinkButton>
            </div>
        </div>
    )
}