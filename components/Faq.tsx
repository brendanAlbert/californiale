import React from "react";
import Image from "next/image";
import useThemeService from "../services/useThemeService";
import styles from "../styles/Nav.module.css";
import { Name } from "./Name";

const GameLink = (props: any) => {
    const { link, color1, color2, color3, string1, string2, string3, string4 } =
        props;
    return (
        <a
            className={styles.border}
            style={{
                margin: "3px",
                marginTop: "10px",
                padding: "6px 12px",
                borderRadius: "10px",
                fontWeight: 600,
            }}
            href={link}
        >
            <span
                style={{
                    fontWeight: 600,
                }}
            >
                <span
                    style={{
                        color: color1,
                    }}
                >
                    {string1}
                </span>
                <span
                    style={{
                        color: color2,
                    }}
                >
                    {string2}
                </span>
                <span
                    style={{
                        color: color3 ?? color1,
                    }}
                >
                    {string3}
                </span>
                <span
                    style={{
                        color: "#218c74",
                    }}
                >
                    {string4}
                </span>{" "}
            </span>
        </a>
    );
};

const Faq = () => {
    const { palette } = useThemeService();
    return (
        <div>
            <div>
                Welcome to &nbsp;
                <span
                    style={{
                        fontSize: "24px",
                        fontWeight: 600,
                        letterSpacing: "2px",
                    }}
                >
                    <Name />
                </span>
                !
            </div>
            <h2>How to play:</h2>
            <div>
                Guess one of 58 Californian counties in 6 guesses or less.
            </div>
            <br />
            <div>
                Once the game is over, either by getting the right answer or
                running out of guesses, the share button will appear.
            </div>
            <br />
            <div>
                To copy your score to your device&apos;s clipboard, click
                <span
                    style={{
                        lineHeight: "40px",
                        padding: "4px 18px",
                        margin: "6px",
                        backgroundColor: "#2a9d8f",
                        borderTop: "2px solid #000",
                        borderRight: "2px solid #000",
                        borderLeft: "2px solid #000",
                        borderBottom: "5px solid #000",
                    }}
                >
                    Share
                </span>
                .
            </div>

            <br />

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
            >
                <span>californiale #58 1/6</span>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    {[0, 1, 2, 3, 4].map((each, index) => (
                        <Image
                            alt="green square emoji"
                            width="20px"
                            height="20px"
                            key={index}
                            src="data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' id='emoji' viewBox='0 0 72 72'%3e%3cg id='color'%3e%3cpath fill='%23b1cc33' d='M59.0349,60h-46.07A.9679.9679,0,0,1,12,59.0349v-46.07A.9679.9679,0,0,1,12.9651,12h46.07A.9679.9679,0,0,1,60,12.9651v46.07A.9679.9679,0,0,1,59.0349,60Z'/%3e%3c/g%3e%3cg id='line'%3e%3cpath fill='none' stroke='%23000' stroke-linejoin='round' stroke-width='2' d='M59.0349,60h-46.07A.9679.9679,0,0,1,12,59.0349v-46.07A.9679.9679,0,0,1,12.9651,12h46.07A.9679.9679,0,0,1,60,12.9651v46.07A.9679.9679,0,0,1,59.0349,60Z'/%3e%3c/g%3e%3c/svg%3e"
                        />
                    ))}
                    🎉
                </div>

                <br />
                <div>Check in every day to guess a new county!</div>
                <div
                    style={{
                        marginTop: "12px",
                    }}
                >
                    Also try:
                    <div
                        style={{
                            marginTop: "6px",
                            fontWeight: 600,
                            display: "flex",
                            flexWrap: "wrap",
                        }}
                    >
                        <GameLink
                            link="https://englandle.netlify.app"
                            color1="#FFF"
                            color2="#C1121F"
                            string1="En"
                            string2="gla"
                            string3="nd"
                            string4="le"
                        />
                        <GameLink
                            link="https://scotlandle.netlify.app"
                            color1="#2196f3"
                            color2="#FFF"
                            string1="Sco"
                            string2="tl"
                            string3="and"
                            string4="le"
                        />
                        <GameLink
                            link="https://canadale.netlify.app"
                            color1="#ef233c"
                            color2="#FFF"
                            string1="Ca"
                            string2="na"
                            string3="da"
                            string4="le"
                        />
                        <GameLink
                            link="https://italiale.netlify.app"
                            color1={palette.green}
                            color2="#FFF"
                            color3="#ef233c"
                            string1="It"
                            string2="al"
                            string3="ia"
                            string4="le"
                        />
                        <GameLink
                            link="https://mexicodle.netlify.app"
                            color1="#20bf6b"
                            color2="#FFF"
                            color3="#eb3b5a"
                            string1="Me"
                            string2="xi"
                            string3="co"
                            string4="dle"
                        />

                        <a
                            className={styles.border}
                            style={{
                                margin: "3px",
                                marginTop: "10px",
                                padding: "6px 12px",
                                borderRadius: "10px",
                            }}
                            href="https://deutschlandle.vercel.app"
                        >
                            <span
                                style={{
                                    color: "#111",
                                    textShadow: "2px 2px 0 #000",
                                }}
                            >
                                Deut
                            </span>
                            <span
                                style={{
                                    color: "#e74c3c",
                                    textShadow: "2px 2px 0 #000",
                                }}
                            >
                                sch
                            </span>
                            <span
                                style={{
                                    color: "#f1c40f",
                                    textShadow: "2px 2px 0 #000",
                                }}
                            >
                                lan
                            </span>
                            <span
                                style={{
                                    color: "green",
                                    textShadow: "2px 2px 0 #000",
                                }}
                            >
                                dle
                            </span>
                        </a>
                    </div>
                </div>
                <div
                    style={{
                        marginTop: "12px",
                    }}
                >
                    <span
                        style={{
                            color: "#999",
                            textAlign: "center",
                            maxWidth: "300px",
                        }}
                    >
                        svg icons from
                        <a
                            href="https://upload.wikimedia.org/wikipedia/commons/8/89/California_county_map_%28labeled%29.svg"
                            target="_blank"
                            title="california county icons"
                            rel="noreferrer"
                            style={{ color: "#FFF" }}
                        >
                            &nbsp;wikimedia commons
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Faq;
