import React from "react";
import {useDispatch, useSelector} from "react-redux";
import FoodItem from "../FoodItem/FoodItem";
import styles from "./MainLayout.module.scss";

const MainLayout = () => {

    const catFood = useSelector(state => state.foodPage.catFood);
    const dispatch = useDispatch();

    return (
        <div className={styles.mainLayout}>
            <div className={styles.question}>Ты сегодня покормил кота?</div>
            <div className={styles.foodBlock}>
                {catFood.map(food => <FoodItem key={food.id} food={food} dispatch={dispatch}/>)}
            </div>
        </div>
    )
};

export default MainLayout;