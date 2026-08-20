const {
    SlideRoot,
    useCountUp
} = window.Chrome;

/* ---------------- TITLE ---------------- */

window.IntroSlide = () => (
    <SlideRoot>

        <div
            style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                background: "#050B16"
            }}
        >

            {/* ANIMATIONS */}
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
                `}
            </style>

            {/* MAIN GLOW */}
            <div
                style={{
                    position: "absolute",
                    width: "900px",
                    height: "900px",
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(142,164,255,0.20), transparent 68%)",
                    filter: "blur(60px)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}
            />

            {/* SECONDARY GLOW */}
            <div
                style={{
                    position: "absolute",
                    width: "600px",
                    height: "600px",
                    borderRadius: "50%",
                    background:
                        "radial-gradient(circle, rgba(97,230,216,0.12), transparent 70%)",
                    filter: "blur(55px)",
                    bottom: "-180px",
                    right: "-100px",
                    animation: "glow 6s ease-in-out infinite"
                }}
            />

            {/* ========================= */}
            {/* FLOATING GREETINGS */}
            {/* ========================= */}

            {/* GERMAN */}
            <div
                style={{
                    position: "absolute",
                    top: "8%",
                    left: "7%",
                    fontSize: "36px",
                    fontWeight: "500",
                    color: "rgba(142,164,255,0.70)",
                    letterSpacing: "-0.03em",
                    animation: "floatA 8s ease-in-out infinite",
                    textShadow:
                        "0 0 35px rgba(142,164,255,0.25)"
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
                    color: "rgba(97,230,216,0.72)",
                    letterSpacing: "-0.03em",
                    animation: "floatB 9s ease-in-out infinite",
                    animationDelay: "1s",
                    textShadow:
                        "0 0 35px rgba(97,230,216,0.25)"
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
                    color: "rgba(97,230,216,0.62)",
                    letterSpacing: "-0.03em",
                    animation: "floatC 10s ease-in-out infinite",
                    animationDelay: "2s"
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
                    color: "rgba(142,164,255,0.68)",
                    letterSpacing: "-0.03em",
                    animation: "floatA 9s ease-in-out infinite",
                    animationDelay: "3s"
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
                    color: "rgba(255,255,255,0.38)",
                    animation: "floatB 11s ease-in-out infinite",
                    animationDelay: "2.5s"
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
                    color: "rgba(142,164,255,0.32)",
                    animation: "floatD 8s ease-in-out infinite",
                    animationDelay: "1.5s"
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
                    color: "rgba(97,230,216,0.35)",
                    animation: "floatC 9s ease-in-out infinite",
                    animationDelay: "3.5s"
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
                    color: "rgba(97,230,216,0.30)",
                    animation: "floatD 10s ease-in-out infinite",
                    animationDelay: "2s"
                }}
            >
                Buongiorno
            </div>

            {/* EXTRA ENGLISH */}
            <div
                style={{
                    position: "absolute",
                    top: "74%",
                    left: "27%",
                    fontSize: "25px",
                    fontWeight: "500",
                    color: "rgba(142,164,255,0.30)",
                    animation: "floatA 10s ease-in-out infinite",
                    animationDelay: "4s"
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
                    color: "rgba(255,255,255,0.25)",
                    animation: "floatB 12s ease-in-out infinite",
                    animationDelay: "5s"
                }}
            >
                Hallo!
            </div>

            {/* ========================= */}
            {/* FLOATING DOTS */}
            {/* ========================= */}

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
                        width: index % 2 === 0 ? "6px" : "4px",
                        height: index % 2 === 0 ? "6px" : "4px",
                        borderRadius: "50%",
                        background:
                            index % 2 === 0
                                ? "#8EA4FF"
                                : "#61E6D8",
                        boxShadow:
                            "0 0 20px rgba(142,164,255,0.8)",
                        animation:
                            "pulse 4s ease-in-out infinite",
                        animationDelay: delay
                    }}
                />
            ))}

            {/* ========================= */}
            {/* CENTER */}
            {/* ========================= */}

            <div
                style={{
                    position: "relative",
                    zIndex: 5,
                    textAlign: "center",
                    maxWidth: "1000px"
                }}
            >

                {/* LOGO */}
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

                {/* LABEL */}
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

                {/* TITLE */}
                <h1
                    className="display"
                    style={{
                        margin: 0,
                        fontSize: "clamp(58px, 6vw, 100px)",
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
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}
                    >
                        to validation
                    </span>
                </h1>

                {/* SUBTITLE */}
                <p
                    style={{
                        marginTop: "28px",
                        fontSize: "19px",
                        lineHeight: "1.65",
                        color: "rgba(255,255,255,0.55)",
                        maxWidth: "720px",
                        marginInline: "auto"
                    }}
                >
                    Seven interns · Three subteams · One shared goal
                    <br />
                    Building an AEM Event Management System from the ground up.
                </p>

                {/* META */}
                <div
                    style={{
                        marginTop: "38px",
                        display: "flex",
                        justifyContent: "center",
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
                                padding: "9px 16px",
                                borderRadius: "999px",
                                fontSize: "10px",
                                letterSpacing: "0.14em",
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

                {/* FOOTER */}
                <div
                    style={{
                        marginTop: "32px",
                        fontSize: "9px",
                        letterSpacing: "0.22em",
                        color: "rgba(255,255,255,0.25)",
                        textTransform: "uppercase"
                    }}
                >
                    Internship Presentation · 2026
                </div>

            </div>

        </div>

    </SlideRoot>
);

/* ---------------- THE TEAM ---------------- */

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
   FROM VISION TO WORK
========================================================= */

window.FromVisionToWorkSlide = () => {

    const [active, setActive] = React.useState(null);

    const sources = [
        {
            title: "FIGMA",
            subtitle: "THE VISION",
            image: "/screenshots/figma.png",
            color: "#8EA4FF",
            x: "8%",
            y: "18%",
            rotate: "-5deg"
        },
        {
            title: "SPECIFICATION",
            subtitle: "THE RULES",
            image: "/screenshots/specification.png",
            color: "#61E6D8",
            x: "38%",
            y: "8%",
            rotate: "3deg"
        },
        {
            title: "JIRA",
            subtitle: "THE WORK",
            image: "/screenshots/board.png",
            color: "#8EA4FF",
            x: "70%",
            y: "18%",
            rotate: "-4deg"
        }
    ];

    const steps = [
        {
            number: "01",
            title: "BUILD",
            text: "Design becomes code",
            color: "#8EA4FF"
        },
        {
            number: "02",
            title: "TEST",
            text: "Does it actually work?",
            color: "#61E6D8"
        },
        {
            number: "03",
            title: "BREAK",
            text: "Find what doesn't",
            color: "#FF8FA3"
        },
        {
            number: "04",
            title: "FIX",
            text: "Back to development",
            color: "#8EA4FF"
        },
        {
            number: "05",
            title: "RETEST",
            text: "Validate again",
            color: "#61E6D8"
        }
    ];

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
                            transform: translateY(30px);
                        }

                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes floatCard {
                        0%,100% {
                            transform: translateY(0) rotate(var(--rotation));
                        }

                        50% {
                            transform: translateY(-10px) rotate(var(--rotation));
                        }
                    }

                    @keyframes pulse {
                        0%,100% {
                            transform: scale(1);
                            opacity: .5;
                        }

                        50% {
                            transform: scale(1.5);
                            opacity: 1;
                        }
                    }

                    @keyframes travel {
                        0% {
                            left: 4%;
                            opacity: 0;
                        }

                        8% {
                            opacity: 1;
                        }

                        25% {
                            left: 28%;
                        }

                        45% {
                            left: 52%;
                        }

                        65% {
                            left: 72%;
                        }

                        85% {
                            left: 88%;
                        }

                        100% {
                            left: 96%;
                            opacity: 0;
                        }
                    }

                    @keyframes scan {
                        0% {
                            transform: translateX(-120%);
                        }

                        100% {
                            transform: translateX(120%);
                        }
                    }

                    @keyframes particle {
                        0% {
                            transform: translateY(0);
                            opacity: 0;
                        }

                        15% {
                            opacity: .8;
                        }

                        80% {
                            opacity: .35;
                        }

                        100% {
                            transform: translateY(-100vh);
                            opacity: 0;
                        }
                    }

                    @keyframes resultReveal {
                        0% {
                            opacity: 0;
                            transform: scale(.9);
                        }

                        100% {
                            opacity: 1;
                            transform: scale(1);
                        }
                    }

                    `}
                </style>


                {/* BACKGROUND GLOWS */}

                <div
                    style={{
                        position: "absolute",
                        width: "800px",
                        height: "800px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(142,164,255,.12), transparent 68%)",
                        filter: "blur(80px)",
                        top: "-350px",
                        left: "-200px"
                    }}
                />

                <div
                    style={{
                        position: "absolute",
                        width: "700px",
                        height: "700px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(97,230,216,.09), transparent 68%)",
                        filter: "blur(70px)",
                        bottom: "-350px",
                        right: "-200px"
                    }}
                />


                {/* FLOATING PARTICLES */}

                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        overflow: "hidden",
                        pointerEvents: "none"
                    }}
                >
                    {Array.from({ length: 24 }).map((_, i) => (

                        <div
                            key={i}
                            style={{
                                position: "absolute",
                                left: `${(i * 41) % 100}%`,
                                bottom: "-10px",
                                width: `${2 + (i % 3)}px`,
                                height: `${2 + (i % 3)}px`,
                                borderRadius: "50%",
                                background:
                                    i % 2
                                        ? "#8EA4FF"
                                        : "#61E6D8",
                                boxShadow:
                                    "0 0 12px currentColor",
                                animation:
                                    `particle ${7 + i % 6}s linear infinite`,
                                animationDelay:
                                    `${-(i % 7)}s`
                            }}
                        />

                    ))}
                </div>


                {/* MAIN CONTENT */}

                <div
                    style={{
                        width: "90%",
                        maxWidth: "1300px",
                        height: "100%",
                        margin: "0 auto",
                        position: "relative",
                        zIndex: 5,
                        paddingTop: "55px"
                    }}
                >

                    {/* HEADER */}

                    <div
                        style={{
                            animation: "fadeUp .7s ease-out"
                        }}
                    >

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                marginBottom: "16px"
                            }}
                        >

                            <div
                                style={{
                                    width: "38px",
                                    height: "2px",
                                    background:
                                        "linear-gradient(90deg,#61E6D8,#8EA4FF)"
                                }}
                            />

                            <span
                                style={{
                                    color: "#61E6D8",
                                    fontSize: "10px",
                                    letterSpacing: ".3em",
                                    fontWeight: 700
                                }}
                            >
                                HOW IT STARTED
                            </span>

                        </div>


                        <h1
                            className="display"
                            style={{
                                margin: 0,
                                fontSize: "clamp(50px,5.5vw,76px)",
                                lineHeight: ".9",
                                letterSpacing: "-.06em"
                            }}
                        >
                            From vision
                            <br />

                            <span
                                style={{
                                    background:
                                        "linear-gradient(90deg,#fff,#8EA4FF,#61E6D8)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                }}
                            >
                                to something real.
                            </span>
                        </h1>


                        <p
                            style={{
                                marginTop: "16px",
                                color: "rgba(255,255,255,.4)",
                                fontSize: "15px"
                            }}
                        >
                            Three things started the journey.
                            <span
                                style={{
                                    color: "rgba(255,255,255,.75)"
                                }}
                            >
                                {" "}Then the real work began.
                            </span>
                        </p>

                    </div>


                    {/* STARTING POINTS */}

                    <div
                        style={{
                            position: "relative",
                            height: "245px",
                            marginTop: "20px"
                        }}
                    >

                        {/* CONNECTING GLOW */}

                        <svg
                            width="100%"
                            height="100%"
                            style={{
                                position: "absolute",
                                inset: 0,
                                overflow: "visible",
                                pointerEvents: "none"
                            }}
                        >

                            <defs>

                                <linearGradient
                                    id="flowGradient"
                                    x1="0%"
                                    x2="100%"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="#8EA4FF"
                                    />
                                    <stop
                                        offset="50%"
                                        stopColor="#61E6D8"
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor="#8EA4FF"
                                    />
                                </linearGradient>

                            </defs>


                            <path
                                d="
                                    M 150 150
                                    C 350 70,
                                      450 70,
                                      600 145
                                    S 850 220,
                                      1120 145
                                "
                                fill="none"
                                stroke="url(#flowGradient)"
                                strokeWidth="2"
                                opacity=".3"
                            />

                        </svg>


                        {/* SOURCE CARDS */}

                        {sources.map((item, index) => (

                            <div
                                key={item.title}
                                onClick={() => setActive(item)}
                                style={{
                                    position: "absolute",
                                    left: item.x,
                                    top: item.y,
                                    width:
                                        index === 1
                                            ? "270px"
                                            : "250px",
                                    height: "150px",

                                    transform:
                                        `rotate(${item.rotate})`,

                                    "--rotation":
                                    item.rotate,

                                    cursor: "pointer",

                                    animation:
                                        `floatCard ${4 + index}s ease-in-out infinite`,

                                    zIndex: 10
                                }}
                            >

                                <div
                                    style={{
                                        position: "absolute",
                                        inset: "-20px",
                                        borderRadius: "30px",
                                        background:
                                            `radial-gradient(circle, ${item.color}18, transparent 70%)`,
                                        filter: "blur(15px)"
                                    }}
                                />


                                <div
                                    style={{
                                        position: "relative",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "18px",
                                        overflow: "hidden",

                                        background:
                                            "rgba(10,17,31,.8)",

                                        border:
                                            `1px solid ${item.color}45`,

                                        boxShadow:
                                            "0 25px 60px rgba(0,0,0,.4)",

                                        backdropFilter: "blur(12px)"
                                    }}
                                >

                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            opacity: ".42"
                                        }}
                                    />


                                    <div
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            background:
                                                "linear-gradient(180deg,rgba(5,11,22,.05),rgba(5,11,22,.95))"
                                        }}
                                    />


                                    <div
                                        style={{
                                            position: "absolute",
                                            left: "18px",
                                            bottom: "16px"
                                        }}
                                    >

                                        <div
                                            style={{
                                                fontSize: "8px",
                                                color: item.color,
                                                letterSpacing: ".2em",
                                                fontWeight: 700,
                                                marginBottom: "5px"
                                            }}
                                        >
                                            {item.subtitle}
                                        </div>

                                        <div
                                            style={{
                                                fontSize: "20px",
                                                fontWeight: 700
                                            }}
                                        >
                                            {item.title}
                                        </div>

                                    </div>


                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "12px",
                                            right: "12px",
                                            width: "25px",
                                            height: "25px",
                                            borderRadius: "50%",
                                            border:
                                                `1px solid ${item.color}55`,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: item.color,
                                            fontSize: "12px"
                                        }}
                                    >
                                        ↗
                                    </div>

                                </div>

                            </div>

                        ))}


                        {/* MERGE POINT */}

                        <div
                            style={{
                                position: "absolute",
                                left: "50%",
                                bottom: "0",
                                transform: "translateX(-50%)",
                                textAlign: "center"
                            }}
                        >

                            <div
                                style={{
                                    width: "10px",
                                    height: "10px",
                                    borderRadius: "50%",
                                    background: "#61E6D8",
                                    margin: "0 auto 8px",
                                    boxShadow:
                                        "0 0 25px rgba(97,230,216,.9)",
                                    animation:
                                        "pulse 2s ease-in-out infinite"
                                }}
                            />

                            <div
                                style={{
                                    color: "rgba(255,255,255,.3)",
                                    fontSize: "8px",
                                    letterSpacing: ".25em"
                                }}
                            >
                                ONE DIRECTION
                            </div>

                        </div>

                    </div>


                    {/* WORKFLOW */}

                    <div
                        style={{
                            position: "relative",
                            marginTop: "10px",
                            paddingTop: "35px"
                        }}
                    >

                        {/* LINE */}

                        <div
                            style={{
                                position: "absolute",
                                left: "4%",
                                right: "4%",
                                top: "51px",
                                height: "1px",
                                background:
                                    "linear-gradient(90deg,rgba(142,164,255,.15),rgba(97,230,216,.5),rgba(142,164,255,.15))"
                            }}
                        />


                        {/* MOVING ENERGY */}

                        <div
                            style={{
                                position: "absolute",
                                top: "46px",
                                width: "9px",
                                height: "9px",
                                borderRadius: "50%",
                                background: "#61E6D8",
                                boxShadow:
                                    "0 0 25px rgba(97,230,216,1)",
                                animation:
                                    "travel 6s linear infinite"
                            }}
                        />


                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                position: "relative"
                            }}
                        >

                            {steps.map((step, index) => (

                                <div
                                    key={step.title}
                                    style={{
                                        width: "18%",
                                        textAlign: "center",
                                        animation:
                                            `fadeUp .7s ease-out ${index * .12}s both`
                                    }}
                                >

                                    {/* NUMBER */}

                                    <div
                                        style={{
                                            width: "30px",
                                            height: "30px",
                                            borderRadius: "50%",
                                            margin: "0 auto 12px",

                                            background: "#050B16",

                                            border:
                                                `1px solid ${step.color}70`,

                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",

                                            color: step.color,
                                            fontSize: "8px",
                                            fontWeight: 700,

                                            boxShadow:
                                                `0 0 20px ${step.color}18`
                                        }}
                                    >
                                        {step.number}
                                    </div>


                                    {/* TITLE */}

                                    <div
                                        style={{
                                            color: step.color,
                                            fontSize: "11px",
                                            fontWeight: 700,
                                            letterSpacing: ".16em",
                                            marginBottom: "6px"
                                        }}
                                    >
                                        {step.title}
                                    </div>


                                    {/* DESCRIPTION */}

                                    <div
                                        style={{
                                            color:
                                                "rgba(255,255,255,.32)",
                                            fontSize: "10px"
                                        }}
                                    >
                                        {step.text}
                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>


                    {/* FINAL RESULT */}

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "18px",
                            marginTop: "28px",
                            animation:
                                "resultReveal 1s ease-out 1s both"
                        }}
                    >

                        <div
                            style={{
                                height: "1px",
                                width: "120px",
                                background:
                                    "linear-gradient(90deg,transparent,#61E6D8)"
                            }}
                        />

                        <div
                            style={{
                                textAlign: "center"
                            }}
                        >

                            <div
                                style={{
                                    fontSize: "9px",
                                    letterSpacing: ".3em",
                                    color: "#61E6D8",
                                    marginBottom: "6px"
                                }}
                            >
                                AFTER THREE MONTHS
                            </div>

                            <div
                                style={{
                                    fontSize: "25px",
                                    fontWeight: 700,
                                    letterSpacing: "-.03em"
                                }}
                            >
                                THE RESULT
                            </div>

                        </div>


                        <div
                            style={{
                                height: "1px",
                                width: "120px",
                                background:
                                    "linear-gradient(90deg,#61E6D8,transparent)"
                            }}
                        />

                    </div>


                    <div
                        style={{
                            textAlign: "center",
                            marginTop: "10px",
                            color: "rgba(255,255,255,.22)",
                            fontSize: "9px",
                            letterSpacing: ".2em"
                        }}
                    >
                        BUILD · TEST · BREAK · FIX · RETEST · DONE
                    </div>

                </div>


                {/* IMAGE PREVIEW */}

                {active && (

                    <div
                        onClick={() => setActive(null)}
                        style={{
                            position: "absolute",
                            inset: 0,
                            zIndex: 50,

                            background:
                                "rgba(2,6,15,.94)",

                            backdropFilter: "blur(20px)",

                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",

                            padding: "40px",

                            cursor: "zoom-out"
                        }}
                    >

                        <div
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                position: "relative",
                                maxWidth: "90%",
                                maxHeight: "88%",

                                borderRadius: "22px",
                                overflow: "hidden",

                                border:
                                    `1px solid ${active.color}55`,

                                boxShadow:
                                    `0 0 100px ${active.color}20, 0 30px 100px rgba(0,0,0,.7)`
                            }}
                        >

                            <img
                                src={active.image}
                                alt={active.title}
                                style={{
                                    display: "block",
                                    maxWidth: "88vw",
                                    maxHeight: "82vh",
                                    objectFit: "contain"
                                }}
                            />

                            <div
                                style={{
                                    position: "absolute",
                                    left: "22px",
                                    bottom: "18px",
                                    color: "white",
                                    fontSize: "13px",
                                    fontWeight: 700,
                                    letterSpacing: ".18em",
                                    textShadow:
                                        "0 2px 15px rgba(0,0,0,.9)"
                                }}
                            >
                                {active.title}
                            </div>


                            <button
                                onClick={() => setActive(null)}
                                style={{
                                    position: "absolute",
                                    top: "15px",
                                    right: "15px",
                                    width: "36px",
                                    height: "36px",
                                    borderRadius: "50%",
                                    border:
                                        "1px solid rgba(255,255,255,.25)",
                                    background:
                                        "rgba(5,11,22,.75)",
                                    color: "white",
                                    fontSize: "20px",
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

/* VARIANT 2 */
window.FromVisionToWorkSlide2 = () => {

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

                    @keyframes floatParticle {
                        0% {
                            transform: translateY(0);
                            opacity: 0;
                        }

                        15% {
                            opacity: .7;
                        }

                        80% {
                            opacity: .3;
                        }

                        100% {
                            transform: translateY(-100vh);
                            opacity: 0;
                        }
                    }

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

                    @keyframes ticketMove {
                        0% {
                            left: 4%;
                            top: 50%;
                            opacity: 0;
                        }

                        8% {
                            opacity: 1;
                        }

                        25% {
                            left: 27%;
                            top: 50%;
                        }

                        42% {
                            left: 50%;
                            top: 50%;
                        }

                        58% {
                            left: 68%;
                            top: 50%;
                        }

                        72% {
                            left: 82%;
                            top: 50%;
                        }

                        82% {
                            left: 92%;
                            top: 50%;
                            opacity: 1;
                        }

                        90% {
                            left: 82%;
                            top: 70%;
                            opacity: 1;
                        }

                        100% {
                            left: 68%;
                            top: 50%;
                            opacity: 0;
                        }
                    }

                    @keyframes pulseNode {
                        0%,100% {
                            transform: scale(1);
                            box-shadow: 0 0 0 rgba(97,230,216,0);
                        }

                        50% {
                            transform: scale(1.12);
                            box-shadow: 0 0 30px rgba(97,230,216,.25);
                        }
                    }

                    @keyframes scan {
                        from {
                            transform: translateX(-120%);
                        }

                        to {
                            transform: translateX(120%);
                        }
                    }

                    @keyframes rotateSlow {
                        from {
                            transform: rotate(0deg);
                        }

                        to {
                            transform: rotate(360deg);
                        }
                    }

                    `}
                </style>


                {/* ========================= */}
                {/* BACKGROUND */}
                {/* ========================= */}

                <div
                    style={{
                        position: "absolute",
                        width: "700px",
                        height: "700px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(142,164,255,.12), transparent 68%)",
                        filter: "blur(70px)",
                        top: "-300px",
                        left: "-150px"
                    }}
                />

                <div
                    style={{
                        position: "absolute",
                        width: "600px",
                        height: "600px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(97,230,216,.09), transparent 68%)",
                        filter: "blur(70px)",
                        bottom: "-300px",
                        right: "-150px"
                    }}
                />


                {/* FLOATING PARTICLES */}

                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        overflow: "hidden",
                        pointerEvents: "none"
                    }}
                >

                    {Array.from({ length: 25 }).map((_, i) => (

                        <div
                            key={i}
                            style={{
                                position: "absolute",
                                left: `${(i * 43) % 100}%`,
                                bottom: "-10px",

                                width: `${2 + (i % 3)}px`,
                                height: `${2 + (i % 3)}px`,

                                borderRadius: "50%",

                                background:
                                    i % 2
                                        ? "#8EA4FF"
                                        : "#61E6D8",

                                boxShadow:
                                    "0 0 12px currentColor",

                                animation:
                                    `floatParticle ${7 + i % 5}s linear infinite`,

                                animationDelay:
                                    `${-(i % 6)}s`
                            }}
                        />

                    ))}

                </div>


                {/* ========================= */}
                {/* CONTENT */}
                {/* ========================= */}

                <div
                    style={{
                        width: "90%",
                        maxWidth: "1250px",
                        position: "relative",
                        zIndex: 5,
                        animation: "fadeUp .8s ease-out"
                    }}
                >


                    {/* HEADER */}

                    <div
                        style={{
                            textAlign: "center",
                            marginBottom: "55px"
                        }}
                    >

                        <div
                            style={{
                                color: "#61E6D8",
                                fontSize: "10px",
                                fontWeight: 700,
                                letterSpacing: ".32em",
                                marginBottom: "18px"
                            }}
                        >
                            THE LIFE OF A TICKET
                        </div>


                        <h1
                            className="display"
                            style={{
                                margin: 0,
                                color: "white",
                                fontSize: "clamp(50px,6vw,78px)",
                                lineHeight: ".9",
                                letterSpacing: "-.06em"
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
                                marginTop: "18px",
                                color: "rgba(255,255,255,.4)",
                                fontSize: "15px"
                            }}
                        >
                            One ticket. Multiple hands. One final decision.
                        </p>

                    </div>


                    {/* ========================= */}
                    {/* FLOW */}
                    {/* ========================= */}

                    <div
                        style={{
                            position: "relative",
                            height: "300px"
                        }}
                    >


                        {/* MAIN FLOW LINE */}

                        <div
                            style={{
                                position: "absolute",
                                left: "6%",
                                right: "6%",
                                top: "50%",
                                height: "2px",

                                background:
                                    "linear-gradient(90deg, rgba(142,164,255,.15), rgba(142,164,255,.65), rgba(97,230,216,.7), rgba(142,164,255,.25))",

                                boxShadow:
                                    "0 0 20px rgba(97,230,216,.08)"
                            }}
                        />


                        {/* MOVING LIGHT */}

                        <div
                            style={{
                                position: "absolute",
                                top: "calc(50% - 4px)",
                                left: "4%",

                                width: "8px",
                                height: "8px",

                                borderRadius: "50%",

                                background: "#61E6D8",

                                boxShadow:
                                    "0 0 25px rgba(97,230,216,1)",

                                animation:
                                    "ticketMove 7s ease-in-out infinite"
                            }}
                        />


                        {/* NODES */}

                        {[
                            {
                                x: "8%",
                                title: "TICKET",
                                subtitle: "ARRIVES",
                                icon: "✦",
                                color: "#8EA4FF"
                            },
                            {
                                x: "28%",
                                title: "DEV",
                                subtitle: "TAKES IT",
                                icon: "⌘",
                                color: "#8EA4FF"
                            },
                            {
                                x: "48%",
                                title: "BE ↔ FE",
                                subtitle: "SYNC",
                                icon: "↔",
                                color: "#61E6D8"
                            },
                            {
                                x: "68%",
                                title: "QA",
                                subtitle: "VERIFICATION",
                                icon: "◌",
                                color: "#61E6D8"
                            },
                            {
                                x: "88%",
                                title: "DECISION",
                                subtitle: "PASS / FAIL",
                                icon: "✓",
                                color: "#61E6D8"
                            }
                        ].map((item, index) => (

                            <div
                                key={item.title}
                                style={{
                                    position: "absolute",
                                    left: item.x,
                                    top: "50%",
                                    transform: "translate(-50%,-50%)",
                                    width: "155px",
                                    textAlign: "center",
                                    zIndex: 5
                                }}
                            >

                                {/* NODE */}

                                <div
                                    style={{
                                        width: "52px",
                                        height: "52px",
                                        margin: "0 auto 14px",

                                        borderRadius: "50%",

                                        background:
                                            "rgba(5,11,22,.95)",

                                        border:
                                            `1px solid ${item.color}70`,

                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",

                                        color: item.color,
                                        fontSize: "20px",

                                        boxShadow:
                                            `0 0 30px ${item.color}18`,

                                        animation:
                                            index === 3
                                                ? "pulseNode 2.5s ease-in-out infinite"
                                                : "none"
                                    }}
                                >
                                    {item.icon}
                                </div>


                                {/* LABEL */}

                                <div
                                    style={{
                                        color: item.color,
                                        fontSize: "11px",
                                        fontWeight: 700,
                                        letterSpacing: ".16em",
                                        marginBottom: "6px"
                                    }}
                                >
                                    {item.title}
                                </div>


                                <div
                                    style={{
                                        color: "rgba(255,255,255,.3)",
                                        fontSize: "9px",
                                        letterSpacing: ".1em"
                                    }}
                                >
                                    {item.subtitle}
                                </div>

                            </div>

                        ))}


                        {/* ========================= */}
                        {/* DEV DETAILS */}
                        {/* ========================= */}

                        <div
                            style={{
                                position: "absolute",
                                left: "27%",
                                top: "calc(50% + 70px)",
                                transform: "translateX(-50%)",

                                display: "flex",
                                gap: "8px"
                            }}
                        >

                            <div
                                style={{
                                    padding: "7px 13px",
                                    borderRadius: "20px",
                                    background:
                                        "rgba(142,164,255,.06)",
                                    border:
                                        "1px solid rgba(142,164,255,.15)",
                                    color: "rgba(255,255,255,.4)",
                                    fontSize: "9px"
                                }}
                            >
                                BACKEND
                            </div>

                            <div
                                style={{
                                    padding: "7px 13px",
                                    borderRadius: "20px",
                                    background:
                                        "rgba(142,164,255,.06)",
                                    border:
                                        "1px solid rgba(142,164,255,.15)",
                                    color: "rgba(255,255,255,.4)",
                                    fontSize: "9px"
                                }}
                            >
                                FRONTEND
                            </div>

                        </div>


                        {/* ========================= */}
                        {/* SYNC DETAIL */}
                        {/* ========================= */}

                        <div
                            style={{
                                position: "absolute",
                                left: "48%",
                                top: "calc(50% - 105px)",
                                transform: "translateX(-50%)",

                                padding: "10px 16px",
                                borderRadius: "14px",

                                background:
                                    "rgba(97,230,216,.05)",

                                border:
                                    "1px solid rgba(97,230,216,.18)",

                                color: "rgba(255,255,255,.5)",
                                fontSize: "9px",
                                textAlign: "center"
                            }}
                        >
                            coordinate
                            <br />
                            AEM changes
                        </div>


                        {/* ========================= */}
                        {/* QA TAKEOVER */}
                        {/* ========================= */}

                        <div
                            style={{
                                position: "absolute",
                                left: "68%",
                                top: "calc(50% + 70px)",
                                transform: "translateX(-50%)",

                                padding: "8px 16px",
                                borderRadius: "20px",

                                background:
                                    "rgba(97,230,216,.06)",

                                border:
                                    "1px solid rgba(97,230,216,.18)",

                                color: "#61E6D8",
                                fontSize: "9px",
                                letterSpacing: ".1em"
                            }}
                        >
                            QA TAKES OVER
                        </div>


                        {/* ========================= */}
                        {/* PASS */}
                        {/* ========================= */}

                        <div
                            style={{
                                position: "absolute",
                                right: "-10px",
                                top: "calc(50% + 70px)",

                                padding: "9px 16px",
                                borderRadius: "14px",

                                background:
                                    "rgba(97,230,216,.07)",

                                border:
                                    "1px solid rgba(97,230,216,.25)",

                                color: "#61E6D8",
                                fontSize: "9px",
                                fontWeight: 700
                            }}
                        >
                            ✓ CLOSED
                        </div>


                        {/* ========================= */}
                        {/* FAIL LOOP */}
                        {/* ========================= */}

                        <svg
                            style={{
                                position: "absolute",
                                inset: 0,
                                width: "100%",
                                height: "100%",
                                pointerEvents: "none",
                                overflow: "visible"
                            }}
                        >

                            <defs>

                                <linearGradient
                                    id="bugLoop"
                                    x1="0%"
                                    x2="100%"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="#FF8FA3"
                                        stopOpacity=".2"
                                    />

                                    <stop
                                        offset="50%"
                                        stopColor="#FF8FA3"
                                        stopOpacity=".8"
                                    />

                                    <stop
                                        offset="100%"
                                        stopColor="#8EA4FF"
                                        stopOpacity=".5"
                                    />

                                </linearGradient>

                            </defs>


                            <path
                                d="
                                    M 91% 55%
                                    C 95% 95%,
                                      60% 100%,
                                      28% 60%
                                "
                                fill="none"
                                stroke="url(#bugLoop)"
                                strokeWidth="2"
                                strokeDasharray="5 8"
                            />

                        </svg>


                        {/* BUG LABEL */}

                        <div
                            style={{
                                position: "absolute",
                                right: "3%",
                                bottom: "-5px",

                                color: "#FF8FA3",
                                fontSize: "9px",
                                letterSpacing: ".16em",
                                fontWeight: 700
                            }}
                        >
                            ✕ BUG FOUND → BACK TO DEV
                        </div>

                    </div>


                    {/* ========================= */}
                    {/* BOTTOM MESSAGE */}
                    {/* ========================= */}

                    <div
                        style={{
                            marginTop: "20px",
                            textAlign: "center"
                        }}
                    >

                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "14px",

                                padding: "12px 22px",

                                borderRadius: "30px",

                                background:
                                    "rgba(255,255,255,.035)",

                                border:
                                    "1px solid rgba(255,255,255,.08)"
                            }}
                        >

                            <span
                                style={{
                                    width: "7px",
                                    height: "7px",
                                    borderRadius: "50%",
                                    background: "#61E6D8",
                                    boxShadow:
                                        "0 0 12px #61E6D8"
                                }}
                            />

                            <span
                                style={{
                                    color:
                                        "rgba(255,255,255,.5)",
                                    fontSize: "10px",
                                    letterSpacing: ".16em"
                                }}
                            >
                                NOT JUST DEVELOPMENT
                            </span>

                            <span
                                style={{
                                    color: "white",
                                    fontSize: "10px",
                                    fontWeight: 700,
                                    letterSpacing: ".16em"
                                }}
                            >
                                BUILD → VERIFY → IMPROVE
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </SlideRoot>
    );
};

window.TicketLifecycleFlowSlide = () => {

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

                    @keyframes floatParticle {
                        0% { transform: translateY(0); opacity: 0; }
                        15% { opacity: .7; }
                        80% { opacity: .3; }
                        100% { transform: translateY(-100vh); opacity: 0; }
                    }

                    @keyframes fadeUp {
                        from { opacity: 0; transform: translateY(25px); }
                        to { opacity: 1; transform: translateY(0); }
                    }

                    @keyframes ticketTop {
                        0% { left: 5%; top: 25%; opacity: 0; }
                        6% { opacity: 1; }
                        30% { left: 26%; top: 25%; }
                        50% { left: 54%; top: 50%; }
                        68% { left: 76%; top: 50%; }
                        88% { left: 94%; top: 25%; opacity: 1; }
                        100% { left: 94%; top: 25%; opacity: 0; }
                    }

                    @keyframes ticketBottom {
                        0% { left: 5%; top: 75%; opacity: 0; }
                        6% { opacity: 1; }
                        30% { left: 26%; top: 75%; }
                        50% { left: 54%; top: 50%; }
                        68% { left: 76%; top: 50%; }
                        86% { left: 94%; top: 75%; opacity: 1; }
                        100% { left: 94%; top: 75%; opacity: 0; }
                    }

                    @keyframes pulseNode {
                        0%,100% { transform: scale(1); box-shadow: 0 0 0 rgba(97,230,216,0); }
                        50% { transform: scale(1.12); box-shadow: 0 0 30px rgba(97,230,216,.25); }
                    }

                    @keyframes dashFlow {
                        to { stroke-dashoffset: -200; }
                    }

                    @keyframes syncPulse {
                        0%,100% { opacity: .35; }
                        50% { opacity: .9; }
                    }

                    `}
                </style>


                {/* ========================= */}
                {/* BACKGROUND */}
                {/* ========================= */}

                <div
                    style={{
                        position: "absolute",
                        width: "700px",
                        height: "700px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(142,164,255,.12), transparent 68%)",
                        filter: "blur(70px)",
                        top: "-300px",
                        left: "-150px"
                    }}
                />

                <div
                    style={{
                        position: "absolute",
                        width: "600px",
                        height: "600px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(97,230,216,.09), transparent 68%)",
                        filter: "blur(70px)",
                        bottom: "-300px",
                        right: "-150px"
                    }}
                />

                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        overflow: "hidden",
                        pointerEvents: "none"
                    }}
                >
                    {Array.from({ length: 25 }).map((_, i) => (
                        <div
                            key={i}
                            style={{
                                position: "absolute",
                                left: `${(i * 43) % 100}%`,
                                bottom: "-10px",
                                width: `${2 + (i % 3)}px`,
                                height: `${2 + (i % 3)}px`,
                                borderRadius: "50%",
                                background: i % 2 ? "#8EA4FF" : "#61E6D8",
                                boxShadow: "0 0 12px currentColor",
                                animation: `floatParticle ${7 + i % 5}s linear infinite`,
                                animationDelay: `${-(i % 6)}s`
                            }}
                        />
                    ))}
                </div>


                {/* ========================= */}
                {/* CONTENT */}
                {/* ========================= */}

                <div
                    style={{
                        width: "94%",
                        maxWidth: "1320px",
                        position: "relative",
                        zIndex: 5,
                        animation: "fadeUp .8s ease-out"
                    }}
                >

                    {/* HEADER */}

                    <div style={{ textAlign: "center", marginBottom: "40px" }}>

                        <div
                            style={{
                                color: "#61E6D8",
                                fontSize: "10px",
                                fontWeight: 700,
                                letterSpacing: ".32em",
                                marginBottom: "18px"
                            }}
                        >
                            THE LIFE OF A TICKET
                        </div>

                        <h1
                            className="display"
                            style={{
                                margin: 0,
                                color: "white",
                                fontSize: "clamp(44px,5.4vw,68px)",
                                lineHeight: ".9",
                                letterSpacing: "-.06em"
                            }}
                        >
                            From ticket
                            <br />
                            <span
                                style={{
                                    background: "linear-gradient(90deg,#fff,#8EA4FF,#61E6D8)",
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
                                color: "rgba(255,255,255,.4)",
                                fontSize: "14px"
                            }}
                        >
                            One ticket. Two tracks. One verification gate.
                        </p>

                    </div>


                    {/* ========================= */}
                    {/* FLOW CANVAS */}
                    {/* ========================= */}

                    <div
                        style={{
                            position: "relative",
                            height: "430px"
                        }}
                    >

                        {/* ================= SVG PATHS ================= */}

                        <svg
                            style={{
                                position: "absolute",
                                inset: 0,
                                width: "100%",
                                height: "100%",
                                pointerEvents: "none",
                                overflow: "visible"
                            }}
                        >

                            <defs>

                                <linearGradient id="mainFlow" x1="0%" x2="100%">
                                    <stop offset="0%" stopColor="#8EA4FF" stopOpacity=".15" />
                                    <stop offset="35%" stopColor="#8EA4FF" stopOpacity=".7" />
                                    <stop offset="70%" stopColor="#61E6D8" stopOpacity=".8" />
                                    <stop offset="100%" stopColor="#61E6D8" stopOpacity=".3" />
                                </linearGradient>

                                <linearGradient id="bugLoop" x1="0%" x2="100%">
                                    <stop offset="0%" stopColor="#FF8FA3" stopOpacity=".15" />
                                    <stop offset="50%" stopColor="#FF8FA3" stopOpacity=".8" />
                                    <stop offset="100%" stopColor="#FF8FA3" stopOpacity=".2" />
                                </linearGradient>

                            </defs>

                            {/* ticket -> BE (top track) */}
                            <path
                                d="M 6% 50% C 14% 50%, 16% 25%, 25% 25%"
                                fill="none"
                                stroke="url(#mainFlow)"
                                strokeWidth="2"
                            />

                            {/* ticket -> FE (bottom track) */}
                            <path
                                d="M 6% 50% C 14% 50%, 16% 75%, 25% 75%"
                                fill="none"
                                stroke="url(#mainFlow)"
                                strokeWidth="2"
                            />

                            {/* BE track forward to merge */}
                            <path
                                d="M 27% 25% C 40% 25%, 44% 45%, 53% 49%"
                                fill="none"
                                stroke="url(#mainFlow)"
                                strokeWidth="2"
                            />

                            {/* FE track forward to merge */}
                            <path
                                d="M 27% 75% C 40% 75%, 44% 55%, 53% 51%"
                                fill="none"
                                stroke="url(#mainFlow)"
                                strokeWidth="2"
                            />

                            {/* BE <-> FE sync connector (double-headed) */}
                            <path
                                d="M 26% 29% C 20% 50%, 20% 50%, 26% 71%"
                                fill="none"
                                stroke="#61E6D8"
                                strokeWidth="1.5"
                                strokeDasharray="4 5"
                                style={{ animation: "dashFlow 3s linear infinite", opacity: .8 }}
                            />

                            {/* QA -> decision */}
                            <path
                                d="M 58% 50% L 74% 50%"
                                fill="none"
                                stroke="url(#mainFlow)"
                                strokeWidth="2"
                            />

                            {/* decision -> closed (pass) */}
                            <path
                                d="M 78% 47% C 84% 38%, 87% 30%, 92% 25%"
                                fill="none"
                                stroke="#61E6D8"
                                strokeWidth="2"
                            />

                            {/* decision -> bug (fail) */}
                            <path
                                d="M 78% 53% C 84% 62%, 87% 70%, 92% 75%"
                                fill="none"
                                stroke="#FF8FA3"
                                strokeWidth="2"
                            />

                            {/* bug loop back -> BE */}
                            <path
                                d="M 90% 78% C 65% 96%, 38% 90%, 26% 30%"
                                fill="none"
                                stroke="url(#bugLoop)"
                                strokeWidth="1.5"
                                strokeDasharray="5 8"
                            />

                            {/* bug loop back -> FE */}
                            <path
                                d="M 90% 79% C 70% 90%, 45% 84%, 26% 78%"
                                fill="none"
                                stroke="url(#bugLoop)"
                                strokeWidth="1.5"
                                strokeDasharray="5 8"
                            />

                        </svg>


                        {/* ================= MOVING TICKET LIGHTS ================= */}

                        <div
                            style={{
                                position: "absolute",
                                top: "calc(25% - 4px)",
                                left: "5%",
                                width: "7px",
                                height: "7px",
                                borderRadius: "50%",
                                background: "#8EA4FF",
                                boxShadow: "0 0 22px rgba(142,164,255,1)",
                                animation: "ticketTop 9s ease-in-out infinite"
                            }}
                        />

                        <div
                            style={{
                                position: "absolute",
                                top: "calc(75% - 4px)",
                                left: "5%",
                                width: "7px",
                                height: "7px",
                                borderRadius: "50%",
                                background: "#61E6D8",
                                boxShadow: "0 0 22px rgba(97,230,216,1)",
                                animation: "ticketBottom 9s ease-in-out infinite",
                                animationDelay: "-2.5s"
                            }}
                        />


                        {/* ================= NODES ================= */}

                        {[
                            { x: "6%", y: "50%", title: "TICKET", subtitle: "ON BOARD", icon: "✦", color: "#8EA4FF", w: "120px" },
                            { x: "26%", y: "25%", title: "BE", subtitle: "TAKES IT", icon: "⌘", color: "#8EA4FF", w: "130px" },
                            { x: "26%", y: "75%", title: "FE", subtitle: "TAKES IT", icon: "⌘", color: "#61E6D8", w: "130px" },
                            { x: "55%", y: "50%", title: "QA", subtitle: "VERIFICATION", icon: "◌", color: "#61E6D8", w: "140px", pulse: true },
                            { x: "76%", y: "50%", title: "DECISION", subtitle: "OK / NOT OK", icon: "?", color: "#8EA4FF", w: "130px" },
                            { x: "94%", y: "25%", title: "CLOSED", subtitle: "TICKET DONE", icon: "✓", color: "#61E6D8", w: "130px" },
                            { x: "94%", y: "75%", title: "BUG FOUND", subtitle: "SENT BACK", icon: "✕", color: "#FF8FA3", w: "140px" }
                        ].map((item) => (
                            <div
                                key={item.title}
                                style={{
                                    position: "absolute",
                                    left: item.x,
                                    top: item.y,
                                    transform: "translate(-50%,-50%)",
                                    width: item.w,
                                    textAlign: "center",
                                    zIndex: 5
                                }}
                            >
                                <div
                                    style={{
                                        width: "48px",
                                        height: "48px",
                                        margin: "0 auto 10px",
                                        borderRadius: "50%",
                                        background: "rgba(5,11,22,.95)",
                                        border: `1px solid ${item.color}70`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: item.color,
                                        fontSize: "18px",
                                        boxShadow: `0 0 26px ${item.color}18`,
                                        animation: item.pulse ? "pulseNode 2.5s ease-in-out infinite" : "none"
                                    }}
                                >
                                    {item.icon}
                                </div>

                                <div
                                    style={{
                                        color: item.color,
                                        fontSize: "11px",
                                        fontWeight: 700,
                                        letterSpacing: ".14em",
                                        marginBottom: "5px"
                                    }}
                                >
                                    {item.title}
                                </div>

                                <div
                                    style={{
                                        color: "rgba(255,255,255,.3)",
                                        fontSize: "9px",
                                        letterSpacing: ".1em"
                                    }}
                                >
                                    {item.subtitle}
                                </div>
                            </div>
                        ))}


                        {/* ================= SYNC LABEL ================= */}

                        <div
                            style={{
                                position: "absolute",
                                left: "13%",
                                top: "50%",
                                transform: "translate(-50%,-50%)",
                                padding: "9px 14px",
                                borderRadius: "12px",
                                background: "rgba(97,230,216,.05)",
                                border: "1px solid rgba(97,230,216,.18)",
                                color: "rgba(255,255,255,.55)",
                                fontSize: "9px",
                                lineHeight: 1.5,
                                textAlign: "center",
                                width: "110px",
                                animation: "syncPulse 3s ease-in-out infinite"
                            }}
                        >
                            BE ↔ FE SYNC
                            <br />
                            coordinate AEM changes
                        </div>


                        {/* ================= BUG RETURN LABELS ================= */}

                        <div
                            style={{
                                position: "absolute",
                                left: "48%",
                                top: "89%",
                                transform: "translate(-50%,-50%)",
                                color: "#FF8FA3",
                                fontSize: "8.5px",
                                letterSpacing: ".12em",
                                fontWeight: 700,
                                whiteSpace: "nowrap"
                            }}
                        >
                            ✕ NOT OK → BACK TO BE
                        </div>

                        <div
                            style={{
                                position: "absolute",
                                left: "58%",
                                top: "83%",
                                transform: "translate(-50%,-50%)",
                                color: "#FF8FA3",
                                fontSize: "8.5px",
                                letterSpacing: ".12em",
                                fontWeight: 700,
                                whiteSpace: "nowrap"
                            }}
                        >
                            ✕ NOT OK → BACK TO FE
                        </div>


                        {/* ================= QA TAKES OVER BADGE ================= */}

                        <div
                            style={{
                                position: "absolute",
                                left: "55%",
                                top: "22%",
                                transform: "translate(-50%,-50%)",
                                padding: "6px 14px",
                                borderRadius: "20px",
                                background: "rgba(97,230,216,.06)",
                                border: "1px solid rgba(97,230,216,.18)",
                                color: "#61E6D8",
                                fontSize: "9px",
                                letterSpacing: ".12em",
                                whiteSpace: "nowrap"
                            }}
                        >
                            QA TAKES OVER
                        </div>

                    </div>


                    {/* ========================= */}
                    {/* BOTTOM MESSAGE */}
                    {/* ========================= */}

                    <div style={{ marginTop: "10px", textAlign: "center" }}>

                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "14px",
                                padding: "12px 22px",
                                borderRadius: "30px",
                                background: "rgba(255,255,255,.035)",
                                border: "1px solid rgba(255,255,255,.08)"
                            }}
                        >

                            <span
                                style={{
                                    width: "7px",
                                    height: "7px",
                                    borderRadius: "50%",
                                    background: "#61E6D8",
                                    boxShadow: "0 0 12px #61E6D8"
                                }}
                            />

                            <span
                                style={{
                                    color: "rgba(255,255,255,.5)",
                                    fontSize: "10px",
                                    letterSpacing: ".16em"
                                }}
                            >
                                TWO TRACKS, ONE GATE
                            </span>

                            <span
                                style={{
                                    color: "white",
                                    fontSize: "10px",
                                    fontWeight: 700,
                                    letterSpacing: ".16em"
                                }}
                            >
                                BOARD → BE/FE → SYNC → QA → DONE
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
    window.FromVisionToWorkSlide2,
    window.FromVisionToWorkSlide,
    window.TicketLifecycleFlowSlide
]