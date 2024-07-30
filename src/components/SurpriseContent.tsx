import React from "react";

interface SurpriseContentProps {
  content:
    | {
        type: string;
        content: string;
        message?: string;
        desktopMessage?: string;
      }
    | null
    | undefined;
}

const SurpriseContent: React.FC<SurpriseContentProps> = ({ content }) => {
  if (!content) return null;

  console.log(content);

  const isImage = content.type === "image";
  const isMusic = content.type === "music";
  const isVideo = content.type === "video";

  return (
    <div className="p-4 bg-white rounded shadow-md m-2">
      {isImage && (
        <div className="md:flex md:flex-row ">
          <img
            src={content.content}
            alt="Surprise"
            className="w-full md:w-1/2 h-auto  mb-4"
          />
          <p
            className={`text-lg text-center block md:ml-10 ${
              content.desktopMessage && "md:hidden"
            }`}
          >
            {content.message}
          </p>
          {content.desktopMessage && (
            <p className="text-lg text-center text-justify ml-11 hidden md:block">
              {content.desktopMessage}
            </p>
          )}
        </div>
      )}
      {isMusic && (
        <div className="flex flex-col">
          {/* Embed the Spotify player */}
          <div className="w-full mb-4">
            <iframe
              src={`https://open.spotify.com/embed/track/${new URL(
                content.content
              ).pathname
                .split("/")
                .pop()}`}
              width="100%"
              height="80"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              allowFullScreen
              title="Spotify Track"
            ></iframe>
          </div>
          {content.message &&
            content.message.split("\n").map((line, index) => (
              <p key={index} className="text-lg mt-2 text-justify">
                {line}
              </p>
            ))}
        </div>
      )}
      {isVideo && (
        <div>
          <video controls className="w-full h-[350px] mb-4">
            <source src={content.content} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-lg">{content.message}</p>
        </div>
      )}
      {!isImage && !isMusic && !isVideo && (
        <div className="text-lg">
          {content.content.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SurpriseContent;
