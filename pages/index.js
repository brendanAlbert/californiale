import Head from "next/head";
import Nav from "../components/Nav";
import Main from "../components/Main";
import styles from "../styles/Home.module.css";
import { useStore } from "../store/store";
import { ModalStates } from "../interfaces/modalStates";

export default function Home() {
    const {
        modalState,
        setModalState,
        statesListOpen,
        setStatesListOpenState,
    } = useStore();

    const TransparentCloser = () => {
        return (
            <div
                onClick={() => setStatesListOpenState(false)}
                style={{
                    display: statesListOpen ? "flex" : "none",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    zIndex: 2,
                    background: "transparent",
                }}
            ></div>
        );
    };
    const SemiTransparentCloser = () => {
        return (
            <div
                onClick={() => setModalState(ModalStates.closed)}
                style={{
                    display:
                        modalState !== ModalStates.closed ? "flex" : "none",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    zIndex: 0,
                    background: "#00000030",
                }}
            ></div>
        );
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Californiale</title>
                <meta
                    name="description"
                    content="A Wordle-like California county guessing app."
                />
                <meta
                    name="keywords"
                    content="california, californiale, counties of california, england, englandle, ceremonial county, ceremonial counties, scotland, scotlandle, council areas of scotland, italiale, italy, italia, regions of italy, canadale, canada, canadian states, states of canada, wordle, worldle, scoredle, statele, mexicodle, mexico, mexican states, states of mexico, daily, game"
                />
                <link rel="icon" href="/california-flag.svg" />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <Nav />
            <Main />
            <SemiTransparentCloser />
            <TransparentCloser />
        </div>
    );
}
