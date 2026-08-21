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
                {/* LET'S BEGIN — CENTER */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "absolute",

                        zIndex: 30,

                        left: "50%",
                        top: "50%",

                        transform: curtain
                            ? "translate(-50%, -50%) scale(1)"
                            : "translate(-50%, -50%) scale(0.92)",

                        opacity:
                            curtain ? 1 : 0,

                        transition:
                            "opacity 0.8s ease, transform 1s cubic-bezier(0.22,1,0.36,1)",

                        pointerEvents: "none",

                        color: "#FFFFFF",

                        fontSize:
                            "clamp(42px, 5vw, 80px)",

                        fontWeight: 700,

                        letterSpacing: "-0.06em",

                        lineHeight: 0.9,

                        textAlign: "center",

                        whiteSpace: "nowrap",

                        textShadow:
                            "0 0 40px rgba(255,255,255,0.12)"
                    }}
                >
                    Let's begin!
                </div>


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

                        zIndex: 35,

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
                                lineHeight: "0.95",
                                letterSpacing: "-0.065em"
                            }}
                        >
                            Meet
                            <br />

                            <span
                                style={{
                                    display: "inline-block",
                                    padding: "0.08em 0.05em 0.12em 0",
                                    margin: "-0.08em 0 -0.12em 0",

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
        },
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
                                        objectFit: "cover",
                                        ...(member.name === "Andrej Ristovski" && {
                                            objectPosition: "center 5%",
                                            transform: "scale(1.25) translateY(-20px)"
                                        })
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
                                letterSpacing: "-0.065em",
                                overflow: "visible"
                            }}
                        >
                            Different roles.
                            <br />

                            <span
                                style={{
                                    display: "inline-block",
                                    paddingTop: "0.08em",
                                    paddingBottom: "0.08em",
                                    paddingRight: "0.08em",

                                    background:
                                        "linear-gradient(90deg,#ffffff,#8EA4FF,#61E6D8)",

                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",

                                    overflow: "visible"
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
                            lineHeight: "0.95",
                            letterSpacing: "-0.065em",
                            overflow: "visible",
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
                                display: "inline-block",

                                /* gives the font enough room so descenders don't get clipped */
                                paddingTop: "0.06em",
                                paddingBottom: "0.16em",
                                paddingRight: "0.08em",

                                background:
                                    "linear-gradient(180deg, #61E6D8 0%, #3BBEB5 50%, #16756F 100%)",

                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",

                                WebkitTextFillColor: "transparent",
                                color: "transparent",

                                overflow: "visible"
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
                    background: "#040914",
                    color: "white",
                    fontFamily: "Inter, -apple-system, sans-serif"
                }}
            >
                <style>
                    {`
            @keyframes pulseGlow {
              0%, 100% { transform: scale(1); opacity: 0.8; }
              50% { transform: scale(1.08); opacity: 1; filter: drop-shadow(0 0 12px rgba(97,230,216,0.6)); }
            }
            @keyframes dashFlow {
              0% { stroke-dashoffset: 40; }
              100% { stroke-dashoffset: 0; }
            }
            @keyframes alertPulse {
              0%, 100% { box-shadow: 0 0 15px rgba(255,143,163,0.2); }
              50% { box-shadow: 0 0 30px rgba(255,143,163,0.5); }
            }
          `}
                </style>

                {/* BACKGROUND AMBIENT GRADIENTS */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "radial-gradient(circle at 20% 30%, rgba(142,164,255,0.07), transparent 40%), radial-gradient(circle at 80% 70%, rgba(97,230,216,0.06), transparent 40%)",
                        pointerEvents: "none"
                    }}
                />

                {/* HEADER */}
                <div style={{ position: "absolute", top: "40px", left: "60px", zIndex: 10 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                        <div style={{ width: "28px", height: "2px", background: "linear-gradient(90deg,#8EA4FF,#61E6D8)" }} />
                        <span style={{ color: "#61E6D8", fontFamily: "monospace", fontSize: "10px", fontWeight: 700, letterSpacing: ".25em" }}>
              WORKFLOW PIPELINE
            </span>
                    </div>
                    <h1 style={{ margin: 0, fontSize: "44px", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: "1" }}>
                        How a JIRA ticket <span style={{ background: "linear-gradient(90deg, #8EA4FF, #61E6D8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>becomes an AEM feature.</span>
                    </h1>
                </div>

                {/* TOP RIGHT SUBTITLE */}
                <div style={{ position: "absolute", top: "48px", right: "60px", color: "rgba(255,255,255,0.3)", fontFamily: "monospace", fontSize: "9px", letterSpacing: "2px" }}>
                    DEV → INTEGRATION → QA → DEPLOY
                </div>

                {/* MAIN BOARD FLOW CONTAINER */}
                <div style={{ position: "absolute", inset: "140px 40px 40px 40px" }}>

                    {/* SECTION CONTAINERS / STAGES (BACKGROUND CARDS) */}
                    <div style={{ position: "absolute", left: "1.5%", width: "35%", top: "40px", bottom: "30px", background: "rgba(255,255,255,0.015)", border: "1px solid rgba(142,164,255,0.08)", borderRadius: "20px", pointerEvents: "none" }}>
                        <span style={{ position: "absolute", top: "16px", left: "20px", fontSize: "9px", fontFamily: "monospace", color: "#8EA4FF", letterSpacing: "2px", opacity: 0.6 }}>01 / DEVELOPMENT</span>
                    </div>

                    <div style={{ position: "absolute", left: "38%", width: "40%", top: "40px", bottom: "30px", background: "rgba(255,255,255,0.015)", border: "1px solid rgba(97,230,216,0.08)", borderRadius: "20px", pointerEvents: "none" }}>
                        <span style={{ position: "absolute", top: "16px", left: "20px", fontSize: "9px", fontFamily: "monospace", color: "#61E6D8", letterSpacing: "2px", opacity: 0.6 }}>02 / QUALITY ASSURANCE</span>
                    </div>

                    <div style={{ position: "absolute", left: "79.5%", width: "19%", top: "40px", bottom: "30px", background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", pointerEvents: "none" }}>
                        <span style={{ position: "absolute", top: "16px", left: "20px", fontSize: "9px", fontFamily: "monospace", color: "#FFF", letterSpacing: "2px", opacity: 0.6 }}>03 / RELEASE</span>
                    </div>

                    <svg viewBox="0 0 1300 460" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%", overflow: "visible" }}>
                        <defs>
                            <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#8EA4FF" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#8EA4FF" stopOpacity="0.9" />
                            </linearGradient>

                            <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#8EA4FF" />
                                <stop offset="100%" stopColor="#61E6D8" />
                            </linearGradient>

                            <linearGradient id="redGrad" x1="100%" y1="0%" x2="0%" y2="0%">
                                <stop offset="0%" stopColor="#FF8FA3" stopOpacity="0.9" />
                                <stop offset="100%" stopColor="#8EA4FF" stopOpacity="0.4" />
                            </linearGradient>

                            <marker id="arrBlue" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                                <polygon points="0 0, 7 3.5, 0 7" fill="#8EA4FF" />
                            </marker>
                            <marker id="arrGreen" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                                <polygon points="0 0, 7 3.5, 0 7" fill="#61E6D8" />
                            </marker>
                            <marker id="arrRed" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                                <polygon points="0 0, 7 3.5, 0 7" fill="#FF8FA3" />
                            </marker>
                        </defs>

                        {/* --- CONNECTIONS & PATHS --- */}

                        {/* Ticket Arrives -> Dev Build */}
                        <path
                            d="M 115 240 L 185 240"
                            stroke="#8EA4FF"
                            strokeWidth="2.5"
                            fill="none"
                            markerEnd="url(#arrBlue)"
                        />

                        {/* Dev Build -> Backend */}
                        <path d="M 235 210 Q 235 150 280 150" stroke="#8EA4FF" strokeWidth="2" opacity="0.7" fill="none" markerEnd="url(#arrBlue)" />

                        {/* Dev Build -> Frontend */}
                        <path d="M 235 290 Q 235 350 280 350" stroke="#8EA4FF" strokeWidth="2" opacity="0.7" fill="none" markerEnd="url(#arrBlue)" />

                        {/* Backend & Frontend -> Sync */}
                        <path d="M 380 150 C 440 150, 430 250, 480 250" stroke="url(#greenGrad)" strokeWidth="2" fill="none" markerEnd="url(#arrGreen)" />
                        <path d="M 380 350 C 440 350, 430 250, 480 250" stroke="url(#greenGrad)" strokeWidth="2" fill="none" markerEnd="url(#arrGreen)" />

                        {/* Support Needed: Dev -> Mentors */}
                        <path
                            d="M 235 190 Q 235 65 670 65 L 670 95"
                            stroke="#8EA4FF"
                            strokeWidth="1.5"
                            strokeDasharray="5 5"
                            opacity="0.4"
                            fill="none"
                            markerEnd="url(#arrBlue)"
                        />

                        {/* Support Needed: QA -> Mentors */}
                        <path
                            d="M 830 210 Q 830 75 700 75 Q 670 75 700 100"
                            stroke="#61E6D8"
                            strokeWidth="1.5"
                            strokeDasharray="5 5"
                            opacity="0.6"
                            fill="none"
                            markerEnd="url(#arrGreen)"
                        />

                        {/* Sync -> QA Verification */}
                        <path d="M 540 250 L 620 250" stroke="#61E6D8" strokeWidth="2.5" fill="none" markerEnd="url(#arrGreen)" />

                        {/* QA Verification -> QA In Progress */}
                        <path d="M 720 250 L 780 250" stroke="#61E6D8" strokeWidth="2.5" fill="none" markerEnd="url(#arrGreen)" />

                        {/* QA In Progress -> Bug Check */}
                        <path d="M 880 250 L 960 250" stroke="#61E6D8" strokeWidth="2.5" fill="none" markerEnd="url(#arrGreen)" />

                        {/* Bug Check -> Closed */}
                        <path d="M 1040 250 L 1120 250" stroke="#61E6D8" strokeWidth="3" fill="none" markerEnd="url(#arrGreen)" />

                        {/* BUG RETURN LOOP */}
                        <path
                            d="M 1000 290 Q 1000 420 610 420 Q 220 420 220 300"
                            stroke="url(#redGrad)"
                            strokeWidth="2"
                            strokeDasharray="6 6"
                            fill="none"
                            markerEnd="url(#arrRed)"
                            style={{ animation: "dashFlow 2s linear infinite" }}
                        />

                        {/* LABELS */}
                        {/* SUPPORT NEEDED LABELS */}

                        <text
                            x="450"
                            y="55"
                            fill="#8EA4FF"
                            fontSize="9"
                            fontFamily="monospace"
                            opacity="0.8"
                        >
                            SUPPORT NEEDED
                        </text>

                        <text
                            x="755"
                            y="55"
                            fill="#61E6D8"
                            fontSize="9"
                            fontFamily="monospace"
                            opacity="0.8"
                        >
                            SUPPORT NEEDED
                        </text>
                        <text x="1000" y="235" fill="#61E6D8" fontSize="9" fontFamily="monospace" textAnchor="middle">TESTED</text>
                        <text x="1080" y="235" fill="#61E6D8" fontSize="9" fontFamily="monospace" textAnchor="middle">NO BUGS</text>
                        <text x="610" y="410" fill="#FF8FA3" fontSize="10" fontFamily="monospace" fontWeight="700" textAnchor="middle">BUG FOUND</text>

                        {/* --- HTML NODES VIA FOREIGN OBJECT --- */}
                        <foreignObject x="0" y="0" width="1300" height="460" style={{ pointerEvents: "none" }}>
                            <div style={{ position: "relative", width: "100%", height: "100%" }}>

                                {/* TICKET ARRIVES */}
                                <div style={{ position: "absolute", left: "70px", top: "250px", transform: "translate(-50%, -50%)" }}>
                                    <div style={{ width: "70px", height: "70px", borderRadius: "16px", background: "#0B1528", border: "1px solid rgba(142,164,255,0.4)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}>
                                        <span style={{ fontSize: "16px", color: "#8EA4FF" }}>✦</span>
                                        <span style={{ fontSize: "9px", fontWeight: 700, color: "#fff", marginTop: "4px" }}>TICKET</span>
                                    </div>
                                </div>

                                {/* DEV BUILD */}
                                <div style={{ position: "absolute", left: "235px", top: "250px", transform: "translate(-50%, -50%)" }}>
                                    <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "#0D1B32", border: "2px solid #8EA4FF", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 0 25px rgba(142,164,255,0.25)" }}>
                                        <span style={{ fontSize: "14px", color: "#8EA4FF", fontWeight: 800 }}>&lt;/&gt;</span>
                                        <span style={{ fontSize: "9px", fontWeight: 700, color: "#8EA4FF", marginTop: "2px" }}>BUILD</span>
                                    </div>
                                </div>

                                {/* BACKEND */}
                                <div style={{ position: "absolute", left: "330px", top: "150px", transform: "translate(-50%, -50%)" }}>
                                    <div style={{ padding: "8px 16px", borderRadius: "20px", background: "#0B1528", border: "1px solid rgba(142,164,255,0.5)", color: "#fff", fontSize: "10px", fontWeight: 600, display: "flex", gap: "6px", alignItems: "center" }}>
                                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#8EA4FF" }} /> BACKEND
                                    </div>
                                </div>

                                {/* FRONTEND */}
                                <div style={{ position: "absolute", left: "330px", top: "350px", transform: "translate(-50%, -50%)" }}>
                                    <div style={{ padding: "8px 16px", borderRadius: "20px", background: "#0B1528", border: "1px solid rgba(142,164,255,0.5)", color: "#fff", fontSize: "10px", fontWeight: 600, display: "flex", gap: "6px", alignItems: "center" }}>
                                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#61E6D8" }} /> FRONTEND
                                    </div>
                                </div>

                                {/* SYNC */}
                                <div style={{ position: "absolute", left: "510px", top: "250px", transform: "translate(-50%, -50%)" }}>
                                    <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "#071826", border: "2px solid #61E6D8", display: "flex", alignItems: "center", justifyContent: "center", color: "#61E6D8", fontSize: "16px", fontWeight: "bold", animation: "pulseGlow 3s infinite" }}>
                                        ⚡
                                    </div>
                                    <span style={{ position: "absolute", bottom: "-18px", left: "50%", transform: "translateX(-50%)", fontSize: "9px", color: "#61E6D8", fontFamily: "monospace" }}>SYNC</span>
                                </div>

                                {/* MENTORS */}
                                <div style={{ position: "absolute", left: "670px", top: "120px", transform: "translate(-50%, -50%)" }}>
                                    <div style={{ padding: "10px 20px", borderRadius: "12px", background: "rgba(255,255,255,0.05)", backdropFilter: "blur(8px)", border: "1px dashed rgba(255,255,255,0.3)", color: "#fff", fontSize: "11px", fontWeight: 700, letterSpacing: "1px" }}>
                                        ⌘ MENTORS
                                    </div>
                                </div>

                                {/* QA VERIFICATION */}
                                <div style={{ position: "absolute", left: "670px", top: "250px", transform: "translate(-50%, -50%)" }}>
                                    <div style={{ width: "75px", height: "75px", borderRadius: "50%", background: "#071826", border: "1px solid #61E6D8", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                        <span style={{ fontSize: "10px", fontWeight: 700, color: "#61E6D8" }}>QA VERIFY</span>
                                    </div>
                                </div>

                                {/* QA IN PROGRESS */}
                                <div style={{ position: "absolute", left: "830px", top: "250px", transform: "translate(-50%, -50%)" }}>
                                    <div style={{ width: "75px", height: "75px", borderRadius: "50%", background: "#071826", border: "1px solid #61E6D8", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                        <span style={{ fontSize: "10px", fontWeight: 700, color: "#fff" }}>TESTING</span>
                                    </div>
                                </div>

                                {/* BUG CHECK */}
                                <div style={{ position: "absolute", left: "1000px", top: "250px", transform: "translate(-50%, -50%)" }}>
                                    <div style={{ width: "75px", height: "75px", borderRadius: "50%", background: "#1C0D18", border: "2px solid #FF8FA3", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", animation: "alertPulse 2s infinite" }}>
                                        <span style={{ fontSize: "11px", fontWeight: 800, color: "#FF8FA3" }}>BUG?</span>
                                    </div>
                                </div>

                                {/* CLOSED / DONE */}
                                <div style={{ position: "absolute", left: "1160px", top: "250px", transform: "translate(-50%, -50%)" }}>
                                    <div style={{ width: "85px", height: "85px", borderRadius: "50%", background: "linear-gradient(135deg, #071826, #0D2D3A)", border: "2px solid #61E6D8", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 0 30px rgba(97,230,216,0.3)" }}>
                                        <span style={{ fontSize: "18px", color: "#61E6D8" }}>✓</span>
                                        <span style={{ fontSize: "10px", fontWeight: 800, color: "#fff", letterSpacing: "1px" }}>DONE</span>
                                    </div>
                                </div>

                            </div>
                        </foreignObject>
                    </svg>
                </div>
            </div>
        </SlideRoot>
    );
};

window.QRCodeSlide = () => {

    return (
        <SlideRoot>

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

                <style>
                    {`

                    @keyframes floatPhone {
                        0%, 100% {
                            transform: translateY(0px) rotate(3deg);
                        }
                        50% {
                            transform: translateY(-14px) rotate(3deg);
                        }
                    }

                    @keyframes floatDesktop {
                        0%, 100% {
                            transform: translateY(0px);
                        }
                        50% {
                            transform: translateY(-7px);
                        }
                    }

                    @keyframes glowPulse {
                        0%, 100% {
                            opacity: 0.25;
                            transform: scale(0.95);
                        }
                        50% {
                            opacity: 0.55;
                            transform: scale(1.05);
                        }
                    }

                    @keyframes scanLine {
                        0% {
                            top: 0%;
                            opacity: 0;
                        }
                        10% {
                            opacity: 1;
                        }
                        90% {
                            opacity: 1;
                        }
                        100% {
                            top: 100%;
                            opacity: 0;
                        }
                    }

                    @keyframes pulseDot {
                        0%, 100% {
                            opacity: 0.3;
                            transform: scale(0.8);
                        }
                        50% {
                            opacity: 1;
                            transform: scale(1.2);
                        }
                    }

                    @keyframes arrowPulse {
                        0%, 100% {
                            transform: translateX(0);
                            opacity: 0.5;
                        }
                        50% {
                            transform: translateX(6px);
                            opacity: 1;
                        }
                    }

                    @keyframes reveal {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    `}
                </style>


                {/* ================================================= */}
                {/* BACKGROUND GRID */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "absolute",
                        inset: 0,

                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",

                        backgroundSize: "45px 45px",

                        maskImage:
                            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",

                        WebkitMaskImage:
                            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",

                        pointerEvents: "none"
                    }}
                />


                {/* ================================================= */}
                {/* MAIN GLOW */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "absolute",

                        width: "700px",
                        height: "700px",

                        borderRadius: "50%",

                        background:
                            "radial-gradient(circle, rgba(97,230,216,0.10), transparent 68%)",

                        right: "4%",
                        top: "50%",

                        transform: "translateY(-50%)",

                        filter: "blur(50px)",

                        animation:
                            "glowPulse 6s ease-in-out infinite",

                        pointerEvents: "none"
                    }}
                />


                <div
                    style={{
                        position: "absolute",

                        width: "500px",
                        height: "500px",

                        borderRadius: "50%",

                        background:
                            "radial-gradient(circle, rgba(142,164,255,0.09), transparent 68%)",

                        left: "-200px",
                        bottom: "-200px",

                        filter: "blur(50px)",

                        pointerEvents: "none"
                    }}
                />


                {/* ================================================= */}
                {/* TOP LABEL */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "absolute",

                        top: "7%",
                        left: "7%",

                        display: "flex",
                        alignItems: "center",
                        gap: "12px",

                        fontSize: "10px",
                        fontWeight: 600,

                        letterSpacing: "0.28em",

                        color: "#61E6D8",

                        textTransform: "uppercase"
                    }}
                >

                    <div
                        style={{
                            width: "7px",
                            height: "7px",

                            borderRadius: "50%",

                            background: "#61E6D8",

                            boxShadow:
                                "0 0 15px rgba(97,230,216,0.9)",

                            animation:
                                "pulseDot 2s ease-in-out infinite"
                        }}
                    />

                    Internship Presentation · 2026

                </div>


                {/* ================================================= */}
                {/* MAIN CONTENT */}
                {/* ================================================= */}

                <div
                    style={{
                        width: "86%",
                        maxWidth: "1350px",

                        display: "grid",
                        gridTemplateColumns: "0.9fr 1.1fr",

                        alignItems: "center",

                        gap: "70px",

                        position: "relative",
                        zIndex: 5
                    }}
                >


                    {/* ================================================= */}
                    {/* LEFT SIDE */}
                    {/* ================================================= */}

                    <div
                        style={{
                            animation:
                                "reveal 0.8s ease forwards"
                        }}
                    >

                        <div
                            style={{
                                fontSize: "12px",
                                fontWeight: 600,

                                letterSpacing: "0.30em",

                                color:
                                    "rgba(255,255,255,0.38)",

                                textTransform: "uppercase",

                                marginBottom: "22px"
                            }}
                        >
                            Before we begin
                        </div>


                        <h1
                            style={{
                                margin: 0,

                                fontSize:
                                    "clamp(54px, 6vw, 88px)",

                                lineHeight: "0.92",

                                letterSpacing: "-0.065em",

                                fontWeight: 700
                            }}
                        >

                            See it.
                            <br />

                            <span
                                style={{
                                    background:
                                        "linear-gradient(90deg,#ffffff,#8EA4FF,#61E6D8)",

                                    WebkitBackgroundClip: "text",

                                    WebkitTextFillColor: "transparent"
                                }}
                            >
                                Scan it.
                            </span>

                            <br />

                            Explore it.

                        </h1>


                        <p
                            style={{
                                marginTop: "28px",

                                fontSize: "17px",

                                lineHeight: "1.6",

                                color:
                                    "rgba(255,255,255,0.50)",

                                maxWidth: "440px"
                            }}
                        >
                            While we get ready to start,
                            take a quick look at the project
                            on your phone.
                        </p>


                        {/* SCAN CTA */}

                        <div
                            style={{
                                marginTop: "34px",

                                display: "flex",
                                alignItems: "center",

                                gap: "14px"
                            }}
                        >

                            <div
                                style={{
                                    width: "36px",
                                    height: "36px",

                                    borderRadius: "50%",

                                    border:
                                        "1px solid rgba(97,230,216,0.45)",

                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",

                                    color: "#61E6D8",

                                    animation:
                                        "arrowPulse 2s ease-in-out infinite"
                                }}
                            >
                                →
                            </div>


                            <div>

                                <div
                                    style={{
                                        fontSize: "11px",

                                        fontWeight: 600,

                                        letterSpacing:
                                            "0.18em",

                                        color:
                                            "rgba(255,255,255,0.72)",

                                        textTransform: "uppercase"
                                    }}
                                >
                                    Scan the QR
                                </div>

                                <div
                                    style={{
                                        marginTop: "5px",

                                        fontSize: "10px",

                                        color:
                                            "rgba(255,255,255,0.30)"
                                    }}
                                >
                                    No app needed
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* ================================================= */}
                    {/* RIGHT SIDE — PRODUCT PREVIEW */}
                    {/* ================================================= */}

                    <div
                        style={{
                            position: "relative",

                            height: "500px",

                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >


                        {/* DESKTOP PREVIEW */}

                        <div
                            style={{
                                position: "absolute",

                                width: "clamp(400px, 42vw, 610px)",

                                height: "clamp(270px, 28vw, 390px)",

                                background:
                                    "#101827",

                                border:
                                    "1px solid rgba(255,255,255,0.12)",

                                borderRadius: "16px",

                                boxShadow:
                                    "0 30px 100px rgba(0,0,0,0.55), 0 0 60px rgba(142,164,255,0.08)",

                                overflow: "hidden",

                                left: "5%",
                                top: "8%",

                                animation:
                                    "floatDesktop 6s ease-in-out infinite"
                            }}
                        >

                            {/* BROWSER BAR */}

                            <div
                                style={{
                                    height: "32px",

                                    background:
                                        "#0B1220",

                                    borderBottom:
                                        "1px solid rgba(255,255,255,0.07)",

                                    display: "flex",
                                    alignItems: "center",

                                    padding: "0 12px",

                                    gap: "6px"
                                }}
                            >

                                <div
                                    style={{
                                        width: "6px",
                                        height: "6px",
                                        borderRadius: "50%",
                                        background:
                                            "rgba(255,255,255,0.25)"
                                    }}
                                />

                                <div
                                    style={{
                                        width: "6px",
                                        height: "6px",
                                        borderRadius: "50%",
                                        background:
                                            "rgba(255,255,255,0.25)"
                                    }}
                                />

                                <div
                                    style={{
                                        width: "6px",
                                        height: "6px",
                                        borderRadius: "50%",
                                        background:
                                            "rgba(255,255,255,0.25)"
                                    }}
                                />

                                <div
                                    style={{
                                        marginLeft: "12px",

                                        flex: 1,

                                        height: "16px",

                                        borderRadius: "5px",

                                        background:
                                            "rgba(255,255,255,0.045)"
                                    }}
                                />

                            </div>


                            {/* DESKTOP IMAGE */}

                            <img
                                src="/screenshots/events.png"
                                alt="Desktop project preview"

                                style={{
                                    width: "100%",
                                    height: "calc(100% - 32px)",

                                    objectFit: "cover",

                                    objectPosition: "top",

                                    display: "block"
                                }}
                            />

                        </div>


                        {/* MOBILE PHONE */}

                        <div
                            style={{
                                position: "absolute",

                                width: "170px",
                                height: "350px",

                                background: "#070D18",

                                border:
                                    "7px solid #111A2A",

                                borderRadius: "28px",

                                right: "4%",
                                bottom: "0",

                                boxShadow:
                                    "0 30px 80px rgba(0,0,0,0.65), 0 0 45px rgba(97,230,216,0.12)",

                                overflow: "hidden",

                                zIndex: 10,

                                animation:
                                    "floatPhone 5s ease-in-out infinite"
                            }}
                        >

                            {/* PHONE NOTCH */}

                            <div
                                style={{
                                    position: "absolute",

                                    top: "4px",
                                    left: "50%",

                                    transform:
                                        "translateX(-50%)",

                                    width: "65px",
                                    height: "15px",

                                    borderRadius:
                                        "0 0 10px 10px",

                                    background:
                                        "#111A2A",

                                    zIndex: 20
                                }}
                            />


                            <img
                                src="/screenshots/events-mobile.png"
                                alt="Mobile project preview"

                                style={{
                                    width: "100%",
                                    height: "100%",

                                    objectFit: "cover",

                                    objectPosition: "top",

                                    display: "block"
                                }}
                            />

                        </div>


                        {/* MOBILE LABEL */}

                        <div
                            style={{
                                position: "absolute",

                                right: "-1%",
                                bottom: "-38px",

                                fontSize: "9px",

                                letterSpacing:
                                    "0.22em",

                                color:
                                    "rgba(255,255,255,0.32)",

                                textTransform: "uppercase",

                                whiteSpace: "nowrap"
                            }}
                        >
                            Desktop → Mobile

                        </div>


                        {/* ================================================= */}
                        {/* QR CODE */}
                        {/* ================================================= */}

                        <div
                            style={{
                                position: "absolute",

                                right: "-4%",
                                top: "-10px",

                                width: "145px",
                                height: "145px",

                                padding: "10px",

                                background:
                                    "rgba(255,255,255,0.97)",

                                borderRadius: "16px",

                                boxShadow:
                                    "0 20px 50px rgba(0,0,0,0.45), 0 0 35px rgba(97,230,216,0.12)",

                                zIndex: 15,

                                overflow: "hidden"
                            }}
                        >

                            <img
                                src="/screenshots/Friday QR Code 3.jpeg"
                                alt="QR Code"

                                style={{
                                    width: "100%",
                                    height: "100%",

                                    objectFit: "contain",

                                    display: "block"
                                }}
                            />

                            {/* SCAN LINE */}

                            <div
                                style={{
                                    position: "absolute",

                                    left: "8px",
                                    right: "8px",

                                    height: "2px",

                                    background:
                                        "linear-gradient(90deg, transparent, #61E6D8, transparent)",

                                    boxShadow:
                                        "0 0 12px rgba(97,230,216,0.9)",

                                    animation:
                                        "scanLine 2.8s ease-in-out infinite",

                                    pointerEvents: "none"
                                }}
                            />

                        </div>


                        {/* QR SMALL TEXT */}

                        <div
                            style={{
                                position: "absolute",

                                right: "0%",
                                top: "150px",

                                fontSize: "8px",

                                letterSpacing:
                                    "0.16em",

                                color:
                                    "rgba(255,255,255,0.30)",

                                textTransform: "uppercase",

                                textAlign: "center"
                            }}
                        >
                            Scan to explore
                        </div>

                    </div>

                </div>


                {/* ================================================= */}
                {/* BOTTOM DETAILS */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "absolute",

                        bottom: "6%",
                        left: "7%",

                        fontFamily: "monospace",

                        fontSize: "8px",

                        letterSpacing: "0.20em",

                        color:
                            "rgba(255,255,255,0.18)"
                    }}
                >
                    VASS · AEM EVENT MANAGEMENT
                </div>


                <div
                    style={{
                        position: "absolute",

                        bottom: "6%",
                        right: "7%",

                        fontFamily: "monospace",

                        fontSize: "8px",

                        letterSpacing: "0.20em",

                        color:
                            "rgba(255,255,255,0.18)"
                    }}
                >
                    WE'LL BEGIN IN A MOMENT
                </div>


            </div>

        </SlideRoot>
    );
};

/* ---------------- QR CODE ---------------- */

window.QRCodeSlide = () => {

    return (
        <SlideRoot>

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

                <style>
                    {`

                    /* ========================================= */
                    /* FLOATING ANIMATIONS */
                    /* ========================================= */

                    @keyframes float1 {
                        0%, 100% {
                            transform: translateY(0px) rotate(0deg);
                        }

                        50% {
                            transform: translateY(-18px) rotate(2deg);
                        }
                    }

                    @keyframes float2 {
                        0%, 100% {
                            transform: translateY(0px) rotate(0deg);
                        }

                        50% {
                            transform: translateY(15px) rotate(-2deg);
                        }
                    }


                    /* ========================================= */
                    /* SQUARE FLOAT */
                    /* ========================================= */

                    @keyframes squareFloat {
                        0%, 100% {
                            transform: translateY(0px) rotate(18deg);
                        }

                        50% {
                            transform: translateY(-18px) rotate(21deg);
                        }
                    }

                    @keyframes squareFloatReverse {
                        0%, 100% {
                            transform: translateY(0px) rotate(-15deg);
                        }

                        50% {
                            transform: translateY(16px) rotate(-12deg);
                        }
                    }


                    /* ========================================= */
                    /* CENTER GLOW */
                    /* ========================================= */

                    @keyframes glowPulse {
                        0%, 100% {
                            opacity: 0.25;
                            transform: translate(-50%, -50%) scale(0.9);
                        }

                        50% {
                            opacity: 0.55;
                            transform: translate(-50%, -50%) scale(1.08);
                        }
                    }


                    /* ========================================= */
                    /* QR SCAN */
                    /* ========================================= */

                    @keyframes scan {
                        0% {
                            top: 0%;
                            opacity: 0;
                        }

                        10% {
                            opacity: 1;
                        }

                        90% {
                            opacity: 1;
                        }

                        100% {
                            top: 100%;
                            opacity: 0;
                        }
                    }


                    /* ========================================= */
                    /* SMALL PULSE */
                    /* ========================================= */

                    @keyframes pulse {
                        0%, 100% {
                            opacity: 0.35;
                            transform: scale(0.85);
                        }

                        50% {
                            opacity: 1;
                            transform: scale(1.15);
                        }
                    }


                    /* ========================================= */
                    /* ARROW */
                    /* ========================================= */

                    @keyframes arrow {
                        0%, 100% {
                            transform: translateX(0);
                        }

                        50% {
                            transform: translateX(6px);
                        }
                    }


                    /* ========================================= */
                    /* PARTICLES */
                    /* ========================================= */

                    @keyframes floatUp {
                        0% {
                            transform: translateY(0) scale(0.7);
                            opacity: 0;
                        }

                        10% {
                            opacity: 0.7;
                        }

                        50% {
                            opacity: 1;
                        }

                        90% {
                            opacity: 0.5;
                        }

                        100% {
                            transform: translateY(-115vh) scale(1);
                            opacity: 0;
                        }
                    }


                    /* ========================================= */
                    /* HORIZONTAL SHIMMER */
                    /* ========================================= */

                    @keyframes shimmer {
                        0% {
                            transform: translateX(0);
                            opacity: 0;
                        }

                        10% {
                            opacity: 1;
                        }

                        50% {
                            opacity: 0.7;
                        }

                        90% {
                            opacity: 1;
                        }

                        100% {
                            transform: translateX(180vw);
                            opacity: 0;
                        }
                    }

                    `}
                </style>


                {/* ================================================= */}
                {/* BACKGROUND GRID */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "absolute",
                        inset: 0,

                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",

                        backgroundSize: "48px 48px",

                        opacity: 0.5,

                        maskImage:
                            "radial-gradient(circle at center, black 10%, transparent 78%)",

                        WebkitMaskImage:
                            "radial-gradient(circle at center, black 10%, transparent 78%)",

                        pointerEvents: "none"
                    }}
                />


                {/* ================================================= */}
                {/* LARGE GRADIENT SQUARES */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "absolute",

                        width: "420px",
                        height: "420px",

                        left: "-150px",
                        top: "-80px",

                        background:
                            "linear-gradient(135deg, rgba(142,164,255,0.11), rgba(142,164,255,0.015), transparent 70%)",

                        border:
                            "1px solid rgba(142,164,255,0.10)",

                        transform: "rotate(18deg)",

                        filter: "blur(0.2px)",

                        animation:
                            "squareFloat 9s ease-in-out infinite",

                        pointerEvents: "none"
                    }}
                />


                <div
                    style={{
                        position: "absolute",

                        width: "300px",
                        height: "300px",

                        right: "-100px",
                        top: "5%",

                        background:
                            "linear-gradient(135deg, rgba(97,230,216,0.09), rgba(97,230,216,0.01), transparent 70%)",

                        border:
                            "1px solid rgba(97,230,216,0.09)",

                        transform: "rotate(-15deg)",

                        animation:
                            "squareFloatReverse 10s ease-in-out infinite",

                        pointerEvents: "none"
                    }}
                />


                <div
                    style={{
                        position: "absolute",

                        width: "250px",
                        height: "250px",

                        left: "5%",
                        bottom: "-100px",

                        background:
                            "linear-gradient(135deg, rgba(97,230,216,0.06), transparent 70%)",

                        border:
                            "1px solid rgba(97,230,216,0.07)",

                        transform: "rotate(-12deg)",

                        animation:
                            "squareFloatReverse 8s ease-in-out infinite",

                        pointerEvents: "none"
                    }}
                />


                <div
                    style={{
                        position: "absolute",

                        width: "360px",
                        height: "360px",

                        right: "-120px",
                        bottom: "-100px",

                        background:
                            "linear-gradient(135deg, rgba(142,164,255,0.07), transparent 70%)",

                        border:
                            "1px solid rgba(142,164,255,0.07)",

                        transform: "rotate(20deg)",

                        animation:
                            "squareFloat 11s ease-in-out infinite",

                        pointerEvents: "none"
                    }}
                />


                {/* ================================================= */}
                {/* SMALL FLOATING SQUARES */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "absolute",

                        width: "80px",
                        height: "80px",

                        left: "22%",
                        top: "12%",

                        border:
                            "1px solid rgba(97,230,216,0.13)",

                        background:
                            "rgba(97,230,216,0.018)",

                        transform: "rotate(25deg)",

                        animation:
                            "squareFloat 6s ease-in-out infinite",

                        pointerEvents: "none"
                    }}
                />


                <div
                    style={{
                        position: "absolute",

                        width: "55px",
                        height: "55px",

                        right: "20%",
                        top: "15%",

                        border:
                            "1px solid rgba(142,164,255,0.13)",

                        background:
                            "rgba(142,164,255,0.018)",

                        transform: "rotate(-20deg)",

                        animation:
                            "squareFloatReverse 7s ease-in-out infinite",

                        pointerEvents: "none"
                    }}
                />


                <div
                    style={{
                        position: "absolute",

                        width: "100px",
                        height: "100px",

                        right: "18%",
                        bottom: "12%",

                        border:
                            "1px solid rgba(97,230,216,0.10)",

                        background:
                            "rgba(97,230,216,0.015)",

                        transform: "rotate(12deg)",

                        animation:
                            "squareFloat 8s ease-in-out infinite",

                        pointerEvents: "none"
                    }}
                />


                {/* ================================================= */}
                {/* FLOATING PARTICLES */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        overflow: "hidden",
                        pointerEvents: "none"
                    }}
                >

                    {(typeof particles !== "undefined"
                            ? particles
                            : Array.from({ length: 35 })
                    ).map((_, index) => {

                        const size =
                            2 + (index % 4);

                        const left =
                            (index * 37) % 100;

                        const duration =
                            8 + (index % 8);

                        const delay =
                            -(index % 12);

                        const drift =
                            index % 2 === 0 ? 1 : -1;

                        return (
                            <div
                                key={index}
                                style={{
                                    position: "absolute",

                                    left: `${left}%`,

                                    bottom: "-20px",

                                    width: `${size}px`,
                                    height: `${size}px`,

                                    borderRadius: "50%",

                                    background:
                                        index % 3 === 0
                                            ? "#61E6D8"
                                            : "#8EA4FF",

                                    boxShadow:
                                        index % 3 === 0
                                            ? "0 0 12px rgba(97,230,216,0.7)"
                                            : "0 0 10px rgba(142,164,255,0.6)",

                                    opacity: 0,

                                    animation:
                                        `floatUp ${duration}s linear infinite`,

                                    animationDelay:
                                        `${delay}s`,

                                    marginLeft:
                                        `${drift * (index % 30)}px`
                                }}
                            />
                        );
                    })}

                </div>


                {/* ================================================= */}
                {/* HORIZONTAL LIGHT */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "absolute",

                        width: "700px",
                        height: "1px",

                        top: "22%",
                        left: "-700px",

                        background:
                            "linear-gradient(90deg, transparent, rgba(97,230,216,0.18), transparent)",

                        animation:
                            "shimmer 8s linear infinite",

                        pointerEvents: "none"
                    }}
                />


                <div
                    style={{
                        position: "absolute",

                        width: "500px",
                        height: "1px",

                        bottom: "20%",
                        right: "-500px",

                        background:
                            "linear-gradient(90deg, transparent, rgba(142,164,255,0.15), transparent)",

                        animation:
                            "shimmer 10s linear infinite 3s",

                        pointerEvents: "none"
                    }}
                />


                {/* ================================================= */}
                {/* CENTER GLOW */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "absolute",

                        width: "850px",
                        height: "850px",

                        borderRadius: "50%",

                        background:
                            "radial-gradient(circle, rgba(97,230,216,0.14) 0%, rgba(142,164,255,0.055) 34%, transparent 68%)",

                        left: "50%",
                        top: "50%",

                        animation:
                            "glowPulse 6s ease-in-out infinite",

                        filter: "blur(35px)",

                        pointerEvents: "none"
                    }}
                />


                {/* ================================================= */}
                {/* TOP LABEL */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "absolute",

                        top: "6.5%",
                        left: "7%",

                        display: "flex",
                        alignItems: "center",

                        gap: "12px",

                        fontSize: "10px",

                        fontWeight: 600,

                        letterSpacing: "0.3em",

                        color: "#61E6D8",

                        textTransform: "uppercase",

                        zIndex: 5
                    }}
                >

                    <div
                        style={{
                            width: "7px",
                            height: "7px",

                            borderRadius: "50%",

                            background: "#61E6D8",

                            boxShadow:
                                "0 0 16px rgba(97,230,216,0.9)",

                            animation:
                                "pulse 2s ease-in-out infinite"
                        }}
                    />

                    Internship Presentation · 2026

                </div>


                {/* ================================================= */}
                {/* MAIN CONTENT */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "relative",

                        zIndex: 10,

                        display: "flex",

                        flexDirection: "column",

                        alignItems: "center",

                        justifyContent: "center",

                        maxWidth: "90vw"
                    }}
                >


                    {/* SMALL TITLE */}

                    <div
                        style={{
                            marginBottom: "18px",

                            fontSize: "11px",

                            fontWeight: 600,

                            letterSpacing: "0.35em",

                            color:
                                "rgba(255,255,255,0.38)",

                            textTransform: "uppercase"
                        }}
                    >
                        Before we begin
                    </div>


                    {/* MAIN TITLE */}

                    <div
                        style={{
                            fontSize:
                                "clamp(38px, 4vw, 58px)",

                            lineHeight: "0.95",

                            letterSpacing: "-0.055em",

                            fontWeight: 700,

                            marginBottom: "32px",

                            textAlign: "center"
                        }}
                    >

                        Take a look.

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
                            {" "}Scan it.
                        </span>

                    </div>


                    {/* ================================================= */}
                    {/* QR FRAME */}
                    {/* ================================================= */}

                    <div
                        style={{
                            position: "relative",

                            width:
                                "clamp(360px, 35vw, 520px)",

                            height:
                                "clamp(360px, 35vw, 520px)",

                            padding: "24px",

                            background:
                                "rgba(255,255,255,0.98)",

                            borderRadius: "30px",

                            boxShadow:
                                "0 40px 120px rgba(0,0,0,0.65), 0 0 100px rgba(97,230,216,0.18)",

                            overflow: "hidden",

                            boxSizing: "border-box"
                        }}
                    >

                        {/* TOP LEFT */}

                        <div
                            style={{
                                position: "absolute",

                                top: "15px",
                                left: "15px",

                                width: "22px",
                                height: "22px",

                                borderTop:
                                    "2px solid #61E6D8",

                                borderLeft:
                                    "2px solid #61E6D8",

                                zIndex: 5
                            }}
                        />


                        {/* TOP RIGHT */}

                        <div
                            style={{
                                position: "absolute",

                                top: "15px",
                                right: "15px",

                                width: "22px",
                                height: "22px",

                                borderTop:
                                    "2px solid #61E6D8",

                                borderRight:
                                    "2px solid #61E6D8",

                                zIndex: 5
                            }}
                        />


                        {/* BOTTOM LEFT */}

                        <div
                            style={{
                                position: "absolute",

                                bottom: "15px",
                                left: "15px",

                                width: "22px",
                                height: "22px",

                                borderBottom:
                                    "2px solid #61E6D8",

                                borderLeft:
                                    "2px solid #61E6D8",

                                zIndex: 5
                            }}
                        />


                        {/* BOTTOM RIGHT */}

                        <div
                            style={{
                                position: "absolute",

                                bottom: "15px",
                                right: "15px",

                                width: "22px",
                                height: "22px",

                                borderBottom:
                                    "2px solid #61E6D8",

                                borderRight:
                                    "2px solid #61E6D8",

                                zIndex: 5
                            }}
                        />


                        {/* QR IMAGE */}

                        <img
                            src="/screenshots/Friday QR Code 3.jpeg"
                            alt="QR Code"

                            style={{
                                width: "100%",
                                height: "100%",

                                objectFit: "contain",

                                display: "block",

                                position: "relative",

                                zIndex: 2
                            }}
                        />


                        {/* SCANNING LINE */}

                        <div
                            style={{
                                position: "absolute",

                                left: "20px",
                                right: "20px",

                                height: "3px",

                                background:
                                    "linear-gradient(90deg, transparent, #61E6D8, transparent)",

                                boxShadow:
                                    "0 0 20px rgba(97,230,216,1)",

                                animation:
                                    "scan 2.8s ease-in-out infinite",

                                pointerEvents: "none",

                                zIndex: 4
                            }}
                        />

                    </div>


                    {/* ================================================= */}
                    {/* BELOW QR */}
                    {/* ================================================= */}

                    <div
                        style={{
                            marginTop: "24px",

                            display: "flex",
                            alignItems: "center",

                            gap: "12px"
                        }}
                    >

                        <div
                            style={{
                                width: "34px",
                                height: "34px",

                                borderRadius: "50%",

                                border:
                                    "1px solid rgba(97,230,216,0.4)",

                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",

                                color: "#61E6D8",

                                animation:
                                    "arrow 2s ease-in-out infinite"
                            }}
                        >
                            →
                        </div>


                        <div
                            style={{
                                fontSize: "12px",

                                fontWeight: 600,

                                letterSpacing:
                                    "0.18em",

                                color:
                                    "rgba(255,255,255,0.65)",

                                textTransform:
                                    "uppercase"
                            }}
                        >
                            Scan to explore the project
                        </div>

                    </div>


                    {/* ================================================= */}
                    {/* MICRO TEXT */}
                    {/* ================================================= */}

                    <div
                        style={{
                            marginTop: "8px",

                            fontFamily: "monospace",

                            fontSize: "8px",

                            letterSpacing:
                                "0.16em",

                            color:
                                "rgba(255,255,255,0.24)",

                            textTransform:
                                "uppercase"
                        }}
                    >
                        Point your camera · No app needed
                    </div>

                </div>


                {/* ================================================= */}
                {/* BOTTOM LEFT LABEL */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "absolute",

                        left: "7%",
                        bottom: "8%",

                        fontFamily: "monospace",

                        fontSize: "8px",

                        letterSpacing: "0.22em",

                        color:
                            "rgba(255,255,255,0.18)",

                        zIndex: 5
                    }}
                >
                    VASS · AEM EVENT MANAGEMENT
                </div>


                {/* ================================================= */}
                {/* BOTTOM RIGHT LABEL */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "absolute",

                        right: "7%",
                        bottom: "8%",

                        fontFamily: "monospace",

                        fontSize: "8px",

                        letterSpacing: "0.22em",

                        color:
                            "rgba(255,255,255,0.18)",

                        zIndex: 5
                    }}
                >
                    PRESENTATION STARTING SOON
                </div>


                {/* ================================================= */}
                {/* VERTICAL TEXT */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "absolute",

                        right: "3%",
                        top: "50%",

                        transform:
                            "translateY(-50%)",

                        writingMode:
                            "vertical-rl",

                        fontFamily: "monospace",

                        fontSize: "7px",

                        letterSpacing: "0.3em",

                        color:
                            "rgba(255,255,255,0.12)",

                        zIndex: 5
                    }}
                >
                    SCAN · EXPLORE · EXPERIENCE · 2026
                </div>

            </div>

        </SlideRoot>
    );
};

