import { Card } from "./Card";
import { useGame } from "./Game"
import styles from "../page.module.css";



export const Board = () => {
    const { data } = useGame();
    return (
        <div className={styles.contBox}>
            {
                data.map((item) => {
                    return <Card key={item.id} {...item}></Card>
                })
            }
        </div>
    )
}