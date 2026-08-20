const {
    SlideRoot,
    useCountUp
} = window.Chrome;

/* ---------------- TITLE ---------------- */

window.IntroSlide = () => {

    const [curtain, setCurtain] = React.useState(true);

    return (
        <SlideRoot>

            <div
                onClick={() => setCurtain(false)}
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                    background: "#050B16",
                    cursor: curtain ? "pointer" : "default"
                }}
            >

                {/* ================================================= */}
                {/* ANIMATIONS */}
                {/* ================================================= */}

                <style>
                    {`

                    @keyframes floatA {
                        0% {
                            transform: translate3d(0, 25px, 0) rotate(-4deg);
                        }

                        50% {
                            transform: translate3d(35px, -30px, 0) rotate(3deg);
                        }

                        100% {
                            transform: translate3d(0, 25px, 0) rotate(-4deg);
                        }
                    }

                    @keyframes floatB {
                        0% {
                            transform: translate3d(0, -20px, 0) rotate(3deg);
                        }

                        50% {
                            transform: translate3d(-40px, 35px, 0) rotate(-3deg);
                        }

                        100% {
                            transform: translate3d(0, -20px, 0) rotate(3deg);
                        }
                    }

                    @keyframes floatC {
                        0% {
                            transform: translate3d(-20px, 15px, 0);
                        }

                        50% {
                            transform: translate3d(25px, -35px, 0);
                        }

                        100% {
                            transform: translate3d(-20px, 15px, 0);
                        }
                    }

                    @keyframes floatD {
                        0% {
                            transform: translate3d(15px, 0, 0) rotate(2deg);
                        }

                        50% {
                            transform: translate3d(-30px, -25px, 0) rotate(-3deg);
                        }

                        100% {
                            transform: translate3d(15px, 0, 0) rotate(2deg);
                        }
                    }

                    @keyframes pulse {
                        0%, 100% {
                            opacity: 0.2;
                            transform: scale(0.8);
                        }

                        50% {
                            opacity: 0.85;
                            transform: scale(1.25);
                        }
                    }

                    @keyframes glow {
                        0%, 100% {
                            opacity: 0.25;
                        }

                        50% {
                            opacity: 0.55;
                        }
                    }

                    @keyframes curtainPulse {
                        0%, 100% {
                            opacity: .25;
                        }

                        50% {
                            opacity: .8;
                        }
                    }

                    `}
                </style>


                {/* ================================================= */}
                {/* GRID */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "absolute",
                        inset: 0,

                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",

                        backgroundSize: "45px 45px",

                        maskImage:
                            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",

                        WebkitMaskImage:
                            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",

                        zIndex: 1,

                        pointerEvents: "none"
                    }}
                />


                {/* ================================================= */}
                {/* GLOW — RIGHT */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "absolute",
                        width: "700px",
                        height: "700px",
                        borderRadius: "50%",

                        background:
                            "radial-gradient(circle, rgba(97,230,216,0.10), transparent 70%)",

                        right: "-180px",
                        top: "8%",

                        filter: "blur(45px)",

                        zIndex: 1,

                        pointerEvents: "none",

                        animation:
                            "glow 6s ease-in-out infinite"
                    }}
                />


                {/* ================================================= */}
                {/* GLOW — LEFT */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "absolute",
                        width: "450px",
                        height: "450px",
                        borderRadius: "50%",

                        background:
                            "radial-gradient(circle, rgba(142,164,255,0.08), transparent 70%)",

                        left: "-100px",
                        bottom: "-120px",

                        filter: "blur(45px)",

                        zIndex: 1,

                        pointerEvents: "none",

                        animation:
                            "glow 7s ease-in-out infinite"
                    }}
                />


                {/* ================================================= */}
                {/* FLOATING GREETINGS */}
                {/* ================================================= */}


                {/* GERMAN */}

                <div
                    style={{
                        position: "absolute",
                        top: "8%",
                        left: "7%",

                        fontSize: "36px",
                        fontWeight: "500",

                        color:
                            "rgba(142,164,255,0.70)",

                        letterSpacing: "-0.03em",

                        animation:
                            "floatA 8s ease-in-out infinite",

                        textShadow:
                            "0 0 35px rgba(142,164,255,0.25)",

                        zIndex: 2
                    }}
                >
                    Guten Tag
                </div>


                {/* MACEDONIAN */}

                <div
                    style={{
                        position: "absolute",
                        top: "17%",
                        right: "7%",

                        fontSize: "40px",
                        fontWeight: "600",

                        color:
                            "rgba(97,230,216,0.72)",

                        letterSpacing: "-0.03em",

                        animation:
                            "floatB 9s ease-in-out infinite",

                        animationDelay: "1s",

                        textShadow:
                            "0 0 35px rgba(97,230,216,0.25)",

                        zIndex: 2
                    }}
                >
                    Добар ден
                </div>


                {/* ITALIAN */}

                <div
                    style={{
                        position: "absolute",
                        bottom: "17%",
                        left: "7%",

                        fontSize: "34px",
                        fontWeight: "500",

                        color:
                            "rgba(97,230,216,0.62)",

                        letterSpacing: "-0.03em",

                        animation:
                            "floatC 10s ease-in-out infinite",

                        animationDelay: "2s",

                        zIndex: 2
                    }}
                >
                    Buongiorno
                </div>


                {/* ENGLISH */}

                <div
                    style={{
                        position: "absolute",
                        bottom: "9%",
                        right: "8%",

                        fontSize: "38px",
                        fontWeight: "600",

                        color:
                            "rgba(142,164,255,0.68)",

                        letterSpacing: "-0.03em",

                        animation:
                            "floatA 9s ease-in-out infinite",

                        animationDelay: "3s",

                        zIndex: 2
                    }}
                >
                    Good afternoon
                </div>


                {/* FRENCH */}

                <div
                    style={{
                        position: "absolute",
                        top: "44%",
                        left: "3%",

                        fontSize: "31px",
                        fontWeight: "500",

                        color:
                            "rgba(255,255,255,0.38)",

                        animation:
                            "floatB 11s ease-in-out infinite",

                        animationDelay: "2.5s",

                        zIndex: 2
                    }}
                >
                    Bonjour
                </div>


                {/* EXTRA GERMAN */}

                <div
                    style={{
                        position: "absolute",
                        bottom: "30%",
                        right: "3%",

                        fontSize: "24px",
                        fontWeight: "500",

                        color:
                            "rgba(142,164,255,0.32)",

                        animation:
                            "floatD 8s ease-in-out infinite",

                        animationDelay: "1.5s",

                        zIndex: 2
                    }}
                >
                    Guten Tag
                </div>


                {/* EXTRA MACEDONIAN */}

                <div
                    style={{
                        position: "absolute",
                        top: "68%",
                        right: "20%",

                        fontSize: "27px",
                        fontWeight: "500",

                        color:
                            "rgba(97,230,216,0.35)",

                        animation:
                            "floatC 9s ease-in-out infinite",

                        animationDelay: "3.5s",

                        zIndex: 2
                    }}
                >
                    Здраво!
                </div>


                {/* EXTRA ITALIAN */}

                <div
                    style={{
                        position: "absolute",
                        top: "30%",
                        left: "18%",

                        fontSize: "23px",
                        fontWeight: "500",

                        color:
                            "rgba(97,230,216,0.30)",

                        animation:
                            "floatD 10s ease-in-out infinite",

                        animationDelay: "2s",

                        zIndex: 2
                    }}
                >
                    Buongiorno
                </div>


                {/* EXTRA ENGLISH */}

                <div
                    style={{
                        position: "absolute",
                        top: "82%",
                        left: "27%",

                        fontSize: "25px",
                        fontWeight: "500",

                        color:
                            "rgba(142,164,255,0.30)",

                        animation:
                            "floatA 10s ease-in-out infinite",

                        animationDelay: "4s",

                        zIndex: 2
                    }}
                >
                    Good afternoon
                </div>


                {/* EXTRA FRENCH */}

                <div
                    style={{
                        position: "absolute",
                        top: "12%",
                        left: "40%",

                        fontSize: "21px",
                        fontWeight: "500",

                        color:
                            "rgba(255,255,255,0.25)",

                        animation:
                            "floatB 12s ease-in-out infinite",

                        animationDelay: "5s",

                        zIndex: 2
                    }}
                >
                    Hallo!
                </div>


                {/* ================================================= */}
                {/* FLOATING DOTS */}
                {/* ================================================= */}

                {[
                    ["16%", "29%", "0s"],
                    ["84%", "35%", "1s"],
                    ["23%", "84%", "2s"],
                    ["76%", "13%", "3s"],
                    ["8%", "69%", "1.5s"],
                    ["92%", "67%", "2.5s"],
                    ["42%", "7%", "3.5s"],
                    ["59%", "91%", "4s"],
                    ["32%", "6%", "2s"],
                    ["69%", "94%", "1s"]
                ].map(([top, left, delay], index) => (

                    <div
                        key={index}
                        style={{
                            position: "absolute",

                            top,
                            left,

                            width:
                                index % 2 === 0
                                    ? "6px"
                                    : "4px",

                            height:
                                index % 2 === 0
                                    ? "6px"
                                    : "4px",

                            borderRadius: "50%",

                            background:
                                index % 2 === 0
                                    ? "#8EA4FF"
                                    : "#61E6D8",

                            boxShadow:
                                "0 0 20px rgba(142,164,255,0.8)",

                            animation:
                                "pulse 4s ease-in-out infinite",

                            animationDelay: delay,

                            zIndex: 2
                        }}
                    />

                ))}


                {/* ================================================= */}
                {/* CENTER CONTENT */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "relative",
                        zIndex: 5,

                        textAlign: "center",

                        maxWidth: "1000px",

                        padding:
                            "0 30px",

                        transform:
                            curtain
                                ? "scale(0.98)"
                                : "scale(1)",

                        opacity:
                            curtain
                                ? 0.9
                                : 1,

                        transition:
                            "opacity 1.5s ease, transform 2s cubic-bezier(0.22,1,0.36,1)"
                    }}
                >

                    {/* ================================================= */}
                    {/* LOGO */}
                    {/* ================================================= */}

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: "30px"
                        }}
                    >

                        <div
                            style={{
                                width: "86px",
                                height: "86px",

                                borderRadius: "50%",

                                padding: "4px",

                                background:
                                    "linear-gradient(135deg,#8EA4FF,#61E6D8)",

                                boxShadow:
                                    "0 0 55px rgba(142,164,255,0.28)"
                            }}
                        >

                            <div
                                style={{
                                    width: "100%",
                                    height: "100%",

                                    borderRadius: "50%",

                                    background: "#08111f",

                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",

                                    overflow: "hidden"
                                }}
                            >

                                <img
                                    src="/screenshots/vass_eu_logo.jpeg"
                                    alt="VASS"

                                    style={{
                                        width: "78%",
                                        height: "78%",

                                        objectFit: "contain",

                                        borderRadius: "50%"
                                    }}
                                />

                            </div>

                        </div>

                    </div>


                    {/* ================================================= */}
                    {/* LABEL */}
                    {/* ================================================= */}

                    <div
                        style={{
                            fontSize: "12px",
                            fontWeight: "600",

                            letterSpacing: "0.30em",

                            color: "#61E6D8",

                            textTransform: "uppercase",

                            marginBottom: "22px"
                        }}
                    >
                        Project Introduction
                    </div>


                    {/* ================================================= */}
                    {/* TITLE */}
                    {/* ================================================= */}

                    <h1
                        className="display"
                        style={{
                            margin: 0,

                            fontSize:
                                "clamp(58px, 6vw, 100px)",

                            lineHeight: "0.95",

                            letterSpacing: "-0.06em"
                        }}
                    >

                        From vision

                        <br />

                        <span
                            style={{
                                background:
                                    "linear-gradient(90deg,#ffffff,#8EA4FF,#61E6D8)",

                                WebkitBackgroundClip:
                                    "text",

                                WebkitTextFillColor:
                                    "transparent"
                            }}
                        >
                            to validation
                        </span>

                    </h1>


                    {/* ================================================= */}
                    {/* SUBTITLE */}
                    {/* ================================================= */}

                    <p
                        style={{
                            marginTop: "28px",

                            fontSize: "19px",

                            lineHeight: "1.65",

                            color:
                                "rgba(255,255,255,0.55)",

                            maxWidth: "720px",

                            marginInline: "auto"
                        }}
                    >

                        Seven interns · Three subteams · One shared goal

                        <br />

                        Building an AEM Event Management System from the ground up.

                    </p>


                    {/* ================================================= */}
                    {/* META */}
                    {/* ================================================= */}

                    <div
                        style={{
                            marginTop: "38px",

                            display: "flex",

                            justifyContent:
                                "center",

                            gap: "10px",

                            flexWrap: "wrap"
                        }}
                    >

                        {[
                            "FIGMA",
                            "SPECIFICATION",
                            "JIRA",
                            "AEM"
                        ].map((item, index) => (

                            <div
                                key={index}

                                className="glass"

                                style={{
                                    padding:
                                        "9px 16px",

                                    borderRadius:
                                        "999px",

                                    fontSize: "10px",

                                    letterSpacing:
                                        "0.14em",

                                    color:
                                        "rgba(255,255,255,0.55)",

                                    border:
                                        "1px solid rgba(255,255,255,0.08)"
                                }}
                            >
                                {item}
                            </div>

                        ))}

                    </div>


                    {/* ================================================= */}
                    {/* FOOTER */}
                    {/* ================================================= */}

                    <div
                        style={{
                            marginTop: "32px",

                            fontSize: "9px",

                            letterSpacing: "0.22em",

                            color:
                                "rgba(255,255,255,0.25)",

                            textTransform: "uppercase"
                        }}
                    >
                        Internship Presentation · 2026
                    </div>

                </div>


                {/* ================================================= */}
                {/* CLICK TO OPEN */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "absolute",

                        zIndex: 25,

                        left: "50%",
                        bottom: "38px",

                        transform:
                            "translateX(-50%)",

                        opacity:
                            curtain ? 1 : 0,

                        transition:
                            "opacity 0.5s ease",

                        color:
                            "rgba(255,255,255,0.42)",

                        fontFamily: "monospace",

                        fontSize: "8px",

                        fontWeight: 600,

                        letterSpacing:
                            "0.22em",

                        whiteSpace:
                            "nowrap",

                        pointerEvents:
                            "none"
                    }}
                >
                    CLICK TO OPEN
                </div>


                {/* ================================================= */}
                {/* CENTER SEAM */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "absolute",

                        zIndex: 24,

                        top: 0,
                        left: "50%",

                        transform:
                            "translateX(-50%)",

                        width:
                            curtain ? "2px" : "0px",

                        height: "100%",

                        background:
                            "linear-gradient(180deg, transparent, rgba(97,230,216,0.35), transparent)",

                        boxShadow:
                            curtain
                                ? "0 0 30px rgba(97,230,216,0.18)"
                                : "none",

                        opacity:
                            curtain ? 1 : 0,

                        transition:
                            "width 1.5s ease, opacity 0.5s ease",

                        pointerEvents:
                            "none"
                    }}
                />


                {/* ================================================= */}
                {/* LEFT CURTAIN */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "absolute",

                        zIndex: 20,

                        top: 0,
                        left: 0,

                        width:
                            curtain ? "50%" : "0%",

                        height: "100%",

                        background:
                            "linear-gradient(90deg, #020711 0%, #071321 82%, #0d1d2b 100%)",

                        boxShadow:
                            curtain
                                ? "20px 0 60px rgba(0,0,0,0.55)"
                                : "none",

                        transition:
                            "width 4s cubic-bezier(0.65,0,0.35,1)",

                        overflow: "hidden",

                        pointerEvents: "none"
                    }}
                >

                    {/* CURTAIN TEXTURE */}

                    <div
                        style={{
                            position: "absolute",

                            inset: 0,

                            background:
                                "repeating-linear-gradient(90deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 12px, rgba(0,0,0,0.16) 28px, rgba(0,0,0,0.16) 42px)",

                            opacity: 0.8
                        }}
                    />

                    {/* EDGE LIGHT */}

                    <div
                        style={{
                            position: "absolute",

                            right: 0,
                            top: 0,

                            width: "2px",
                            height: "100%",

                            background:
                                "linear-gradient(180deg, transparent, rgba(97,230,216,0.18), transparent)"
                        }}
                    />

                </div>


                {/* ================================================= */}
                {/* RIGHT CURTAIN */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "absolute",

                        zIndex: 20,

                        top: 0,
                        right: 0,

                        width:
                            curtain ? "50%" : "0%",

                        height: "100%",

                        background:
                            "linear-gradient(270deg, #020711 0%, #071321 82%, #0d1d2b 100%)",

                        boxShadow:
                            curtain
                                ? "-20px 0 60px rgba(0,0,0,0.55)"
                                : "none",

                        transition:
                            "width 4s cubic-bezier(0.65,0,0.35,1)",

                        overflow: "hidden",

                        pointerEvents: "none"
                    }}
                >

                    {/* CURTAIN TEXTURE */}

                    <div
                        style={{
                            position: "absolute",

                            inset: 0,

                            background:
                                "repeating-linear-gradient(90deg, rgba(0,0,0,0.16) 0px, rgba(0,0,0,0.16) 14px, rgba(255,255,255,0.025) 30px, rgba(255,255,255,0.025) 44px)",

                            opacity: 0.8
                        }}
                    />

                    {/* EDGE LIGHT */}

                    <div
                        style={{
                            position: "absolute",

                            left: 0,
                            top: 0,

                            width: "2px",
                            height: "100%",

                            background:
                                "linear-gradient(180deg, transparent, rgba(97,230,216,0.18), transparent)"
                        }}
                    />

                </div>

            </div>

        </SlideRoot>
    );
};