/* ---------------- AEM DEMO ---------------- */

window.AEMDemoSlide = () => {

    return (
        <SlideRoot>

            <div
                style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    background: "#050B16",
                    color: "#fff",
                    fontFamily:
                        "system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
                }}
            >

                <style>
                    {`

                    @keyframes pulse {
                        0%,100% {
                            opacity: .35;
                            transform: scale(1);
                        }

                        50% {
                            opacity: 1;
                            transform: scale(1.5);
                        }
                    }

                    @keyframes drift {
                        0%,100% {
                            transform:
                                translate3d(0,0,0)
                                scale(1);
                        }

                        50% {
                            transform:
                                translate3d(25px,-20px,0)
                                scale(1.08);
                        }
                    }

                    @keyframes drift2 {
                        0%,100% {
                            transform:
                                translate3d(0,0,0);
                        }

                        50% {
                            transform:
                                translate3d(-30px,25px,0);
                        }
                    }

                    @keyframes reveal {
                        from {
                            opacity: 0;
                            transform:
                                translateY(25px)
                                scale(.96);
                        }

                        to {
                            opacity: 1;
                            transform:
                                translateY(0)
                                scale(1);
                        }
                    }

                    @keyframes float {
                        0%,100% {
                            transform:
                                translateY(0);
                        }

                        50% {
                            transform:
                                translateY(-7px);
                        }
                    }

                    @keyframes rotateSlow {
                        from {
                            transform:
                                rotate(0deg);
                        }

                        to {
                            transform:
                                rotate(360deg);
                        }
                    }

                    @keyframes videoGlow {
                        0%,100% {
                            opacity: .35;
                            transform:
                                translate(-50%, -50%)
                                scale(.98);
                        }

                        50% {
                            opacity: .7;
                            transform:
                                translate(-50%, -50%)
                                scale(1.02);
                        }
                    }

                    `}

                </style>


                {/* ================================================= */}
                {/* BACKGROUND — RED AEM GLOW */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "absolute",

                        width: "750px",
                        height: "750px",

                        left: "-220px",
                        top: "-300px",

                        borderRadius: "50%",

                        background:
                            "radial-gradient(circle, rgba(255,45,55,.17), transparent 65%)",

                        filter: "blur(35px)",

                        animation:
                            "drift 9s ease-in-out infinite",

                        pointerEvents: "none"
                    }}
                />


                {/* ================================================= */}
                {/* BACKGROUND — ORANGE GLOW */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "absolute",

                        width: "650px",
                        height: "650px",

                        right: "-200px",
                        bottom: "-260px",

                        borderRadius: "50%",

                        background:
                            "radial-gradient(circle, rgba(255,105,30,.13), transparent 65%)",

                        filter: "blur(40px)",

                        animation:
                            "drift2 11s ease-in-out infinite",

                        pointerEvents: "none"
                    }}
                />


                {/* ================================================= */}
                {/* HUGE CENTER AURA */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "absolute",

                        left: "50%",
                        top: "57%",

                        width: "92%",
                        height: "75%",

                        borderRadius: "50%",

                        background:
                            "radial-gradient(ellipse, rgba(255,45,85,.13), rgba(255,90,0,.035) 48%, transparent 72%)",

                        filter: "blur(45px)",

                        animation:
                            "videoGlow 5s ease-in-out infinite",

                        pointerEvents: "none",

                        zIndex: 1
                    }}
                />


                {/* ================================================= */}
                {/* SUBTLE GRID */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "absolute",

                        inset: 0,

                        opacity: .022,

                        backgroundImage: `
                            linear-gradient(
                                rgba(255,255,255,.5) 1px,
                                transparent 1px
                            ),
                            linear-gradient(
                                90deg,
                                rgba(255,255,255,.5) 1px,
                                transparent 1px
                            )
                        `,

                        backgroundSize:
                            "45px 45px",

                        pointerEvents:
                            "none"
                    }}
                />


                {/* ================================================= */}
                {/* HUGE AEM BACKGROUND */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "absolute",

                        left: "-20px",
                        bottom: "-75px",

                        fontSize:
                            "clamp(180px, 25vw, 390px)",

                        fontWeight: 950,

                        letterSpacing:
                            "-.09em",

                        lineHeight: .75,

                        color:
                            "rgba(255,255,255,.018)",

                        userSelect: "none",

                        pointerEvents: "none",

                        zIndex: 0
                    }}
                >
                    AEM
                </div>


                {/* ================================================= */}
                {/* TOP HEADER */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "absolute",

                        top: "30px",

                        left: "52px",
                        right: "52px",

                        display: "flex",

                        justifyContent:
                            "space-between",

                        alignItems:
                            "center",

                        zIndex: 100
                    }}
                >

                    {/* LEFT */}

                    <div
                        style={{
                            display: "flex",

                            alignItems:
                                "center",

                            gap: "9px"
                        }}
                    >

                        <div
                            style={{
                                width: "7px",
                                height: "7px",

                                borderRadius:
                                    "50%",

                                background:
                                    "#FF2D55",

                                boxShadow:
                                    "0 0 16px rgba(255,45,85,.9)",

                                animation:
                                    "pulse 1.8s infinite"
                            }}
                        />

                        <span
                            style={{
                                fontSize: "9px",

                                fontWeight: 800,

                                letterSpacing:
                                    ".32em",

                                color:
                                    "#FF5A67"
                            }}
                        >
                            AEM DEMO
                        </span>

                    </div>


                    {/* RIGHT */}

                    <div
                        style={{
                            fontFamily:
                                "monospace",

                            fontSize: "8px",

                            color:
                                "rgba(255,255,255,.28)",

                            textAlign:
                                "right",

                            lineHeight: 1.7
                        }}
                    >

                        <div>
                            ADOBE EXPERIENCE MANAGER
                        </div>

                        <div
                            style={{
                                color:
                                    "#FF5A67"
                            }}
                        >
                            LIVE / DEMO
                        </div>

                    </div>

                </div>


                {/* ================================================= */}
                {/* MAIN CONTENT */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "absolute",

                        inset: 0,

                        display: "flex",

                        flexDirection:
                            "column",

                        alignItems:
                            "center",

                        justifyContent:
                            "center",

                        boxSizing:
                            "border-box",

                        paddingTop:
                            "42px",

                        paddingBottom:
                            "42px",

                        zIndex: 40
                    }}
                >


                    {/* ================================================= */}
                    {/* TITLE */}
                    {/* ================================================= */}

                    <div
                        style={{
                            textAlign:
                                "center",

                            marginBottom:
                                "16px",

                            animation:
                                "reveal .8s ease both",

                            flexShrink: 0,

                            zIndex: 50
                        }}
                    >



                        {/* MAIN TITLE */}

                        <div
                            style={{
                                fontSize:
                                    "clamp(32px, 3.6vw, 56px)",

                                fontWeight:
                                    900,

                                letterSpacing:
                                    "-.065em",

                                lineHeight:
                                    .9
                            }}
                        >
                            No more screenshots.
                        </div>


                        {/* GRADIENT TITLE */}

                        <div
                            style={{
                                marginTop:
                                    "6px",

                                fontSize:
                                    "clamp(32px, 3.6vw, 56px)",

                                fontWeight:
                                    900,

                                letterSpacing:
                                    "-.065em",

                                lineHeight:
                                    .9,

                                background:
                                    "linear-gradient(90deg, #FF6B78, #FFB067)",

                                WebkitBackgroundClip:
                                    "text",

                                WebkitTextFillColor:
                                    "transparent"
                            }}
                        >
                            Let's see it in action.
                        </div>

                    </div>


                    {/* ================================================= */}
                    {/* VIDEO CONTAINER */}
                    {/* ================================================= */}

                    <div
                        style={{
                            position:
                                "relative",

                            width:
                                "min(92vw, 1400px)",

                            height:
                                "min(70vh, 700px)",

                            display:
                                "flex",

                            alignItems:
                                "center",

                            justifyContent:
                                "center",

                            animation:
                                "reveal 1s .15s ease both",

                            flexShrink:
                                1,

                            minHeight:
                                0
                        }}
                    >


                        {/* OUTER GLOW */}

                        <div
                            style={{
                                position:
                                    "absolute",

                                inset:
                                    "-42px",

                                borderRadius:
                                    "35px",

                                background:
                                    "radial-gradient(ellipse, rgba(255,45,85,.20), transparent 68%)",

                                filter:
                                    "blur(30px)",

                                pointerEvents:
                                    "none",

                                zIndex:
                                    0
                            }}
                        />


                        {/* ================================================= */}
                        {/* VIDEO FRAME */}
                        {/* ================================================= */}

                        <div
                            style={{
                                position:
                                    "relative",

                                width:
                                    "100%",

                                height:
                                    "100%",

                                padding:
                                    "10px",

                                borderRadius:
                                    "26px",

                                background:
                                    "linear-gradient(145deg, #1B2433, #080D16)",

                                border:
                                    "1px solid rgba(255,255,255,.16)",

                                boxShadow: `
                                    0 45px 120px rgba(0,0,0,.85),
                                    0 0 90px rgba(255,45,85,.14),
                                    inset 0 1px 0 rgba(255,255,255,.07)
                                `,

                                overflow:
                                    "hidden",

                                boxSizing:
                                    "border-box",

                                zIndex:
                                    2
                            }}
                        >


                            {/* ================================================= */}
                            {/* BROWSER BAR */}
                            {/* ================================================= */}

                            <div
                                style={{
                                    height:
                                        "30px",

                                    display:
                                        "flex",

                                    alignItems:
                                        "center",

                                    gap:
                                        "6px",

                                    padding:
                                        "0 9px",

                                    boxSizing:
                                        "border-box"
                                }}
                            >

                                <span
                                    style={{
                                        width:
                                            "7px",

                                        height:
                                            "7px",

                                        borderRadius:
                                            "50%",

                                        background:
                                            "#FF5F57"
                                    }}
                                />

                                <span
                                    style={{
                                        width:
                                            "7px",

                                        height:
                                            "7px",

                                        borderRadius:
                                            "50%",

                                        background:
                                            "#FEBC2E"
                                    }}
                                />

                                <span
                                    style={{
                                        width:
                                            "7px",

                                        height:
                                            "7px",

                                        borderRadius:
                                            "50%",

                                        background:
                                            "#28C840"
                                    }}
                                />


                                <div
                                    style={{
                                        marginLeft:
                                            "10px",

                                        flex: 1,

                                        height:
                                            "17px",

                                        borderRadius:
                                            "5px",

                                        background:
                                            "rgba(255,255,255,.045)",

                                        border:
                                            "1px solid rgba(255,255,255,.05)"
                                    }}
                                />

                            </div>


                            {/* ================================================= */}
                            {/* VIDEO */}
                            {/* ================================================= */}

                            <div
                                style={{
                                    position:
                                        "relative",

                                    width:
                                        "100%",

                                    height:
                                        "calc(100% - 30px)",

                                    borderRadius:
                                        "15px",

                                    overflow:
                                        "hidden",

                                    background:
                                        "#02050A",

                                    display:
                                        "flex",

                                    alignItems:
                                        "center",

                                    justifyContent:
                                        "center"
                                }}
                            >

                                <video
                                    src="/screenshots/demo.mov"

                                    controls

                                    autoPlay

                                    muted

                                    loop

                                    playsInline

                                    style={{
                                        width:
                                            "100%",

                                        height:
                                            "100%",

                                        objectFit:
                                            "contain",

                                        display:
                                            "block",

                                        background:
                                            "#02050A"
                                    }}
                                />

                            </div>

                        </div>

                    </div>

                </div>


                {/* ================================================= */}
                {/* FLOATING AUTHOR LABEL */}
                {/* ================================================= */}

                <div
                    style={{
                        position:
                            "absolute",

                        left:
                            "3.5%",

                        top:
                            "43%",

                        zIndex:
                            60,

                        padding:
                            "8px 11px",

                        borderRadius:
                            "8px",

                        background:
                            "rgba(8,14,24,.82)",

                        border:
                            "1px solid rgba(255,90,103,.22)",

                        backdropFilter:
                            "blur(12px)",

                        fontFamily:
                            "monospace",

                        fontSize:
                            "7px",

                        letterSpacing:
                            ".12em",

                        color:
                            "#FF6B78",

                        animation:
                            "float 4s ease-in-out infinite"
                    }}
                >
                    AUTHOR
                </div>


                {/* ================================================= */}
                {/* FLOATING COMPONENT LABEL */}
                {/* ================================================= */}

                <div
                    style={{
                        position:
                            "absolute",

                        right:
                            "3.5%",

                        top:
                            "43%",

                        zIndex:
                            60,

                        padding:
                            "8px 11px",

                        borderRadius:
                            "8px",

                        background:
                            "rgba(8,14,24,.82)",

                        border:
                            "1px solid rgba(255,176,103,.2)",

                        backdropFilter:
                            "blur(12px)",

                        fontFamily:
                            "monospace",

                        fontSize:
                            "7px",

                        letterSpacing:
                            ".12em",

                        color:
                            "#FFB067",

                        animation:
                            "float 4.5s .5s ease-in-out infinite"
                    }}
                >
                    COMPONENTS
                </div>


                {/* ================================================= */}
                {/* BOTTOM FLOW */}
                {/* ================================================= */}

                <div
                    style={{
                        position:
                            "absolute",

                        left:
                            "50%",

                        bottom:
                            "24px",

                        transform:
                            "translateX(-50%)",

                        zIndex:
                            100,

                        display:
                            "flex",

                        alignItems:
                            "center",

                        gap:
                            "11px",

                        fontFamily:
                            "monospace",

                        fontSize:
                            "7px",

                        letterSpacing:
                            ".16em",

                        color:
                            "rgba(255,255,255,.28)",

                        whiteSpace:
                            "nowrap"
                    }}
                >

                    <span
                        style={{
                            color:
                                "#FF5A67"
                        }}
                    >
                        ●
                    </span>

                    AUTHORING

                    <span
                        style={{
                            color:
                                "rgba(255,255,255,.15)"
                        }}
                    >
                        →
                    </span>

                    EXPERIENCE

                    <span
                        style={{
                            color:
                                "rgba(255,255,255,.15)"
                        }}
                    >
                        →
                    </span>

                    <span
                        style={{
                            color:
                                "#FFB067"
                        }}
                    >
                        LIVE
                    </span>

                </div>


                {/* ================================================= */}
                {/* CORNER ORBIT */}
                {/* ================================================= */}

                <div
                    style={{
                        position:
                            "absolute",

                        right:
                            "45px",

                        bottom:
                            "40px",

                        width:
                            "65px",

                        height:
                            "65px",

                        border:
                            "1px solid rgba(255,90,103,.08)",

                        borderRadius:
                            "50%",

                        animation:
                            "rotateSlow 25s linear infinite",

                        pointerEvents:
                            "none"
                    }}
                />


                <div
                    style={{
                        position:
                            "absolute",

                        right:
                            "70px",

                        bottom:
                            "65px",

                        width:
                            "15px",

                        height:
                            "15px",

                        borderRadius:
                            "50%",

                        background:
                            "rgba(255,90,103,.35)",

                        filter:
                            "blur(4px)",

                        animation:
                            "pulse 2.5s infinite"
                    }}
                />

            </div>

        </SlideRoot>
    );
};

