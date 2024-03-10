import styles from "./styles.module.scss";

interface Props {
    tabs: Array<{name:string, id: string | number, active: boolean}>
    setTabs: React.Dispatch<React.SetStateAction<{name: string, id: string | number, active: boolean}[]>>
    margin?: string
}

export default function Tabs({tabs, setTabs, margin}: Props) {
    const handleClick = (id:string | number) => {
        setTabs(tabs.map((item) => ({
            ...item,
            active: item.id === id,
        })));
    };

    return (
        <div className={styles.tabs} style={{margin: margin}}>
            {tabs.map((item) => (
                <div
                    key={item.id}
                    className={`${styles.item} ${item.active ? styles.active : ''}`}
                    onClick={() => handleClick(item.id)}
                >
                    {item.name}
                </div>
            ))}
        </div>
    );
}