/* =========================================================
   MEET THE TEAM
========================================================= */

window.MeetTheTeamSlide = () => {

    return (
        <SlideRoot>

            <div
                style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    background: "#050B16"
                }}
            >

                {/* BACKGROUND */}

                <img
                    src="/screenshots/background.png"
                    alt=""
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        //opacity: 0.97,
                        zIndex: 0,
                        pointerEvents: "none"
                    }}
                />

                {/* DARK OVERLAY */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(90deg, rgba(5,11,22,0.82) 0%, rgba(5,11,22,0.62) 38%, rgba(5,11,22,0.48) 70%, rgba(5,11,22,0.55) 100%)",
                        zIndex: 1
                    }}
                />


                {/* GLOW */}

                <div
                    style={{
                        position: "absolute",
                        width: "700px",
                        height: "700px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(97,230,216,0.13), transparent 68%)",
                        filter: "blur(60px)",
                        right: "-150px",
                        top: "-150px"
                    }}
                />


                {/* CONTENT */}

                <div
                    style={{
                        position: "relative",
                        zIndex: 3,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        padding: "80px"
                    }}
                >

                    <div
                        style={{
                            maxWidth: "1050px"
                        }}
                    >

                        {/* SMALL LABEL */}

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "14px",
                                marginBottom: "28px"
                            }}
                        >

                            <div
                                style={{
                                    width: "42px",
                                    height: "2px",
                                    background:
                                        "linear-gradient(90deg,#61E6D8,#8EA4FF)"
                                }}
                            />

                            <span
                                style={{
                                    color: "#61E6D8",
                                    fontSize: "12px",
                                    fontWeight: 600,
                                    letterSpacing: "0.32em"
                                }}
                            >
                                WHO WAS BEHIND IT?
                            </span>

                        </div>


                        {/* TITLE */}

                        <h1
                            className="display"
                            style={{
                                margin: 0,
                                color: "white",
                                fontSize: "clamp(70px, 8vw, 118px)",
                                lineHeight: "0.88",
                                letterSpacing: "-0.065em"
                            }}
                        >
                            Meet
                            <br />

                            <span
                                style={{
                                    background:
                                        "linear-gradient(90deg,#ffffff 0%,#8EA4FF 48%,#61E6D8 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                }}
                            >
                                the people.
                            </span>
                        </h1>


                        {/* DESCRIPTION */}

                        <p
                            style={{
                                marginTop: "35px",
                                marginBottom: 0,
                                color: "rgba(255,255,255,0.58)",
                                fontSize: "20px",
                                lineHeight: "1.6",
                                maxWidth: "650px"
                            }}
                        >
                            Seven interns.
                            <br />
                            Three teams.
                            <br />

                            <span
                                style={{
                                    color: "rgba(255,255,255,0.88)"
                                }}
                            >
                                One journey from idea to product.
                            </span>
                        </p>


                        {/* TEAM COUNT */}

                        <div
                            style={{
                                marginTop: "42px",
                                display: "flex",
                                alignItems: "center",
                                gap: "12px"
                            }}
                        >

                            {[
                                "FULL STACK",
                                "BACKEND",
                                "QA"
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    style={{
                                        padding: "10px 17px",
                                        borderRadius: "999px",
                                        background:
                                            "rgba(255,255,255,0.05)",
                                        border:
                                            "1px solid rgba(255,255,255,0.10)",
                                        color:
                                            index === 2
                                                ? "#61E6D8"
                                                : "rgba(255,255,255,0.55)",
                                        fontSize: "10px",
                                        letterSpacing: "0.16em"
                                    }}
                                >
                                    {item}
                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </SlideRoot>
    );
};

/* =========================================================
   FULL STACK TEAM
========================================================= */

window.FullStackTeam = () => {

    const team = [
        {
            name: "Davor Angelov",
            role: "Full Stack Developer",
            image: "screenshots/davor.png"
        },
        {
            name: "Stefan Stojanovski",
            role: "Full Stack Developer",
            image: "screenshots/stefan.png"
        },
        {
            name: "Andrej Ristovski",
            role: "Full Stack Developer",
            image: "screenshots/andrej.png"
        }
    ];

    return (
        <SlideRoot>

            <div
                style={{
                    width: "100%",
                    height: "100%",
                    padding: "60px 70px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden"
                }}
            >

                {/* GLOW */}

                <div
                    style={{
                        position: "absolute",
                        width: "650px",
                        height: "650px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(142,164,255,0.13), transparent 70%)",
                        filter: "blur(50px)",
                        top: "10%",
                        right: "-120px"
                    }}
                />

                {/* HEADER */}

                <div
                    style={{
                        position: "relative",
                        zIndex: 2,
                        marginBottom: "35px",
                        textAlign: "center"
                    }}
                >

                    <p
                        style={{
                            color: "#8EA4FF",
                            letterSpacing: "0.35em",
                            fontSize: "12px",
                            marginBottom: "14px"
                        }}
                    >
                        SUBTEAM 01 · 03 MEMBERS
                    </p>

                    <h1
                        className="display"
                        style={{
                            fontSize: "60px",
                            color: "white",
                            margin: 0,
                            fontWeight: 800,
                            lineHeight: 1
                        }}
                    >
                        Full Stack
                    </h1>

                    <p
                        style={{
                            color: "rgba(255,255,255,0.45)",
                            marginTop: "14px",
                            fontSize: "16px"
                        }}
                    >
                        Building the experience from front to back.
                    </p>

                </div>


                {/* TEAM CARDS */}

                <div
                    style={{
                        position: "relative",
                        zIndex: 2,
                        display: "flex",
                        gap: "28px",
                        justifyContent: "center"
                    }}
                >

                    {team.map((member, index) => (

                        <div
                            key={index}
                            className="glass"
                            style={{
                                width: "300px",
                                borderRadius: "28px",
                                overflow: "hidden",
                                background: "rgba(255,255,255,0.045)",
                                border:
                                    "1px solid rgba(142,164,255,0.13)",
                                boxShadow:
                                    "0 20px 60px rgba(0,0,0,0.25)"
                            }}
                        >

                            <div
                                style={{
                                    height: "300px",
                                    overflow: "hidden"
                                }}
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover"
                                    }}
                                />
                            </div>

                            <div
                                style={{
                                    padding: "20px 22px"
                                }}
                            >

                                <h2
                                    style={{
                                        color: "white",
                                        margin: 0,
                                        fontSize: "23px",
                                        marginBottom: "6px"
                                    }}
                                >
                                    {member.name}
                                </h2>

                                <p
                                    style={{
                                        color: "rgba(255,255,255,0.55)",
                                        margin: 0,
                                        fontSize: "13px"
                                    }}
                                >
                                    {member.role}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </SlideRoot>
    );
};


/* =========================================================
   BACKEND TEAM
========================================================= */

window.BackendTeam = () => {

    const team = [
        {
            name: "Kliment Stavreski",
            role: "Backend Developer",
            image: "screenshots/kliment.png"
        },
        {
            name: "Bojan Ristov",
            role: "Backend Developer",
            image: "screenshots/bojan.png"
        }
    ];

    return (
        <SlideRoot>

            <div
                style={{
                    width: "100%",
                    height: "100%",
                    padding: "60px 70px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden"
                }}
            >

                {/* GLOW */}

                <div
                    style={{
                        position: "absolute",
                        width: "600px",
                        height: "600px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(97,230,216,0.13), transparent 70%)",
                        filter: "blur(50px)",
                        bottom: "-150px",
                        left: "50%",
                        transform: "translateX(-50%)"
                    }}
                />

                {/* HEADER */}

                <div
                    style={{
                        position: "relative",
                        zIndex: 2,
                        marginBottom: "35px",
                        textAlign: "center"
                    }}
                >

                    <p
                        style={{
                            color: "#61E6D8",
                            letterSpacing: "0.35em",
                            fontSize: "12px",
                            marginBottom: "14px"
                        }}
                    >
                        SUBTEAM 02 · 02 MEMBERS
                    </p>

                    <h1
                        className="display"
                        style={{
                            fontSize: "60px",
                            color: "white",
                            margin: 0,
                            fontWeight: 800,
                            lineHeight: 1
                        }}
                    >
                        Backend
                    </h1>

                    <p
                        style={{
                            color: "rgba(255,255,255,0.45)",
                            marginTop: "14px",
                            fontSize: "16px"
                        }}
                    >
                        Powering the logic behind the system.
                    </p>

                </div>


                {/* TEAM CARDS */}

                <div
                    style={{
                        position: "relative",
                        zIndex: 2,
                        display: "flex",
                        gap: "30px",
                        justifyContent: "center"
                    }}
                >

                    {team.map((member, index) => (

                        <div
                            key={index}
                            className="glass"
                            style={{
                                width: "330px",
                                borderRadius: "28px",
                                overflow: "hidden",
                                background: "rgba(255,255,255,0.045)",
                                border:
                                    "1px solid rgba(97,230,216,0.13)",
                                boxShadow:
                                    "0 20px 60px rgba(0,0,0,0.25)"
                            }}
                        >

                            <div
                                style={{
                                    height: "330px",
                                    overflow: "hidden"
                                }}
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover"
                                    }}
                                />
                            </div>

                            <div
                                style={{
                                    padding: "22px"
                                }}
                            >

                                <h2
                                    style={{
                                        color: "white",
                                        margin: 0,
                                        fontSize: "25px",
                                        marginBottom: "6px"
                                    }}
                                >
                                    {member.name}
                                </h2>

                                <p
                                    style={{
                                        color: "rgba(255,255,255,0.55)",
                                        margin: 0,
                                        fontSize: "13px"
                                    }}
                                >
                                    {member.role}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </SlideRoot>
    );
};


/* =========================================================
   QA TEAM
========================================================= */

window.QATeam = () => {

    const team = [
        {
            name: "Zagorka Anevska",
            role: "QA Engineer",
            image: "screenshots/zagorka.png"
        },
        {
            name: "Tamara Stojanoska",
            role: "QA Engineer",
            image: "screenshots/tamara.png"
        }
    ];

    return (
        <SlideRoot>

            <div
                style={{
                    width: "100%",
                    height: "100%",
                    padding: "60px 70px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden"
                }}
            >

                {/* MAIN GLOW */}

                <div
                    style={{
                        position: "absolute",
                        width: "700px",
                        height: "700px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(142,164,255,0.12), transparent 70%)",
                        filter: "blur(55px)",
                        top: "0",
                        left: "50%",
                        transform: "translateX(-50%)"
                    }}
                />

                {/* SECONDARY GLOW */}

                <div
                    style={{
                        position: "absolute",
                        width: "450px",
                        height: "450px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(97,230,216,0.10), transparent 70%)",
                        filter: "blur(45px)",
                        bottom: "-150px",
                        right: "-100px"
                    }}
                />

                {/* HEADER */}

                <div
                    style={{
                        position: "relative",
                        zIndex: 2,
                        marginBottom: "35px",
                        textAlign: "center"
                    }}
                >

                    <p
                        style={{
                            color: "#61E6D8",
                            letterSpacing: "0.35em",
                            fontSize: "12px",
                            marginBottom: "14px"
                        }}
                    >
                        SUBTEAM 03 · 02 MEMBERS
                    </p>

                    <h1
                        className="display"
                        style={{
                            fontSize: "60px",
                            color: "white",
                            margin: 0,
                            fontWeight: 800,
                            lineHeight: 1
                        }}
                    >
                        Quality Assurance
                    </h1>

                    <p
                        style={{
                            color: "rgba(255,255,255,0.45)",
                            marginTop: "14px",
                            fontSize: "16px"
                        }}
                    >
                        Breaking it before users do.
                    </p>

                </div>


                {/* TEAM CARDS */}

                <div
                    style={{
                        position: "relative",
                        zIndex: 2,
                        display: "flex",
                        gap: "30px",
                        justifyContent: "center"
                    }}
                >

                    {team.map((member, index) => (

                        <div
                            key={index}
                            className="glass"
                            style={{
                                width: "330px",
                                borderRadius: "28px",
                                overflow: "hidden",
                                background: "rgba(255,255,255,0.045)",
                                border:
                                    "1px solid rgba(97,230,216,0.13)",
                                boxShadow:
                                    "0 20px 60px rgba(0,0,0,0.25)"
                            }}
                        >

                            <div
                                style={{
                                    height: "330px",
                                    overflow: "hidden"
                                }}
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover"
                                    }}
                                />
                            </div>

                            <div
                                style={{
                                    padding: "22px"
                                }}
                            >

                                <h2
                                    style={{
                                        color: "white",
                                        margin: 0,
                                        fontSize: "25px",
                                        marginBottom: "6px"
                                    }}
                                >
                                    {member.name}
                                </h2>

                                <p
                                    style={{
                                        color: "rgba(255,255,255,0.55)",
                                        margin: 0,
                                        fontSize: "13px"
                                    }}
                                >
                                    {member.role}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </SlideRoot>
    );
};

/* ---------------- THE GOAL ---------------- */

/* =========================================================
   DIFFERENT ROLES — ONE SHARED GOAL
========================================================= */

window.SharedGoalSlide = () => {

    return (
        <SlideRoot>

            <div
                style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    background: "#050B16"
                }}
            >

                {/* BACKGROUND */}

                <img
                    src="/screenshots/background.png"
                    alt=""
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        //opacity: 0.97,
                        zIndex: 0,
                        pointerEvents: "none"
                    }}
                />

                {/* DARK OVERLAY */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(90deg, rgba(5,11,22,0.82) 0%, rgba(5,11,22,0.62) 38%, rgba(5,11,22,0.48) 70%, rgba(5,11,22,0.55) 100%)",
                        zIndex: 1
                    }}
                />


                {/* GLOW */}

                <div
                    style={{
                        position: "absolute",
                        width: "750px",
                        height: "750px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(142,164,255,0.16), transparent 68%)",
                        filter: "blur(65px)",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)"
                    }}
                />


                {/* CENTER */}

                <div
                    style={{
                        position: "relative",
                        zIndex: 3,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        padding: "70px"
                    }}
                >

                    <div
                        style={{
                            maxWidth: "1200px"
                        }}
                    >

                        {/* LABEL */}

                        <div
                            style={{
                                color: "#61E6D8",
                                fontSize: "11px",
                                fontWeight: 600,
                                letterSpacing: "0.35em",
                                marginBottom: "28px"
                            }}
                        >
                            THE GOAL
                        </div>


                        {/* BIG STATEMENT */}

                        <h1
                            className="display"
                            style={{
                                margin: 0,
                                color: "white",
                                fontSize: "clamp(62px, 7vw, 105px)",
                                lineHeight: "0.92",
                                letterSpacing: "-0.065em"
                            }}
                        >
                            Different roles.
                            <br />

                            <span
                                style={{
                                    background:
                                        "linear-gradient(90deg,#ffffff,#8EA4FF,#61E6D8)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                }}
                            >
                                One product.
                            </span>
                        </h1>


                        {/* LINE */}

                        <div
                            style={{
                                width: "90px",
                                height: "2px",
                                margin: "35px auto",
                                background:
                                    "linear-gradient(90deg,#8EA4FF,#61E6D8)",
                                boxShadow:
                                    "0 0 25px rgba(97,230,216,0.35)"
                            }}
                        />


                        {/* PRODUCT */}

                        <div
                            style={{
                                fontSize: "24px",
                                fontWeight: 600,
                                color: "rgba(255,255,255,0.88)"
                            }}
                        >
                            AEM Event Management System
                        </div>


                        <p
                            style={{
                                marginTop: "14px",
                                color: "rgba(255,255,255,0.42)",
                                fontSize: "16px"
                            }}
                        >
                            Built from the ground up.
                        </p>


                        {/* BOTTOM META */}

                        <div
                            style={{
                                marginTop: "38px",
                                display: "flex",
                                justifyContent: "center",
                                gap: "10px"
                            }}
                        >

                            <div
                                style={{
                                    padding: "9px 17px",
                                    borderRadius: "999px",
                                    background:
                                        "rgba(142,164,255,0.08)",
                                    border:
                                        "1px solid rgba(142,164,255,0.16)",
                                    color: "#8EA4FF",
                                    fontSize: "10px",
                                    letterSpacing: "0.15em"
                                }}
                            >
                                3 MONTHS
                            </div>

                            <div
                                style={{
                                    padding: "9px 17px",
                                    borderRadius: "999px",
                                    background:
                                        "rgba(97,230,216,0.07)",
                                    border:
                                        "1px solid rgba(97,230,216,0.16)",
                                    color: "#61E6D8",
                                    fontSize: "10px",
                                    letterSpacing: "0.15em"
                                }}
                            >
                                1 SHARED GOAL
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </SlideRoot>
    );
};

/* =========================================================
   THE STARTING POINTS
========================================================= */

window.StartingPointSlide = () => {

    const items = [
        {
            title: "FIGMA",
            subtitle: "THE VISION",
            image: "/screenshots/figma.png",
            color: "#8EA4FF"
        },
        {
            title: "SPECIFICATION",
            subtitle: "THE RULES",
            image: "/screenshots/specification.png",
            color: "#61E6D8"
        },
        {
            title: "JIRA",
            subtitle: "THE WORK",
            image: "/screenshots/board.png",
            color: "#8EA4FF"
        }
    ];

    const [selected, setSelected] = React.useState(null);

    return (
        <SlideRoot>

            <style>
                {`
                    @keyframes floatParticle {
                        0% {
                            transform: translateY(0) translateX(0);
                            opacity: 0;
                        }

                        10% {
                            opacity: 0.7;
                        }

                        50% {
                            transform: translateY(-50vh) translateX(20px);
                            opacity: 0.45;
                        }

                        90% {
                            opacity: 0.2;
                        }

                        100% {
                            transform: translateY(-110vh) translateX(-20px);
                            opacity: 0;
                        }
                    }

                    @keyframes modalIn {
                        from {
                            opacity: 0;
                            transform: scale(0.94);
                        }

                        to {
                            opacity: 1;
                            transform: scale(1);
                        }
                    }
                `}
            </style>

            <div
                style={{
                    width: "100%",
                    height: "100%",
                    background: "#050B16",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >

                {/* MAIN GLOW */}

                <div
                    style={{
                        position: "absolute",
                        width: "700px",
                        height: "700px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(142,164,255,0.12), transparent 70%)",
                        filter: "blur(55px)",
                        top: "0",
                        left: "50%",
                        transform: "translateX(-50%)"
                    }}
                />

                {/* SECONDARY GLOW */}

                <div
                    style={{
                        position: "absolute",
                        width: "450px",
                        height: "450px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(97,230,216,0.10), transparent 70%)",
                        filter: "blur(45px)",
                        bottom: "-150px",
                        right: "-100px"
                    }}
                />

                {/* FLOATING PARTICLES */}

                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        overflow: "hidden",
                        pointerEvents: "none",
                        zIndex: 1
                    }}
                >
                    {Array.from({ length: 28 }).map((_, i) => {

                        const size = 2 + (i % 4);
                        const left = (i * 37) % 100;
                        const duration = 7 + (i % 6);
                        const delay = -(i % 8);

                        return (
                            <div
                                key={i}
                                style={{
                                    position: "absolute",
                                    left: `${left}%`,
                                    bottom: "-20px",

                                    width: `${size}px`,
                                    height: `${size}px`,

                                    borderRadius: "50%",

                                    background:
                                        i % 3 === 0
                                            ? "#61E6D8"
                                            : "#8EA4FF",

                                    opacity:
                                        0.35 + (i % 4) * 0.1,

                                    boxShadow:
                                        i % 3 === 0
                                            ? "0 0 12px rgba(97,230,216,0.8)"
                                            : "0 0 12px rgba(142,164,255,0.8)",

                                    animation:
                                        `floatParticle ${duration}s linear infinite`,

                                    animationDelay: `${delay}s`
                                }}
                            />
                        );
                    })}
                </div>

                {/* CONTENT */}

                <div
                    style={{
                        width: "90%",
                        maxWidth: "1250px",
                        position: "relative",
                        zIndex: 2
                    }}
                >

                    {/* HEADER */}

                    <div
                        style={{
                            textAlign: "center",
                            marginBottom: "42px"
                        }}
                    >

                        <div
                            style={{
                                color: "#61E6D8",
                                fontSize: "11px",
                                letterSpacing: "0.32em",
                                fontWeight: 600,
                                marginBottom: "18px"
                            }}
                        >
                            BEFORE THE CODE
                        </div>

                        <h1
                            className="display"
                            style={{
                                margin: 0,
                                color: "white",
                                fontSize: "clamp(52px, 6vw, 80px)",
                                lineHeight: 0.95,
                                letterSpacing: "-0.06em"
                            }}
                        >
                            Three starting points.
                        </h1>

                        <p
                            style={{
                                color: "rgba(255,255,255,0.42)",
                                marginTop: "18px",
                                fontSize: "16px"
                            }}
                        >
                            Before anything was implemented, we had to understand
                            <span
                                style={{
                                    color: "rgba(255,255,255,0.75)"
                                }}
                            >
                                {" "}what to build.
                            </span>
                        </p>

                    </div>


                    {/* CARDS */}

                    <div
                        style={{
                            display: "flex",
                            gap: "24px",
                            justifyContent: "center"
                        }}
                    >

                        {items.map((item, index) => (

                            <div
                                key={index}
                                className="glass"
                                onClick={() => setSelected(item)}
                                style={{
                                    width: "360px",
                                    height: "270px",
                                    borderRadius: "24px",
                                    overflow: "hidden",
                                    position: "relative",
                                    border:
                                        `1px solid ${item.color}22`,
                                    background:
                                        "rgba(255,255,255,0.045)",
                                    boxShadow:
                                        "0 25px 70px rgba(0,0,0,0.28)",

                                    cursor: "pointer",

                                    transition:
                                        "transform 0.3s ease, border 0.3s ease, box-shadow 0.3s ease"
                                }}
                            >

                                {/* SCREENSHOT */}

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        opacity: 0.42
                                    }}
                                />

                                {/* OVERLAY */}

                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background:
                                            "linear-gradient(180deg, rgba(5,11,22,0.15), rgba(5,11,22,0.96))"
                                    }}
                                />

                                {/* CLICK HINT */}

                                <div
                                    style={{
                                        position: "absolute",
                                        top: "18px",
                                        right: "18px",
                                        width: "30px",
                                        height: "30px",
                                        borderRadius: "50%",
                                        border:
                                            `1px solid ${item.color}55`,
                                        background:
                                            "rgba(5,11,22,0.5)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: item.color,
                                        fontSize: "14px"
                                    }}
                                >
                                    ↗
                                </div>

                                {/* TEXT */}

                                <div
                                    style={{
                                        position: "absolute",
                                        left: "24px",
                                        right: "24px",
                                        bottom: "22px"
                                    }}
                                >

                                    <div
                                        style={{
                                            color: item.color,
                                            fontSize: "10px",
                                            fontWeight: 700,
                                            letterSpacing: "0.22em",
                                            marginBottom: "7px"
                                        }}
                                    >
                                        {item.subtitle}
                                    </div>

                                    <div
                                        style={{
                                            color: "white",
                                            fontSize: "25px",
                                            fontWeight: 700,
                                            letterSpacing: "-0.02em"
                                        }}
                                    >
                                        {item.title}
                                    </div>

                                    <div
                                        style={{
                                            marginTop: "7px",
                                            color: "rgba(255,255,255,0.35)",
                                            fontSize: "10px"
                                        }}
                                    >
                                        CLICK TO EXPLORE
                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>


                    {/* FOOTER */}

                    <div
                        style={{
                            textAlign: "center",
                            marginTop: "34px",
                            color: "rgba(255,255,255,0.25)",
                            fontSize: "10px",
                            letterSpacing: "0.22em"
                        }}
                    >
                        VISION → REQUIREMENTS → EXECUTION
                    </div>

                </div>


                {/* FULLSCREEN IMAGE PREVIEW */}

                {selected && (

                    <div
                        onClick={() => setSelected(null)}
                        style={{
                            position: "absolute",
                            inset: 0,
                            zIndex: 20,

                            background:
                                "rgba(2,6,15,0.92)",

                            backdropFilter: "blur(18px)",

                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",

                            padding: "50px",

                            cursor: "zoom-out"
                        }}
                    >

                        <div
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                position: "relative",
                                maxWidth: "92%",
                                maxHeight: "90%",

                                animation:
                                    "modalIn 0.35s ease forwards",

                                borderRadius: "20px",

                                overflow: "hidden",

                                border:
                                    `1px solid ${selected.color}55`,

                                boxShadow:
                                    `0 0 80px ${selected.color}18, 0 30px 100px rgba(0,0,0,0.6)`
                            }}
                        >

                            <img
                                src={selected.image}
                                alt={selected.title}
                                style={{
                                    display: "block",
                                    maxWidth: "90vw",
                                    maxHeight: "82vh",
                                    objectFit: "contain"
                                }}
                            />

                            {/* LABEL */}

                            <div
                                style={{
                                    position: "absolute",
                                    left: "24px",
                                    bottom: "20px",

                                    color: "white",
                                    fontSize: "13px",
                                    fontWeight: 700,
                                    letterSpacing: "0.16em",

                                    textShadow:
                                        "0 2px 15px rgba(0,0,0,0.8)"
                                }}
                            >
                                {selected.title}
                            </div>

                            {/* CLOSE */}

                            <button
                                onClick={() => setSelected(null)}
                                style={{
                                    position: "absolute",
                                    top: "16px",
                                    right: "16px",

                                    width: "36px",
                                    height: "36px",

                                    borderRadius: "50%",
                                    border:
                                        "1px solid rgba(255,255,255,0.2)",

                                    background:
                                        "rgba(5,11,22,0.75)",

                                    color: "white",
                                    fontSize: "18px",

                                    cursor: "pointer"
                                }}
                            >
                                ×
                            </button>

                        </div>

                    </div>

                )}

            </div>

        </SlideRoot>
    );
};