window.AEMCMSSlide = () => {

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                background: "#070707",
                color: "#fff",
                position: "relative",
                overflow: "hidden",
                fontFamily: "Inter, Arial, sans-serif",
            }}
        >

            {/* ===================================================== */}
            {/* BACKGROUND */}
            {/* ===================================================== */}

            <div
                style={{
                    position: "absolute",
                    width: "900px",
                    height: "900px",
                    borderRadius: "50%",
                    background: "rgba(255, 95, 0, 0.12)",
                    filter: "blur(160px)",
                    top: "-500px",
                    left: "50%",
                    transform: "translateX(-50%)",
                }}
            />

            <div
                style={{
                    position: "absolute",
                    width: "600px",
                    height: "600px",
                    borderRadius: "50%",
                    background: "rgba(255, 95, 0, 0.06)",
                    filter: "blur(140px)",
                    bottom: "-400px",
                    right: "-250px",
                }}
            />

            {/* Huge background word */}

            <div
                style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%) rotate(-7deg)",
                    fontSize: "clamp(150px, 22vw, 340px)",
                    fontWeight: 900,
                    letterSpacing: "-0.09em",
                    color: "rgba(255,255,255,.018)",
                    whiteSpace: "nowrap",
                    userSelect: "none",
                    pointerEvents: "none",
                }}
            >
                EXPERIENCE
            </div>


            {/* subtle grid */}

            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.035,
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)
                    `,
                    backgroundSize: "70px 70px",
                }}
            />


            {/* ===================================================== */}
            {/* MAIN */}
            {/* ===================================================== */}

            <div
                style={{
                    position: "relative",
                    zIndex: 5,
                    width: "92%",
                    maxWidth: "1450px",
                    height: "100%",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",

                    /* MOVE MAIN DOWN */
                    transform: "translateY(20%)",
                }}
            >


                {/* ================================================= */}
                {/* INTRO */}
                {/* ================================================= */}

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        marginBottom: "12px",
                        fontSize: "11px",
                        fontWeight: 800,
                        letterSpacing: ".22em",
                        textTransform: "uppercase",
                        color: "#ff5f00",
                    }}
                >

                    <span
                        style={{
                            width: "7px",
                            height: "7px",
                            borderRadius: "50%",
                            background: "#ff5f00",
                            boxShadow: "0 0 18px #ff5f00",
                        }}
                    />

                    Adobe Experience Manager

                </div>


                {/* ================================================= */}
                {/* TITLE */}
                {/* ================================================= */}

                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "25px",
                    }}
                >

                    <h1
                        style={{
                            margin: 0,
                            fontSize: "clamp(38px, 4.8vw, 68px)",
                            lineHeight: ".9",
                            letterSpacing: "-.065em",
                            fontWeight: 850,
                        }}
                    >
                        BEHIND THAT{" "}
                        <span
                            style={{
                                color: "#ff5f00",
                            }}
                        >
                            EXPERIENCE.
                        </span>
                    </h1>


                    <div
                        style={{
                            marginTop: "12px",
                            fontSize: "15px",
                            color: "#8a8a8a",
                        }}
                    >
                        There is a system making it all happen.
                    </div>

                </div>


                {/* ================================================= */}
                {/* VIDEO / AEM WINDOW */}
                {/* ================================================= */}

                <div
                    style={{
                        position: "relative",
                        width: "min(92vw, 1160px)",
                        height: "min(58vh, 520px)",
                    }}
                >

                    {/* glow */}

                    <div
                        style={{
                            position: "absolute",
                            inset: "-35px",
                            borderRadius: "35px",
                            background:
                                "radial-gradient(circle, rgba(255,95,0,.22), transparent 65%)",
                            filter: "blur(35px)",
                        }}
                    />


                    {/* orange frame */}

                    <div
                        style={{
                            position: "absolute",
                            inset: "-2px",
                            borderRadius: "25px",
                            border: "1px solid rgba(255,95,0,.38)",
                        }}
                    />


                    {/* ================================================= */}
                    {/* AEM WINDOW */}
                    {/* ================================================= */}

                    <div
                        style={{
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            borderRadius: "22px",
                            overflow: "hidden",
                            background: "#050505",
                            border: "1px solid rgba(255,255,255,.15)",
                            boxShadow:
                                "0 40px 120px rgba(0,0,0,.8)",
                        }}
                    >

                        {/* browser bar */}

                        <div
                            style={{
                                position: "absolute",
                                zIndex: 10,
                                top: 0,
                                left: 0,
                                right: 0,
                                height: "44px",
                                display: "flex",
                                alignItems: "center",
                                padding: "0 18px",
                                background: "rgba(8,8,8,.88)",
                                backdropFilter: "blur(18px)",
                                borderBottom:
                                    "1px solid rgba(255,255,255,.1)",
                            }}
                        >

                            <div
                                style={{
                                    display: "flex",
                                    gap: "6px",
                                }}
                            >

                                <span
                                    style={{
                                        width: "7px",
                                        height: "7px",
                                        borderRadius: "50%",
                                        background: "#333",
                                    }}
                                />

                                <span
                                    style={{
                                        width: "7px",
                                        height: "7px",
                                        borderRadius: "50%",
                                        background: "#444",
                                    }}
                                />

                                <span
                                    style={{
                                        width: "7px",
                                        height: "7px",
                                        borderRadius: "50%",
                                        background: "#555",
                                    }}
                                />

                            </div>


                            <div
                                style={{
                                    position: "absolute",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    fontSize: "10px",
                                    fontWeight: 800,
                                    letterSpacing: ".16em",
                                    color: "#aaa",
                                }}
                            >

                                <span
                                    style={{
                                        color: "#ff5f00",
                                        fontSize: "15px",
                                    }}
                                >
                                    A
                                </span>

                                EXPERIENCE MANAGER

                            </div>


                            <div
                                style={{
                                    marginLeft: "auto",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "7px",
                                    fontSize: "9px",
                                    fontWeight: 800,
                                    letterSpacing: ".14em",
                                    color: "#888",
                                }}
                            >

                                <span
                                    style={{
                                        width: "6px",
                                        height: "6px",
                                        borderRadius: "50%",
                                        background: "#ff5f00",
                                        boxShadow: "0 0 12px #ff5f00",
                                    }}
                                />

                                LIVE DEMO

                            </div>

                        </div>


                        {/* ================================================= */}
                        {/* VIDEO */}
                        {/* ================================================= */}

                        <video
                            src="screenshots/aem-demo.mov"
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                                display: "block",
                                background: "#050505",
                            }}
                        />


                        {/* AEM DEMO BADGE */}

                        <div
                            style={{
                                position: "absolute",
                                zIndex: 12,
                                top: "62px",
                                left: "20px",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                padding: "8px 13px",
                                borderRadius: "999px",
                                background: "rgba(0,0,0,.75)",
                                backdropFilter: "blur(15px)",
                                border: "1px solid rgba(255,255,255,.12)",
                                fontSize: "9px",
                                fontWeight: 800,
                                letterSpacing: ".16em",
                                color: "#fff",
                                pointerEvents: "none",
                            }}
                        >

                            <span
                                style={{
                                    width: "6px",
                                    height: "6px",
                                    borderRadius: "50%",
                                    background: "#ff5f00",
                                    boxShadow: "0 0 12px #ff5f00",
                                }}
                            />

                            AEM DEMO

                        </div>


                        {/* orange accent */}

                        <div
                            style={{
                                position: "absolute",
                                zIndex: 12,
                                left: 0,
                                bottom: 0,
                                width: "320px",
                                height: "3px",
                                background:
                                    "linear-gradient(90deg, #ff5f00, transparent)",
                                pointerEvents: "none",
                            }}
                        />

                    </div>

                </div>


                {/* ================================================= */}
                {/* CREATE / MANAGE / PUBLISH */}
                {/* ================================================= */}

                <div
                    style={{
                        width: "min(92vw, 1160px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "22px",
                    }}
                >

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "9px",
                        }}
                    >

                        <span
                            style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                background: "#ff5f00",
                                boxShadow: "0 0 14px rgba(255,95,0,.7)",
                            }}
                        />

                        <span
                            style={{
                                fontSize: "11px",
                                fontWeight: 800,
                                letterSpacing: ".16em",
                                color: "#ddd",
                            }}
                        >
                            CREATE
                        </span>

                    </div>


                    <div
                        style={{
                            width: "90px",
                            height: "1px",
                            background:
                                "linear-gradient(90deg, #ff5f00, rgba(255,95,0,.15))",
                            margin: "0 18px",
                        }}
                    />


                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "9px",
                        }}
                    >

                        <span
                            style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                background: "#ff5f00",
                                boxShadow: "0 0 14px rgba(255,95,0,.7)",
                            }}
                        />

                        <span
                            style={{
                                fontSize: "11px",
                                fontWeight: 800,
                                letterSpacing: ".16em",
                                color: "#ddd",
                            }}
                        >
                            MANAGE
                        </span>

                    </div>


                    <div
                        style={{
                            width: "90px",
                            height: "1px",
                            background:
                                "linear-gradient(90deg, rgba(255,95,0,.15), #ff5f00)",
                            margin: "0 18px",
                        }}
                    />


                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "9px",
                        }}
                    >

                        <span
                            style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                background: "#ff5f00",
                                boxShadow: "0 0 14px rgba(255,95,0,.7)",
                            }}
                        />

                        <span
                            style={{
                                fontSize: "11px",
                                fontWeight: 800,
                                letterSpacing: ".16em",
                                color: "#ddd",
                            }}
                        >
                            PUBLISH
                        </span>

                    </div>

                </div>


                {/* bottom text */}

                <div
                    style={{
                        marginTop: "12px",
                        fontSize: "11px",
                        color: "#555",
                        letterSpacing: ".08em",
                        textAlign: "center",
                    }}
                >
                    FROM CONTENT CREATION → TO THE EXPERIENCE ON SCREEN
                </div>

            </div>

        </div>
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
    window.AEMCMSSlide,
    window.StartingPointSlide,
    window.FromVisionToWorkSlide,
    window.AEMDemoSlide,
    window.QRCodeSlide,
]