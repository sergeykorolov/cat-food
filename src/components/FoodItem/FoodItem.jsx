import React, {useState} from "react";
import styles from "./FoodItem.module.scss";
import catImg from "../../images/cat.png"
import {changeSelectStatus} from "../../redux/food-reducer";

const FoodItem = ({food, dispatch}) => {

    const [blockHover, setBlockHover] = useState(false);

    const onBlockHover = () => {
        if(food.available){
            dispatch(changeSelectStatus(food.id));
            setBlockHover(true);
        }
    };

    const onRemoveBlockHover = () => {
        if (blockHover) {
            setBlockHover(false);
        }
    };

    const onChangeSelectStatus = () => {
        dispatch(changeSelectStatus(food.id));
    };

    return (
        <div className={styles.cardBlock}>
            <div className={`${styles.card}
                ${!food.available
                ? styles.disabled
                : food.selected ? styles.selectedColor : styles.defaultColor}
                ${blockHover && food.selected ? styles.blockHover : ""}`}
                 onClick={onBlockHover}
                 onMouseLeave={onRemoveBlockHover}>
                <div className={styles.corner}></div>
                <div className={styles.cardHeader}>
                    {food.selected
                        ? <div className={`${styles.headerText} ${styles.selectedColor}`}>Котэ не одобряет?</div>
                        : <div className={`${styles.headerText} ${styles.defaultColor}`}>Сказочное заморское яство</div>
                    }
                </div>
                <div className={styles.cardInfo}>
                    <div className={styles.cardText}>
                        <div className={styles.title}>Нямушка</div>
                        <div className={styles.ingredient}>c {food.ingredient}</div>
                        <div className={styles.details}>{food.portions} порций</div>
                        <div className={styles.details}>{food.present}</div>
                        {food.portions === 100 ? <div className={styles.details}>Заказчик доволен</div> : ""}
                    </div>
                    <div className={styles.weightBlock}>
                        <div className={styles.weightText}>{food.weight}
                            <div className={styles.kg}>кг</div>
                        </div>
                    </div>
                    <img className={styles.catImg} src={catImg} alt="cat image"/>
                </div>
            </div>
            {!food.available
                ? <div className={styles.notAvailableFooterText}>Печалька, с {food.ingredient} закончился.</div>
                : !food.selected
                    ? <div className={styles.footerText}>Чего сидишь? Порадуй котэ,
                        <div onClick={onChangeSelectStatus} className={styles.buy}>купи</div>
                        <p>.</p>
                    </div>
                    : <div className={styles.footerText}>{food.description}</div>
            }
        </div>
    )
};

export default FoodItem;