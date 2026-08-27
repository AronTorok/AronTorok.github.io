import Card from "./Card.jsx";

function calculateAge(birthDateString) {
  const today = new Date();
  const birthDate = new Date(birthDateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}

function Home() {
  return (
    <>
      <h1 className="text-center text-5xl font-extrabold mt-16" id="about">
        About Me
      </h1>
      <div className="mx-auto max-w-2xl text-center mt-10">
        <div className="bg-white rounded-md shadow-2xl p-5 mx-4 flex flex-col gap-4">
          <img
            src="profile.jpg"
            alt="Profile"
            className="w-65 mx-auto rounded-full shadow-2xl"
          />
          <p className="text-xl">
            • I'm a {calculateAge("2001-10-10")} years old Economic Informatics
            Graduate of UBB - FSEGA, living in Cluj-Napoca, Romania.
            Self-learning is a principle I consider crucial to development.
          </p>
          <p className="text-xl">
            • Languages and tools I have experience with: HTML, CSS, JavaScript,
            GSAP, Tailwind, Bootstrap, React, PHP, Figma, Java, C, C++, C#, SQL,
            Linux/Unix, AI, Python, ERPs, Docker, Git and Testing.
          </p>
          <p className="text-xl">
            • I am passionate about the entire design and development process of
            websites, applications and user interfaces in general.
          </p>
        </div>
      </div>

      <h1 className="text-center text-5xl font-extrabold mt-25" id="portfolio">
        My Portfolio
      </h1>
      <div className="container mx-auto mt-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mx-6">
          <Card
            image="shop.jpg"
            title="PHP webshop"
            text={
              <>
                A fullstack project using PHP (including PHPMyAdmin), HTML, CSS,
                JS and Bootstrap.
              </>
            }
            button="https://www.youtube.com/watch?v=XOmSpSYSD9g"
            buttonText="Watch Demo"
          />
          <Card
            image="aoc_logo.png"
            title="ONCOHEM website"
            text={
              <>
                I personally developed, and actively maintain their website,
                using HTML, CSS, JavaScript, Bootstrap and React (including
                routing). Started in 2023.
              </>
            }
            button="https://oncohem.github.io/"
            buttonText="Visit website"
          />
          <Card
            image="demo.png"
            title="Frontend Demo Projects"
            text={
              <>
                A collection of websites using languages and frameworks, such as
                React, HTML, CSS, JS, Tailwind, Bootstrap, GASP and Three.JS.
              </>
            }
            button="#/demos"
            buttonText="See Demos"
          />
          <Card
            image="cursor.png"
            title="AnnoyingAdClicker Java Project"
            text={
              <>
                A Java minigame, where the goal is to close the ads that pop up
                randomly as fast as possible.
              </>
            }
            button="https://www.youtube.com/watch?v=0pFYyOo6JQg"
            buttonText="Watch Demo"
          />
          <Card
            image="grafana.jpg"
            title="Docker BI Project"
            text={<>A Data Visualisation Project about Earthquake Data.</>}
            button=""
            buttonText=""
          />
          <Card
            image="colab.png"
            title="Python AI Project"
            text={
              <>
                A Data Normalisation and Interpretation project, using Python
                and AI.
              </>
            }
            button="https://colab.research.google.com/drive/14cB-BYkAEZ6RroJAtkaw6Te01WFoLoYP?usp=sharing"
            buttonText="View Project"
          />
          <Card
            image="fsega.png"
            title="Economic Informatics graduate of UBB - FSEGA"
            text={<>Graduated in 2025.</>}
            button="https://www.ubbcluj.ro/ro/"
            buttonText="Visit Website"
          />
          <Card
            image="cambridge.png"
            title="Cambridge Assessment English"
            text={
              <>
                Cambridge English Level 2 Certificate in ESOL International
                (Advanced). Received in 2019.
              </>
            }
            button=""
            buttonText=""
          />
          <Card
            image="ux.png"
            title="UXD Thesis"
            text={
              <>
                My thesis presents the differences between UX and UI, and the
                usage of good practices in planning and developing both a
                simple, static website, and a more complex, dynamic web
                application. Completed in 2025.
              </>
            }
            button=""
            buttonText=""
          />
          <Card
            image="ilbah.png"
            title="ILBAH STUDIO"
            text={<>Event Organizer Certificate. Received in 2025.</>}
            button="https://www.ateliereleilbah.ro/"
            buttonText="Visit Website"
          />
        </div>
      </div>

      <h1 className="text-center text-5xl font-extrabold mt-25" id="contact">
        Contact
      </h1>
      <div className="mx-auto max-w-2xl text-center mt-10 mb-10">
        <div className="bg-white rounded-md shadow-2xl p-5 mx-4 flex flex-col items-center gap-4 text-lg">
          <a
            href="https://www.linkedin.com/in/aron-torok-245aa717a/"
            className="flex items-center gap-2.5 w-fit hover:text-zinc-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 12 12"
            >
              <path
                fill="currentColor"
                d="M11 0a1 1 0 0 1 .993.883L12 1v10a1 1 0 0 1-.883.993L11 12H1a1 1 0 0 1-.993-.883L0 11V1A1 1 0 0 1 .883.007L1 0zm0 1H1v10h10zM7.742 4.63c1.502 0 1.78.988 1.78 2.273L9.52 9.52H8.04L8.037 7c-.01-.51-.098-1.065-.769-1.065c-.723 0-.872.53-.888 1.109L6.378 9.52H4.897V4.75h1.422v.65h.02a1.56 1.56 0 0 1 1.403-.771zm-3.776.119V9.52H2.482V4.749zm-.741-2.372a.86.86 0 1 1 0 1.72a.86.86 0 0 1 0-1.72"
              />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/aron.torokvistai/"
            className="flex items-center gap-1 w-fit hover:text-zinc-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12 3.8a8.25 8.25 0 0 0-2.096 16.232v-4.607H8.762a1.2 1.2 0 0 1-1.199-1.199v-1.701a1.2 1.2 0 0 1 1.199-1.199h1.114c-.013-.347-.039-.696-.039-1.043c0-.889.15-2.658 1.553-3.662c.435-.31.844-.516 1.294-.637c.441-.117.883-.143 1.355-.143c.834 0 1.411.083 1.778.136l.165.023a.93.93 0 0 1 .806.92v1.883a.93.93 0 0 1-.97.93c-.153.006-.675.026-1.126.026c-.31 0-.402.071-.434.106c-.045.048-.162.224-.162.764v.697h1.273a1.2 1.2 0 0 1 1.184 1.39l-.259 1.707a1.2 1.2 0 0 1-1.182 1.002h-1.016v4.607A8.25 8.25 0 0 0 12 3.8m-9.75 8.25C2.25 6.665 6.615 2.3 12 2.3s9.75 4.365 9.75 9.75c0 4.89-3.599 8.938-8.293 9.642a.75.75 0 0 1-.86-.742v-6.275a.75.75 0 0 1 .75-.75h1.506l.166-1.099h-1.673a.75.75 0 0 1-.75-.75V10.63c0-.705.145-1.339.567-1.79c.435-.464 1.017-.58 1.53-.58c.196 0 .409-.004.595-.01v-.83a10 10 0 0 0-1.249-.078c-.427 0-.715.025-.967.093c-.243.064-.49.179-.809.407c-.747.535-.924 1.58-.926 2.428l.066 1.78a.75.75 0 0 1-.75.777h-1.59v1.099h1.59a.75.75 0 0 1 .75.75v6.275a.75.75 0 0 1-.86.742C5.849 20.988 2.25 16.94 2.25 12.05"
                clipRule="evenodd"
              />
            </svg>
            Facebook
          </a>
          <a
            href="https://wa.me/40722524396"
            className="flex items-center gap-1 w-fit hover:text-zinc-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="43"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
              />
            </svg>
            Whatsapp
          </a>
          <div className="flex items-center gap-2 w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
              />
            </svg>
            (+40) 722524396
          </div>
          <div className="flex items-center gap-2 w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect width="20" height="16" x="2" y="4" rx="2" />
              </g>
            </svg>
            aron.torokvistai@yahoo.com
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
