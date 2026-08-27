import Card from "./Card.jsx";

function Demos() {
  return (
    <>
      <h1 className="text-center text-5xl font-extrabold mt-16" id="about">
        Demos
      </h1>
      <div className="container mx-auto my-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mx-6">
          <Card
            image="Vector.svg"
            title="U.S. Army website"
            text={
              <>
                I partially remade and redesigned the landing page of their
                website. My goal was to make it a bit more "patriotic".
              </>
            }
            button="https://arontorok.github.io/army/"
            buttonText="Visit website"
          />
          <Card
            image="porsche.png"
            title="Porsche 911 website"
            text={
              <>
                A 3D website with dynamic animations, showcasing a classic
                sports car model.
              </>
            }
            button="https://arontorok.github.io/por/"
            buttonText="Visit website"
          />
          <Card
            image="tj.svg"
            title="Tom and Jerry website"
            text={
              <>
                A website with smooth animations, presenting a few facts about
                the legendary cartoon.
              </>
            }
            button="https://arontorok.github.io/tj/"
            buttonText="Visit website"
          />
          <Card
            image="skyscraper.png"
            title="The Starscraper website"
            text={
              <>
                A website template, showcasing the rooms of a hypothetical
                building.
              </>
            }
            button="https://arontorok.github.io/star/"
            buttonText="Visit website"
          />
          <Card
            image="tv_logo.png"
            title="No Signal Movies website"
            text={
              <>
                A website template, where some critically acclaimed movies are
                presented.
              </>
            }
            button="https://arontorok.github.io/movie/"
            buttonText="Visit website"
          />
          <Card
            image="cel.png"
            title="Cel Shading website"
            text={
              <>
                A 3D website, showing off an animation style, with the help of
                interactive models.
              </>
            }
            button="https://arontorok.github.io/cel/"
            buttonText="Visit website"
          />
          <Card
            image="fn.svg"
            title="Fake News website"
            text={
              <>A Minimalistic Website, showcasing some satirical articles.</>
            }
            button="https://arontorok.github.io/news/"
            buttonText="Visit website"
          />
          <Card
            image="logo-black.svg"
            title="56 Leonard Street website"
            text={
              <>
                An architectural website, presenting an eye-catching skyscraper.
              </>
            }
            button="https://arontorok.github.io/leo/"
            buttonText="Visit website"
          />
          <Card
            image="old_cam.png"
            title="Black & White Movies website"
            text={
              <>
                A grayscale Website Template, showing a few of the classics from
                the golden era of cinema.
              </>
            }
            button="https://arontorok.github.io/bw/"
            buttonText="Visit website"
          />
          <Card
            image="logo2.png"
            title="Nile website"
            text={
              <>
                A visually pleasing website, recommending 9 beautiful landmarks,
                from Egypt to South Sudan.
              </>
            }
            button="https://arontorok.github.io/nile/"
            buttonText="Visit website"
          />
          <Card
            image="horseshoe.png"
            title="Western website"
            text={
              <>
                A simple website template, inspired by the classic, western
                cowboy movies.
              </>
            }
            button="https://arontorok.github.io/west/"
            buttonText="Visit website"
          />
          <Card
            image="logo.png"
            title="Chowder Characters website"
            text={
              <>
                An aesthetic website, showing off the cartoon characters, with
                the help of the "unmoving plaid" effect.
              </>
            }
            button="https://arontorok.github.io/chow/"
            buttonText="Visit website"
          />
          <Card
            image="logo1.png"
            title="Shadow of the Colossus website"
            text={
              <>
                An artistic website, showing off some characters from a
                legendary Playstation game.
              </>
            }
            button="https://arontorok.github.io/colo/"
            buttonText="Visit website"
          />
          <Card
            image="pacman.png"
            title="PAC-MAN Characters website"
            text={
              <>
                A simple website, presenting the characters of the classic
                arcade game.
              </>
            }
            button="https://arontorok.github.io/pac/"
            buttonText="Visit website"
          />
        </div>
      </div>
    </>
  );
}

export default Demos;