/* =========================================================
   ONE PLATFORM — EVERY EVENT MOMENT
========================================================= */

window.EventPlatformSlide = () => {

    const [selectedImage, setSelectedImage] = React.useState(null);

    const cards = [
        {
            title: "REGISTRATION",
            text: "Create your account and join the event",
            image: "/screenshots/register.png",
            style: {
                width: "390px",
                left: "2%",
                top: "17%",
                rotate: "-6deg"
            },
            delay: "0.1s"
        },
        {
            title: "BUY TICKETS",
            text: "Choose your ticket and secure your spot",
            image: "/screenshots/Buy Tickets Model.png",
            style: {
                width: "420px",
                left: "19%",
                top: "6%",
                rotate: "3deg"
            },
            delay: "0.45s"
        },
        {
            title: "BILLING & PAYMENT",
            text: "Complete your purchase securely",
            image: "/screenshots/Billing.png",
            style: {
                width: "370px",
                right: "18%",
                top: "7%",
                rotate: "-4deg"
            },
            delay: "0.8s"
        },
        {
            title: "INVOICES & RECEIPTS",
            text: "Access your invoices and payment receipts",
            image: "/screenshots/Invoices.png",
            style: {
                width: "390px",
                right: "1%",
                top: "18%",
                rotate: "6deg"
            },
            delay: "1.15s"
        },
        {
            title: "MY TICKETS",
            text: "View and manage your purchased tickets",
            image: "/screenshots/My Ticket.png",
            style: {
                width: "350px",
                left: "4%",
                top: "52%",
                rotate: "5deg"
            },
            delay: "1.5s"
        },
        {
            title: "EVENT DETAIL",
            text: "Explore everything about the event",
            image: "/screenshots/Detail.png",
            style: {
                width: "350px",
                right: "4%",
                top: "52%",
                rotate: "-5deg"
            },
            delay: "1.85s"
        },
        {
            title: "UPCOMING EVENTS",
            text: "Discover upcoming events and experiences",
            image: "/screenshots/events.png",
            style: {
                width: "360px",
                left: "22%",
                bottom: "2%",
                rotate: "-4deg"
            },
            delay: "2.2s"
        },
        {
            title: "HOME PAGE",
            text: "Your starting point for discovering events",
            image: "/screenshots/Home.png",
            style: {
                width: "380px",
                right: "21%",
                bottom: "1%",
                rotate: "4deg"
            },
            delay: "2.55s"
        },
    ];


    return (
        <SlideRoot>

            <div
                style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    background: "#050B16"
                }}
            >

                {/* =================================================
                   ANIMATIONS
                ================================================= */}

                <style>
                    {`

                        @keyframes popIn {

                            0% {
                                opacity: 0;
                                transform:
                                    scale(0.45)
                                    translateY(100px);
                            }

                            65% {
                                opacity: 1;
                                transform:
                                    scale(1.07)
                                    translateY(-8px);
                            }

                            100% {
                                opacity: 1;
                                transform:
                                    scale(1)
                                    translateY(0);
                            }

                        }

                        @keyframes popInLeft {

                            0% {
                                opacity: 0;
                                transform:
                                    translateX(-180px)
                                    scale(0.7)
                                    rotate(-10deg);
                            }

                            70% {
                                opacity: 1;
                                transform:
                                    translateX(15px)
                                    scale(1.04)
                                    rotate(-5deg);
                            }

                            100% {
                                opacity: 1;
                            }

                        }

                        @keyframes popInRight {

                            0% {
                                opacity: 0;
                                transform:
                                    translateX(180px)
                                    scale(0.7)
                                    rotate(10deg);
                            }

                            70% {
                                opacity: 1;
                                transform:
                                    translateX(-15px)
                                    scale(1.04)
                                    rotate(5deg);
                            }

                            100% {
                                opacity: 1;
                            }

                        }

                        @keyframes centerPop {

                            0% {
                                opacity: 0;
                                transform:
                                    translate(-50%, -50%)
                                    scale(0.4);
                            }

                            70% {
                                opacity: 1;
                                transform:
                                    translate(-50%, -50%)
                                    scale(1.08);
                            }

                            100% {
                                opacity: 1;
                                transform:
                                    translate(-50%, -50%)
                                    scale(1);
                            }

                        }

                        @keyframes floating {

                            0%, 100% {
                                margin-top: 0;
                            }

                            50% {
                                margin-top: -10px;
                            }

                        }

                        @keyframes glow {

                            0%, 100% {
                                opacity: 0.25;
                            }

                            50% {
                                opacity: 0.55;
                            }

                        }

                        @keyframes modalImageIn {

                            0% {
                                opacity: 0;
                                transform: scale(0.88);
                            }

                            100% {
                                opacity: 1;
                                transform: scale(1);
                            }

                        }

                        @keyframes modalBackgroundIn {

                            0% {
                                opacity: 0;
                            }

                            100% {
                                opacity: 1;
                            }

                        }

                    `}
                </style>


                {/* =================================================
                   BACKGROUND
                ================================================= */}

                <div
                    style={{
                        position: "absolute",
                        width: "1000px",
                        height: "1000px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(142,164,255,0.16), transparent 68%)",
                        filter: "blur(80px)",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        animation: "glow 6s ease-in-out infinite"
                    }}
                />

                <div
                    style={{
                        position: "absolute",
                        width: "600px",
                        height: "600px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(97,230,216,0.10), transparent 70%)",
                        filter: "blur(70px)",
                        bottom: "-250px",
                        right: "-100px"
                    }}
                />


                {/* =================================================
                   HEADER
                ================================================= */}

                <div
                    style={{
                        position: "absolute",
                        left: "6%",
                        top: "6%",
                        zIndex: 20,
                        pointerEvents: "none"
                    }}
                >

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            marginBottom: "15px"
                        }}
                    >

                        <div
                            style={{
                                width: "42px",
                                height: "2px",
                                background:
                                    "linear-gradient(90deg,#61E6D8,#8EA4FF)"
                            }}
                        />

                        <span
                            style={{
                                color: "#61E6D8",
                                fontSize: "11px",
                                fontWeight: 600,
                                letterSpacing: "0.32em"
                            }}
                        >
                            THE IDEA
                        </span>

                    </div>


                    <h1
                        className="display"
                        style={{
                            margin: 0,
                            fontSize: "clamp(48px, 5vw, 76px)",
                            lineHeight: "0.9",
                            letterSpacing: "-0.065em",
                            background:
                                "linear-gradient(90deg, #d7fcfc 0%, #d7fcfc 38%, #8FEDE5 72%, #61E6D8 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            textShadow: "0 2px 12px rgba(120,150,190,0.18)"
                        }}
                    >
                        One platform.
                        <br />

                        <span
                            style={{
                                background:
                                    "linear-gradient(180deg, #61E6D8 0%, #3BBEB5 50%, #16756F 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            }}
                        >
                            Every event moment.
                        </span>
                    </h1>
                </div>


                {/* =================================================
                   CENTER MESSAGE
                ================================================= */}

                <div
                    style={{
                        position: "absolute",
                        left: "50%",
                        top: "51%",
                        transform: "translate(-50%, -50%)",
                        zIndex: 10,
                        width: "300px",
                        textAlign: "center",
                        pointerEvents: "none"
                    }}
                >

                    <div
                        style={{
                            width: "125px",
                            height: "125px",
                            borderRadius: "50%",
                            margin: "0 auto 20px",
                            padding: "2px",
                            background:
                                "linear-gradient(135deg,#8EA4FF,#61E6D8)",
                            boxShadow:
                                "0 0 90px rgba(97,230,216,0.22)"
                        }}
                    >

                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: "50%",
                                background: "#07101d",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "white",
                                fontSize: "30px"
                            }}
                        >
                            ✦
                        </div>

                    </div>


                    <div
                        style={{
                            fontSize: "19px",
                            fontWeight: 600,
                            color: "rgba(255,255,255,0.9)"
                        }}
                    >
                        Discover.
                        <br />
                        Explore.
                        <br />
                        Experience.
                    </div>

                </div>


                {/* =================================================
                   SCREENSHOT POP UPS
                ================================================= */}

                {cards.map((card, index) => {

                    const isLeft = index % 2 === 0;

                    return (
                        <div
                            key={index}
                            style={{
                                position: "absolute",
                                ...card.style,
                                zIndex: 5 + index,
                                animation:
                                    `${isLeft ? "popInLeft" : "popInRight"} 0.9s cubic-bezier(.2,.8,.2,1) ${card.delay} both`
                            }}
                        >

                            <div
                                style={{
                                    borderRadius: "22px",
                                    overflow: "hidden",
                                    background:
                                        "rgba(255,255,255,0.055)",
                                    border:
                                        "1px solid rgba(255,255,255,0.13)",
                                    boxShadow:
                                        "0 30px 90px rgba(0,0,0,0.55)",
                                    backdropFilter: "blur(12px)"
                                }}
                            >

                                {/* IMAGE */}

                                <div
                                    style={{
                                        position: "relative",
                                        overflow: "hidden"
                                    }}
                                >

                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        onClick={() =>
                                            setSelectedImage(card.image)
                                        }
                                        style={{
                                            display: "block",
                                            width: "100%",
                                            height: "230px",
                                            objectFit: "cover",
                                            cursor: "zoom-in",
                                            transition:
                                                "transform 0.3s ease"
                                        }}
                                    />

                                    {/* IMAGE GLOW */}

                                    <div
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            background:
                                                "linear-gradient(180deg, transparent 55%, rgba(5,11,22,0.65))",
                                            pointerEvents: "none"
                                        }}
                                    />

                                </div>


                                {/* CARD INFO */}

                                <div
                                    style={{
                                        padding: "15px 18px 17px",
                                        background:
                                            "rgba(5,11,22,0.94)"
                                    }}
                                >

                                    <div
                                        style={{
                                            color:
                                                index % 2 === 0
                                                    ? "#8EA4FF"
                                                    : "#61E6D8",
                                            fontSize: "10px",
                                            fontWeight: 700,
                                            letterSpacing: "0.2em",
                                            marginBottom: "5px"
                                        }}
                                    >
                                        {card.title}
                                    </div>

                                    <div
                                        style={{
                                            color:
                                                "rgba(255,255,255,0.48)",
                                            fontSize: "12px"
                                        }}
                                    >
                                        {card.text}
                                    </div>

                                </div>

                            </div>

                        </div>
                    );
                })}


                {/* =================================================
                   BOTTOM MESSAGE
                ================================================= */}

                <div
                    style={{
                        position: "absolute",
                        bottom: "4%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 30,
                        color: "rgba(255,255,255,0.3)",
                        fontSize: "9px",
                        letterSpacing: "0.22em",
                        whiteSpace: "nowrap"
                    }}
                >
                    DISCOVER · DETAILS · AGENDA · SPEAKERS · REGISTER · TICKETS
                </div>


                {/* =================================================
                   FULLSCREEN IMAGE MODAL
                ================================================= */}

                {selectedImage && (

                    <div
                        onClick={() => setSelectedImage(null)}
                        style={{
                            position: "fixed",
                            inset: 0,
                            zIndex: 99999,
                            background:
                                "rgba(2,6,15,0.94)",
                            backdropFilter: "blur(18px)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "40px",
                            cursor: "zoom-out",
                            animation:
                                "modalBackgroundIn 0.25s ease-out"
                        }}
                    >

                        {/* CLOSE BUTTON */}

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                            style={{
                                position: "absolute",
                                top: "28px",
                                right: "32px",
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                                border:
                                    "1px solid rgba(255,255,255,0.2)",
                                background:
                                    "rgba(255,255,255,0.08)",
                                color: "white",
                                fontSize: "30px",
                                lineHeight: "1",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 100000,
                                transition:
                                    "all 0.2s ease"
                            }}
                        >
                            ×
                        </button>


                        {/* IMAGE CONTAINER */}

                        <div
                            style={{
                                position: "relative",
                                maxWidth: "94vw",
                                maxHeight: "90vh",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                            onClick={(e) =>
                                e.stopPropagation()
                            }
                        >

                            <img
                                src={selectedImage}
                                alt="Full size preview"
                                style={{
                                    display: "block",
                                    maxWidth: "94vw",
                                    maxHeight: "90vh",
                                    width: "auto",
                                    height: "auto",
                                    objectFit: "contain",
                                    borderRadius: "18px",
                                    boxShadow:
                                        "0 40px 120px rgba(0,0,0,0.75)",
                                    animation:
                                        "modalImageIn 0.35s cubic-bezier(.2,.8,.2,1)"
                                }}
                            />

                        </div>


                        {/* HINT */}

                        <div
                            style={{
                                position: "absolute",
                                bottom: "25px",
                                left: "50%",
                                transform:
                                    "translateX(-50%)",
                                color:
                                    "rgba(255,255,255,0.4)",
                                fontSize: "10px",
                                letterSpacing: "0.18em",
                                whiteSpace: "nowrap"
                            }}
                        >
                            CLICK OUTSIDE TO CLOSE
                        </div>

                    </div>

                )}

            </div>

        </SlideRoot>
    );
};

