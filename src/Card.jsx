import { Link } from "react-router-dom";

const Card = ({ image, title, text, button, buttonText }) => {
  const isInternal = button !== "" && !button.startsWith("http");

  const cleanRoute = button.startsWith("#") ? button.replace("#", "") : button;

  return (
    <>
      <div className="bg-white rounded-md shadow-2xl">
        <img
          src={image}
          alt={title}
          className="w-full aspect-square object-contain mx-auto shadow-2xl rounded-md"
        />
        <div className="p-4">
          <h1 className="text-2xl font-medium pb-0">{title}</h1>
          <p className="py-1.5">{text}</p>
          {button !== "" && (
            <div className="pt-4 pb-2">
              {isInternal ? (
                <Link
                  to={cleanRoute}
                  className="cursor-pointer bg-black rounded-md text-white py-2.5 px-3.5 shadow-xl hover:bg-zinc-800 inline-block"
                >
                  {buttonText}
                </Link>
              ) : (
                <a
                  className="cursor-pointer bg-black rounded-md text-white py-2.5 px-3.5 shadow-xl hover:bg-zinc-800 inline-block"
                  href={button}
                  target="_blank"
                  rel="noreferrer"
                >
                  {buttonText}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
