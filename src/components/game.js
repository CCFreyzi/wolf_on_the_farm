import {useCallback, useEffect, useState} from "react";
import {unstable_batchedUpdates} from "react-dom";
import {EGG_IMAGES, EGG_POSITION_KEYS, EGG_POSITIONS, getLevelConfig} from "./constans";
import {
    BackgroundImage0,
    BackgroundImage1,
    BackgroundImage2, BackgroundImage3, BackgroundImage4,
    WolfLeftDown,
    WolfLeftUp,
    WolfRightDown,
    WolfRightUp
} from "./wolf_images";
import {BrokenEgsContainer, Egg, EggContainer, GameContainer, LifeEgg, Score} from "./components_styled";
import GameOverComponent from "./game_over_render";

const Game = () => {
    const [score, setScore] = useState(0);
    const [brokenScale, setBrokenScale] = useState(5);
    const [wolfPosition, setWolfPosition] = useState(EGG_POSITION_KEYS.d)
    const [isTopPosition, setIsTopPosition] = useState(false);
    const [isRightPosition, setIsRightPosition] = useState(true);
    const [availableEggs, setAvailableEggs] = useState([]);
    const [aggForRemove, setEggForRemove] = useState(null);
    const [chickenPosition, setChickenPosition] = useState(0);
    const [newEggTimeOutId, setNewTimeOutId] = useState(null);
    const [isGameOver, setIsGameOver] = useState(false);
    const [timeOutsIds, setTimeOutsIds] = useState([]);
    const [backgroundImage, setBackgroundImage] = useState(0);

    useEffect(() => {
        setInterval(() => setBackgroundImage(prevVal => Number(!prevVal)), 300)
    }, []);

    useEffect(() => {
        if (!brokenScale && availableEggs.length) {
            unstable_batchedUpdates(() => {
                timeOutsIds.forEach(timeOutId => clearTimeout(timeOutId));
                setAvailableEggs([]);
                setTimeOutsIds([]);
                setIsGameOver(true);
                setEggForRemove(null);
                setNewTimeOutId(null)
            })
        }
    }, [newEggTimeOutId, brokenScale, availableEggs]);

    const onButtonClick = useCallback(({keyCode}) => {
        if (Object.values(EGG_POSITION_KEYS).includes(keyCode)) {
            setWolfPosition(keyCode)
        }
        // if (keyCode === 39) {
        //     setIsRightPosition(true)
        // }
        //
        // if (keyCode === 37) {
        //     setIsRightPosition(false)
        // }
        //
        // if (keyCode === 38) {
        //     setIsTopPosition(true)
        // }
        //
        // if (keyCode === 40) {
        //     setIsTopPosition(false)
        // }
    }, []);

    useEffect(() => {
        if (aggForRemove) {
            const removedEgg = availableEggs.find(({id}) => id === aggForRemove);

            if (removedEgg) {
                unstable_batchedUpdates(() => {
                    // removedEgg.poss === isTopPosition && removedEgg.isRight === isRightPosition
                    if (removedEgg.poss === wolfPosition) {
                        setScore(prevVal => prevVal + 1)
                        setAvailableEggs(prevVal => prevVal.map(config => config.id === removedEgg.id ? {
                            ...config,
                            eggsImage: "one",
                            isPlusOne: true
                        } : config));
                    } else {
                        setBrokenScale(prevVal => prevVal - 1);
                        setAvailableEggs(prevVal => prevVal.map(config => config.id === removedEgg.id ? {
                            ...config,
                            eggsImage: "egg_broke"
                        } : config));
                    }

                    setEggForRemove(null);
                });

                setTimeout(() =>
                    setAvailableEggs(prevVal => prevVal.filter(({id}) => id !== removedEgg.id)), 100);
            }
        }
    }, [aggForRemove, wolfPosition, availableEggs]);

    const addEgg = (eggCount) => () => {
        const level = getLevelConfig(eggCount);
        const eggConfig = {
            ...EGG_POSITIONS[Math.floor(Math.random() * EGG_POSITIONS.length)],
            id: eggCount,
            speed: level.speed,
            eggsImage: EGG_IMAGES[Math.floor(Math.random() * EGG_IMAGES.length)]
        };

        setChickenPosition(eggConfig.backgroundIndex);
        setTimeout(() => setChickenPosition(0), 300);

        setTimeout(() => setEggForRemove(eggCount), level.speed)

        setAvailableEggs(prev => [...prev, eggConfig]);

        setTimeOutsIds(prev => [...prev, setTimeout(addEgg(eggCount + 1), level.frequency)]);
    }
    const startNewGame = () => {
        unstable_batchedUpdates(() => {
            setIsGameOver(false);
            setScore(0);
            setBrokenScale(5);
            addEgg(1)();
        });
    }

    useEffect(() => {
        document.addEventListener("keydown", onButtonClick);

        addEgg(1)();

        return () => {
            document.removeEventListener("keydown", onButtonClick);
        }
    }, []);

    return <GameContainer backgroundImage={`./background_${backgroundImage}.svg`}>
        <WolfLeftUp isDisplay={wolfPosition === EGG_POSITION_KEYS.q}/>
        <WolfRightUp isDisplay={wolfPosition === EGG_POSITION_KEYS.e}/>
        <WolfLeftDown isDisplay={wolfPosition === EGG_POSITION_KEYS.a}/>
        <WolfRightDown isDisplay={wolfPosition === EGG_POSITION_KEYS.d}/>
        <BackgroundImage0 isDisplay={chickenPosition === 0}/>
        <BackgroundImage1 isDisplay={chickenPosition === 1}/>
        <BackgroundImage2 isDisplay={chickenPosition === 2}/>
        <BackgroundImage3 isDisplay={chickenPosition === 3}/>
        <BackgroundImage4 isDisplay={chickenPosition === 4}/>
        <Score>{score}</Score>
        <BrokenEgsContainer>
            {brokenScale > 0 && new Array(brokenScale).fill().map((_, index) => <LifeEgg key={index}/>)}
        </BrokenEgsContainer>
        {availableEggs.map(({id, ...config}) => <EggContainer key={id} {...config}><Egg {...config} /></EggContainer>)}
        {isGameOver && <GameOverComponent score={score} startNewGame={startNewGame} />}
    </GameContainer>
}

export default Game