/* VARIANT 2 - BUT FINAL */
window.FromVisionToWorkSlide = () => {

    return (
        <SlideRoot>

            <div
                style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    background: "#050B16",
                    color: "white"
                }}
            >

                <style>
                    {`

                    @keyframes fadeUp {
                        from {
                            opacity: 0;
                            transform: translateY(25px);
                        }

                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes floatParticle {
                        0% {
                            transform: translateY(0);
                            opacity: 0;
                        }

                        15% {
                            opacity: .7;
                        }

                        80% {
                            opacity: .25;
                        }

                        100% {
                            transform: translateY(-100vh);
                            opacity: 0;
                        }
                    }

                    @keyframes flowForward {
                        0% {
                            offset-distance: 0%;
                            opacity: 0;
                        }

                        8% {
                            opacity: 1;
                        }

                        88% {
                            opacity: 1;
                        }

                        100% {
                            offset-distance: 100%;
                            opacity: 0;
                        }
                    }

                    @keyframes flowReverse {
                        0% {
                            offset-distance: 0%;
                            opacity: 0;
                        }

                        10% {
                            opacity: 1;
                        }

                        85% {
                            opacity: 1;
                        }

                        100% {
                            offset-distance: 100%;
                            opacity: 0;
                        }
                    }

                    @keyframes nodeGlow {
                        0%,100% {
                            box-shadow:
                                0 0 0 rgba(97,230,216,0),
                                0 0 25px rgba(97,230,216,.08);
                        }

                        50% {
                            box-shadow:
                                0 0 0 8px rgba(97,230,216,.02),
                                0 0 55px rgba(97,230,216,.35);
                        }
                    }

                    @keyframes blueGlow {
                        0%,100% {
                            box-shadow:
                                0 0 20px rgba(142,164,255,.08);
                        }

                        50% {
                            box-shadow:
                                0 0 50px rgba(142,164,255,.3);
                        }
                    }

                    @keyframes doneGlow {
                        0%,100% {
                            box-shadow:
                                0 0 25px rgba(97,230,216,.15);
                        }

                        50% {
                            box-shadow:
                                0 0 70px rgba(97,230,216,.5);
                        }
                    }

                    @keyframes bugGlow {
                        0%,100% {
                            box-shadow:
                                0 0 15px rgba(255,143,163,.08);
                        }

                        50% {
                            box-shadow:
                                0 0 35px rgba(255,143,163,.35);
                        }
                    }

                    @keyframes dashMove {
                        to {
                            stroke-dashoffset: -36;
                        }
                    }

                    @keyframes pulseDot {
                        0%,100% {
                            transform: scale(1);
                            opacity: .65;
                        }

                        50% {
                            transform: scale(1.5);
                            opacity: 1;
                        }
                    }

                    `}
                </style>


                {/* ================================================= */}
                {/* BACKGROUND GLOWS                                  */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "absolute",
                        width: "850px",
                        height: "850px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(142,164,255,.13), transparent 68%)",
                        filter: "blur(90px)",
                        top: "-450px",
                        left: "-250px"
                    }}
                />

                <div
                    style={{
                        position: "absolute",
                        width: "750px",
                        height: "750px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(97,230,216,.10), transparent 68%)",
                        filter: "blur(90px)",
                        bottom: "-420px",
                        right: "-250px"
                    }}
                />


                {/* ================================================= */}
                {/* BACKGROUND PARTICLES                              */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        pointerEvents: "none",
                        overflow: "hidden"
                    }}
                >

                    {Array.from({ length: 32 }).map((_, i) => (

                        <div
                            key={i}
                            style={{
                                position: "absolute",

                                left:
                                    `${(i * 37) % 100}%`,

                                bottom: "-10px",

                                width:
                                    `${2 + (i % 3)}px`,

                                height:
                                    `${2 + (i % 3)}px`,

                                borderRadius: "50%",

                                background:
                                    i % 2
                                        ? "#8EA4FF"
                                        : "#61E6D8",

                                boxShadow:
                                    "0 0 14px currentColor",

                                animation:
                                    `floatParticle ${7 + i % 6}s linear infinite`,

                                animationDelay:
                                    `${-(i % 8)}s`
                            }}
                        />

                    ))}

                </div>


                {/* ================================================= */}
                {/* MAIN CONTAINER                                    */}
                {/* ================================================= */}

                <div
                    style={{
                        width: "91%",
                        maxWidth: "1380px",
                        height: "100%",
                        margin: "0 auto",
                        position: "relative",
                        zIndex: 5,
                        paddingTop: "58px"
                    }}
                >


                    {/* ================================================= */}
                    {/* HEADER                                            */}
                    {/* ================================================= */}

                    <div
                        style={{
                            textAlign: "center",
                            animation: "fadeUp .7s ease-out"
                        }}
                    >

                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "12px",
                                marginBottom: "15px"
                            }}
                        >

                            <div
                                style={{
                                    width: "38px",
                                    height: "2px",
                                    background:
                                        "linear-gradient(90deg,#8EA4FF,#61E6D8)"
                                }}
                            />

                            <span
                                style={{
                                    color: "#61E6D8",
                                    fontSize: "9px",
                                    fontWeight: 700,
                                    letterSpacing: ".34em"
                                }}
                            >
                                THE LIFE OF A TICKET
                            </span>

                            <div
                                style={{
                                    width: "38px",
                                    height: "2px",
                                    background:
                                        "linear-gradient(90deg,#61E6D8,#8EA4FF)"
                                }}
                            />

                        </div>


                        <h1
                            className="display"
                            style={{
                                margin: 0,
                                fontSize: "clamp(52px,6vw,80px)",
                                lineHeight: ".88",
                                letterSpacing: "-.065em"
                            }}
                        >

                            From ticket

                            <br />

                            <span
                                style={{
                                    background:
                                        "linear-gradient(90deg,#fff,#8EA4FF,#61E6D8)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                }}
                            >
                                to done.
                            </span>

                        </h1>


                        <p
                            style={{
                                marginTop: "16px",
                                color: "rgba(255,255,255,.38)",
                                fontSize: "14px"
                            }}
                        >
                            One ticket. Multiple hands. One final decision.
                        </p>

                    </div>


                    {/* ================================================= */}
                    {/* GRAPH AREA                                       */}
                    {/* ================================================= */}

                    <div
                        style={{
                            position: "relative",
                            height: "440px",
                            marginTop: "36px"
                        }}
                    >


                        {/* ================================================= */}
                        {/* DEVELOPMENT SECTION                              */}
                        {/* ================================================= */}

                        <div
                            style={{
                                position: "absolute",
                                left: "17%",
                                top: "4px",
                                color: "rgba(142,164,255,.45)",
                                fontSize: "8px",
                                letterSpacing: ".28em",
                                fontWeight: 700
                            }}
                        >
                            DEVELOPMENT
                        </div>


                        {/* ================================================= */}
                        {/* QUALITY SECTION                                   */}
                        {/* ================================================= */}

                        <div
                            style={{
                                position: "absolute",
                                left: "63%",
                                top: "4px",
                                color: "rgba(97,230,216,.45)",
                                fontSize: "8px",
                                letterSpacing: ".28em",
                                fontWeight: 700
                            }}
                        >
                            QUALITY
                        </div>


                        {/* ================================================= */}
                        {/* SVG FLOW                                          */}
                        {/* ================================================= */}

                        <svg
                            viewBox="0 0 1000 440"
                            preserveAspectRatio="none"
                            style={{
                                position: "absolute",
                                inset: 0,
                                width: "100%",
                                height: "100%",
                                overflow: "visible",
                                pointerEvents: "none"
                            }}
                        >

                            <defs>

                                <linearGradient
                                    id="mainFlowGradient"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="0%"
                                >

                                    <stop
                                        offset="0%"
                                        stopColor="#8EA4FF"
                                        stopOpacity=".25"
                                    />

                                    <stop
                                        offset="30%"
                                        stopColor="#8EA4FF"
                                        stopOpacity=".8"
                                    />

                                    <stop
                                        offset="52%"
                                        stopColor="#61E6D8"
                                        stopOpacity=".95"
                                    />

                                    <stop
                                        offset="100%"
                                        stopColor="#61E6D8"
                                        stopOpacity=".45"
                                    />

                                </linearGradient>


                                <linearGradient
                                    id="branchGradient"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="100%"
                                >

                                    <stop
                                        offset="0%"
                                        stopColor="#8EA4FF"
                                        stopOpacity=".8"
                                    />

                                    <stop
                                        offset="100%"
                                        stopColor="#61E6D8"
                                        stopOpacity=".6"
                                    />

                                </linearGradient>


                                <linearGradient
                                    id="bugGradient"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="0%"
                                >

                                    <stop
                                        offset="0%"
                                        stopColor="#FF8FA3"
                                        stopOpacity=".95"
                                    />

                                    <stop
                                        offset="100%"
                                        stopColor="#8EA4FF"
                                        stopOpacity=".55"
                                    />

                                </linearGradient>

                            </defs>


                            {/* ============================================= */}
                            {/* TICKET → DEVELOPMENT                         */}
                            {/* ============================================= */}

                            <path
                                d="
                                    M70 220
                                    C140 220
                                    220 220
                                    290 220
                                "
                                fill="none"
                                stroke="url(#mainFlowGradient)"
                                strokeWidth="3"
                                strokeLinecap="round"
                                opacity=".8"
                            />


                            {/* ============================================= */}
                            {/* DEVELOPMENT → SYNC                           */}
                            {/* ============================================= */}

                            <path
                                d="
                                    M290 220
                                    C355 220
                                    430 220
                                    500 220
                                "
                                fill="none"
                                stroke="url(#mainFlowGradient)"
                                strokeWidth="3"
                                strokeLinecap="round"
                                opacity=".8"
                            />


                            {/* ============================================= */}
                            {/* SYNC → QA                                     */}
                            {/* ============================================= */}

                            <path
                                d="
                                    M500 220
                                    C565 220
                                    645 220
                                    710 220
                                "
                                fill="none"
                                stroke="#61E6D8"
                                strokeWidth="3"
                                strokeLinecap="round"
                                opacity=".8"
                            />


                            {/* ============================================= */}
                            {/* QA → DONE                                     */}
                            {/* ============================================= */}

                            <path
                                d="
                                    M710 220
                                    C780 220
                                    860 220
                                    930 220
                                "
                                fill="none"
                                stroke="#61E6D8"
                                strokeWidth="4"
                                strokeLinecap="round"
                                opacity=".85"
                            />


                            {/* ============================================= */}
                            {/* DEVELOPMENT → BACKEND                        */}
                            {/* ============================================= */}

                            <path
                                d="
                                    M290 220
                                    C255 185
                                    235 135
                                    210 95
                                "
                                fill="none"
                                stroke="url(#branchGradient)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                opacity=".6"
                            />


                            {/* ============================================= */}
                            {/* DEVELOPMENT → FRONTEND                       */}
                            {/* ============================================= */}

                            <path
                                d="
                                    M290 220
                                    C255 255
                                    235 305
                                    210 345
                                "
                                fill="none"
                                stroke="url(#branchGradient)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                opacity=".6"
                            />


                            {/* ============================================= */}
                            {/* BACKEND → SYNC                               */}
                            {/* ============================================= */}

                            <path
                                d="
                                    M210 95
                                    C315 88
                                    420 110
                                    500 220
                                "
                                fill="none"
                                stroke="#8EA4FF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                opacity=".35"
                            />


                            {/* ============================================= */}
                            {/* FRONTEND → SYNC                              */}
                            {/* ============================================= */}

                            <path
                                d="
                                    M210 345
                                    C315 352
                                    420 330
                                    500 220
                                "
                                fill="none"
                                stroke="#8EA4FF"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                opacity=".35"
                            />


                            {/* ============================================= */}
                            {/* DEVELOPMENT NODE                             */}
                            {/* ============================================= */}

                            <circle
                                cx="290"
                                cy="220"
                                r="5"
                                fill="#8EA4FF"
                                opacity=".9"
                            />


                            {/* ============================================= */}
                            {/* SYNC NODE                                     */}
                            {/* ============================================= */}

                            <circle
                                cx="500"
                                cy="220"
                                r="5"
                                fill="#61E6D8"
                                opacity=".9"
                            />


                            {/* ============================================= */}
                            {/* QA NODE                                       */}
                            {/* ============================================= */}

                            <circle
                                cx="710"
                                cy="220"
                                r="5"
                                fill="#61E6D8"
                                opacity=".9"
                            />


                            {/* ============================================= */}
                            {/* DONE NODE                                     */}
                            {/* ============================================= */}

                            <circle
                                cx="930"
                                cy="220"
                                r="5"
                                fill="#61E6D8"
                                opacity=".95"
                            />


                            {/* ============================================= */}
                            {/* BUG RETURN LOOP                               */}
                            {/* ============================================= */}

                            <path
                                d="
                                    M710 220
                                    C765 275
                                    760 350
                                    650 380
                                    C520 410
                                    370 385
                                    290 275
                                "
                                fill="none"
                                stroke="url(#bugGradient)"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeDasharray="8 10"
                                opacity=".75"
                                style={{
                                    animation:
                                        "dashMove 2.5s linear infinite"
                                }}
                            />


                            {/* ============================================= */}
                            {/* BUG RETURN ARROW                              */}
                            {/* ============================================= */}

                            <path
                                d="
                                    M290 275
                                    L307 268
                                    M290 275
                                    L302 286
                                "
                                fill="none"
                                stroke="#FF8FA3"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                opacity=".9"
                            />

                        </svg>


                        {/* ================================================= */}
                        {/* MAIN MOVING PARTICLE                             */}
                        {/* ================================================= */}

                        <div
                            style={{
                                position: "absolute",

                                width: "10px",
                                height: "10px",

                                borderRadius: "50%",

                                background: "#61E6D8",

                                boxShadow:
                                    "0 0 10px #61E6D8, 0 0 30px #61E6D8, 0 0 55px rgba(97,230,216,.5)",

                                offsetPath: `
                                    path("M70 220
                                          C140 220 220 220 290 220
                                          C355 220 430 220 500 220
                                          C565 220 645 220 710 220
                                          C780 220 860 220 930 220")
                                `,

                                offsetDistance: "0%",

                                animation:
                                    "flowForward 11s linear infinite",

                                zIndex: 30,

                                transform:
                                    "translate(-50%, -50%)"
                            }}
                        />


                        {/* ================================================= */}
                        {/* SECOND PARTICLE                                  */}
                        {/* ================================================= */}

                        <div
                            style={{
                                position: "absolute",

                                width: "5px",
                                height: "5px",

                                borderRadius: "50%",

                                background: "#8EA4FF",

                                boxShadow:
                                    "0 0 18px #8EA4FF",

                                offsetPath: `
                                    path("M70 220
                                          C140 220 220 220 290 220
                                          C355 220 430 220 500 220
                                          C565 220 645 220 710 220
                                          C780 220 860 220 930 220")
                                `,

                                offsetDistance: "0%",

                                animation:
                                    "flowForward 11s linear infinite",

                                animationDelay:
                                    "-3.7s",

                                zIndex: 28
                            }}
                        />


                        {/* ================================================= */}
                        {/* THIRD PARTICLE                                   */}
                        {/* ================================================= */}

                        <div
                            style={{
                                position: "absolute",

                                width: "4px",
                                height: "4px",

                                borderRadius: "50%",

                                background: "#61E6D8",

                                boxShadow:
                                    "0 0 16px #61E6D8",

                                offsetPath: `
                                    path("M70 220
                                          C140 220 220 220 290 220
                                          C355 220 430 220 500 220
                                          C565 220 645 220 710 220
                                          C780 220 860 220 930 220")
                                `,

                                offsetDistance: "0%",

                                animation:
                                    "flowForward 11s linear infinite",

                                animationDelay:
                                    "-7.2s",

                                zIndex: 27
                            }}
                        />


                        {/* ================================================= */}
                        {/* TICKET                                           */}
                        {/* ================================================= */}

                        <div
                            style={{
                                position: "absolute",
                                left: "7%",
                                top: "calc(50% - 31px)",
                                transform: "translateX(-50%)",
                                textAlign: "center",
                                zIndex: 10
                            }}
                        >

                            <div
                                style={{
                                    width: "62px",
                                    height: "62px",
                                    borderRadius: "50%",

                                    background: "#050B16",

                                    border:
                                        "1px solid rgba(142,164,255,.65)",

                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",

                                    color: "#8EA4FF",

                                    fontSize: "22px",

                                    boxShadow:
                                        "0 0 35px rgba(142,164,255,.15)"
                                }}
                            >
                                ✦
                            </div>


                            <div
                                style={{
                                    marginTop: "13px",
                                    color: "#8EA4FF",
                                    fontSize: "10px",
                                    fontWeight: 700,
                                    letterSpacing: ".18em"
                                }}
                            >
                                TICKET
                            </div>


                            <div
                                style={{
                                    marginTop: "5px",
                                    color: "rgba(255,255,255,.27)",
                                    fontSize: "8px",
                                    letterSpacing: ".14em"
                                }}
                            >
                                ARRIVES
                            </div>

                        </div>


                        {/* ================================================= */}
                        {/* DEVELOPMENT                                      */}
                        {/* ================================================= */}

                        <div
                            style={{
                                position: "absolute",
                                left: "29%",
                                top: "calc(50% - 31px)",
                                transform: "translateX(-50%)",
                                textAlign: "center",
                                zIndex: 10
                            }}
                        >

                            <div
                                style={{
                                    width: "72px",
                                    height: "72px",
                                    borderRadius: "50%",

                                    background: "#050B16",

                                    border:
                                        "1px solid rgba(142,164,255,.8)",

                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",

                                    color: "#8EA4FF",

                                    fontSize: "19px",
                                    fontWeight: 700,

                                    boxShadow:
                                        "0 0 40px rgba(142,164,255,.18)",

                                    animation:
                                        "blueGlow 3s ease-in-out infinite"
                                }}
                            >
                                &lt;/&gt;
                            </div>


                            <div
                                style={{
                                    marginTop: "13px",
                                    color: "#8EA4FF",
                                    fontSize: "11px",
                                    fontWeight: 700,
                                    letterSpacing: ".16em"
                                }}
                            >
                                DEVELOPMENT
                            </div>


                            <div
                                style={{
                                    marginTop: "5px",
                                    color: "rgba(255,255,255,.27)",
                                    fontSize: "8px",
                                    letterSpacing: ".14em"
                                }}
                            >
                                BUILD
                            </div>

                        </div>


                        {/* ================================================= */}
                        {/* BACKEND                                          */}
                        {/* ================================================= */}

                        <div
                            style={{
                                position: "absolute",

                                left: "21%",

                                top: "calc(50% - 125px)",

                                transform:
                                    "translate(-50%, -50%)",

                                display: "flex",
                                alignItems: "center",
                                gap: "7px"
                            }}
                        >

                            <span
                                style={{
                                    width: "7px",
                                    height: "7px",
                                    borderRadius: "50%",

                                    background: "#8EA4FF",

                                    boxShadow:
                                        "0 0 14px #8EA4FF",

                                    animation:
                                        "pulseDot 2.5s ease-in-out infinite"
                                }}
                            />

                            <span
                                style={{
                                    padding: "6px 11px",

                                    borderRadius: "20px",

                                    border:
                                        "1px solid rgba(142,164,255,.2)",

                                    background:
                                        "rgba(142,164,255,.05)",

                                    color:
                                        "rgba(255,255,255,.45)",

                                    fontSize: "7px",

                                    fontWeight: 700,

                                    letterSpacing: ".12em"
                                }}
                            >
                                BACKEND
                            </span>

                        </div>


                        {/* ================================================= */}
                        {/* FRONTEND                                         */}
                        {/* ================================================= */}

                        <div
                            style={{
                                position: "absolute",

                                left: "21%",

                                top: "calc(50% + 125px)",

                                transform:
                                    "translate(-50%, -50%)",

                                display: "flex",
                                alignItems: "center",
                                gap: "7px"
                            }}
                        >

                            <span
                                style={{
                                    width: "7px",
                                    height: "7px",
                                    borderRadius: "50%",

                                    background: "#8EA4FF",

                                    boxShadow:
                                        "0 0 14px #8EA4FF",

                                    animation:
                                        "pulseDot 2.5s ease-in-out infinite",

                                    animationDelay:
                                        ".8s"
                                }}
                            />

                            <span
                                style={{
                                    padding: "6px 11px",

                                    borderRadius: "20px",

                                    border:
                                        "1px solid rgba(142,164,255,.2)",

                                    background:
                                        "rgba(142,164,255,.05)",

                                    color:
                                        "rgba(255,255,255,.45)",

                                    fontSize: "7px",

                                    fontWeight: 700,

                                    letterSpacing: ".12em"
                                }}
                            >
                                FRONTEND
                            </span>

                        </div>


                        {/* ================================================= */}
                        {/* SYNC                                             */}
                        {/* ================================================= */}

                        <div
                            style={{
                                position: "absolute",

                                left: "50%",

                                top: "50%",

                                transform:
                                    "translate(-50%, -50%)",

                                textAlign: "center",

                                zIndex: 10
                            }}
                        >

                            <div
                                style={{
                                    width: "62px",
                                    height: "62px",

                                    borderRadius: "50%",

                                    background: "#050B16",

                                    border:
                                        "1px solid rgba(97,230,216,.75)",

                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",

                                    color: "#61E6D8",

                                    fontSize: "23px",

                                    boxShadow:
                                        "0 0 38px rgba(97,230,216,.18)",

                                    animation:
                                        "nodeGlow 2.7s ease-in-out infinite"
                                }}
                            >
                                ↔
                            </div>


                            <div
                                style={{
                                    marginTop: "13px",

                                    color: "#61E6D8",

                                    fontSize: "10px",

                                    fontWeight: 700,

                                    letterSpacing: ".18em"
                                }}
                            >
                                BE ↔ FE
                            </div>


                            <div
                                style={{
                                    marginTop: "5px",

                                    color:
                                        "rgba(255,255,255,.27)",

                                    fontSize: "8px",

                                    letterSpacing: ".1em"
                                }}
                            >
                                SYNC
                            </div>

                        </div>


                        {/* ================================================= */}
                        {/* QA                                               */}
                        {/* ================================================= */}

                        <div
                            style={{
                                position: "absolute",

                                left: "71%",

                                top: "calc(50% - 31px)",

                                transform:
                                    "translateX(-50%)",

                                textAlign: "center",

                                zIndex: 10
                            }}
                        >

                            <div
                                style={{
                                    width: "72px",
                                    height: "72px",

                                    borderRadius: "50%",

                                    background: "#050B16",

                                    border:
                                        "1px solid rgba(97,230,216,.85)",

                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",

                                    color: "#61E6D8",

                                    fontSize: "24px",

                                    boxShadow:
                                        "0 0 45px rgba(97,230,216,.2)",

                                    animation:
                                        "nodeGlow 2.5s ease-in-out infinite"
                                }}
                            >
                                ◌
                            </div>


                            <div
                                style={{
                                    marginTop: "13px",

                                    color: "#61E6D8",

                                    fontSize: "11px",

                                    fontWeight: 700,

                                    letterSpacing: ".18em"
                                }}
                            >
                                QA
                            </div>


                            <div
                                style={{
                                    marginTop: "5px",

                                    color:
                                        "rgba(255,255,255,.27)",

                                    fontSize: "8px",

                                    letterSpacing: ".12em"
                                }}
                            >
                                VERIFICATION
                            </div>

                        </div>


                        {/* ================================================= */}
                        {/* QA TAKES OVER                                    */}
                        {/* ================================================= */}

                        <div
                            style={{
                                position: "absolute",

                                left: "71%",

                                top: "calc(50% + 75px)",

                                transform:
                                    "translateX(-50%)",

                                padding:
                                    "7px 16px",

                                borderRadius:
                                    "20px",

                                background:
                                    "rgba(97,230,216,.045)",

                                border:
                                    "1px solid rgba(97,230,216,.16)",

                                color:
                                    "#61E6D8",

                                fontSize: "7px",

                                fontWeight: 700,

                                letterSpacing: ".15em"
                            }}
                        >
                            QA TAKES OVER
                        </div>


                        {/* ================================================= */}
                        {/* BUG FOUND                                        */}
                        {/* ================================================= */}

                        <div
                            style={{
                                position: "absolute",

                                left: "63%",

                                bottom: "34px",

                                transform:
                                    "translateX(-50%)",

                                display: "flex",
                                alignItems: "center",
                                gap: "8px",

                                padding:
                                    "8px 16px",

                                borderRadius: "22px",

                                background:
                                    "rgba(255,143,163,.05)",

                                border:
                                    "1px solid rgba(255,143,163,.24)",

                                color:
                                    "#FF8FA3",

                                fontSize: "8px",

                                fontWeight: 700,

                                letterSpacing: ".14em",

                                animation:
                                    "bugGlow 2.5s ease-in-out infinite"
                            }}
                        >

                            <span
                                style={{
                                    width: "6px",
                                    height: "6px",

                                    borderRadius: "50%",

                                    background:
                                        "#FF8FA3",

                                    boxShadow:
                                        "0 0 12px #FF8FA3"
                                }}
                            />

                            BUG FOUND

                        </div>


                        {/* ================================================= */}
                        {/* DONE                                             */}
                        {/* ================================================= */}

                        <div
                            style={{
                                position: "absolute",

                                left: "93%",

                                top: "calc(50% - 31px)",

                                transform:
                                    "translateX(-50%)",

                                textAlign: "center",

                                zIndex: 10
                            }}
                        >

                            <div
                                style={{
                                    width: "78px",
                                    height: "78px",

                                    borderRadius: "50%",

                                    background:
                                        "rgba(97,230,216,.025)",

                                    border:
                                        "1px solid rgba(97,230,216,.9)",

                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",

                                    color:
                                        "#61E6D8",

                                    fontSize: "27px",

                                    animation:
                                        "doneGlow 2.8s ease-in-out infinite"
                                }}
                            >
                                ✓
                            </div>


                            <div
                                style={{
                                    marginTop: "13px",

                                    color:
                                        "#61E6D8",

                                    fontSize: "12px",

                                    fontWeight: 700,

                                    letterSpacing: ".2em"
                                }}
                            >
                                DONE
                            </div>


                            <div
                                style={{
                                    marginTop: "5px",

                                    color:
                                        "rgba(255,255,255,.3)",

                                    fontSize: "8px",

                                    letterSpacing: ".16em"
                                }}
                            >
                                CLOSED
                            </div>

                        </div>


                        {/* ================================================= */}
                        {/* BUG RETURN TEXT                                  */}
                        {/* ================================================= */}

                        <div
                            style={{
                                position: "absolute",

                                left: "50%",

                                bottom: "3px",

                                transform:
                                    "translateX(-50%)",

                                display: "flex",
                                alignItems: "center",
                                gap: "12px",

                                whiteSpace: "nowrap"
                            }}
                        >

                            <span
                                style={{
                                    color:
                                        "rgba(255,255,255,.22)",

                                    fontSize: "7px",

                                    letterSpacing: ".2em"
                                }}
                            >
                                IF QA FAILS
                            </span>


                            <span
                                style={{
                                    color:
                                        "#FF8FA3",

                                    fontSize: "11px"
                                }}
                            >
                                ↩
                            </span>


                            <span
                                style={{
                                    color:
                                        "rgba(255,255,255,.32)",

                                    fontSize: "7px",

                                    letterSpacing: ".18em"
                                }}
                            >
                                BACK TO DEVELOPMENT
                            </span>

                        </div>

                    </div>


                    {/* ================================================= */}
                    {/* BOTTOM SUMMARY                                    */}
                    {/* ================================================= */}

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",

                            marginTop: "0px",

                            animation:
                                "fadeUp .8s ease-out 1s both"
                        }}
                    >

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "15px",

                                padding:
                                    "12px 24px",

                                borderRadius: "30px",

                                background:
                                    "rgba(255,255,255,.025)",

                                border:
                                    "1px solid rgba(255,255,255,.07)"
                            }}
                        >

                            <span
                                style={{
                                    color:
                                        "rgba(255,255,255,.25)",

                                    fontSize: "8px",

                                    letterSpacing: ".18em"
                                }}
                            >
                                THE PROCESS
                            </span>


                            <span
                                style={{
                                    color:
                                        "#8EA4FF",

                                    fontSize: "9px",

                                    fontWeight: 700,

                                    letterSpacing: ".1em"
                                }}
                            >
                                DEVELOPMENT
                            </span>


                            <span
                                style={{
                                    color:
                                        "rgba(255,255,255,.25)"
                                }}
                            >
                                →
                            </span>


                            <span
                                style={{
                                    color:
                                        "#61E6D8",

                                    fontSize: "9px",

                                    fontWeight: 700,

                                    letterSpacing: ".1em"
                                }}
                            >
                                BE ↔ FE
                            </span>


                            <span
                                style={{
                                    color:
                                        "rgba(255,255,255,.25)"
                                }}
                            >
                                →
                            </span>


                            <span
                                style={{
                                    color:
                                        "#61E6D8",

                                    fontSize: "9px",

                                    fontWeight: 700,

                                    letterSpacing: ".1em"
                                }}
                            >
                                QA
                            </span>


                            <span
                                style={{
                                    color:
                                        "rgba(255,255,255,.25)"
                                }}
                            >
                                →
                            </span>


                            <span
                                style={{
                                    color:
                                        "#61E6D8",

                                    fontSize: "9px",

                                    fontWeight: 700,

                                    letterSpacing: ".1em"
                                }}
                            >
                                DONE
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </SlideRoot>
    );
};


/* ---------------- SLIDES ---------------- */

window.Slides = [
    window.IntroSlide,
    window.MeetTheTeamSlide,
    window.FullStackTeam,
    window.BackendTeam,
    window.QATeam,
    window.SharedGoalSlide,
    window.EventPlatformSlide,
    window.StartingPointSlide,
    window.FromVisionToWorkSlide,
]