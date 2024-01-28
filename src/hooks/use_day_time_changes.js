import {useEffect, useState} from "react";

const BONUS_SCORE_COUNT = 5;
export const useDayTimeChanges = ({setScore, setBrokenScale}) => {
    const [dateTime, setDateTime] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setScore( prevVal => prevVal + BONUS_SCORE_COUNT)

            setBrokenScale(prevVal => prevVal + 1)

            setDateTime(prevVal => {
                return Number(!prevVal);
            })
        }, 300)
    }, []);

    return {
        dateTime
    }
}