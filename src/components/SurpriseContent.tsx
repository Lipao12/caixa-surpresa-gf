import React from "react";

interface SurpriseContentProps {
  content: { type: string; content: string; message?: string } | null;
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
        <div>
          <img
            src={content.content}
            alt="Surprise"
            className="w-full h-auto mb-4"
          />
          <p className="text-lg">{content.message}</p>
        </div>
      )}
      {isMusic && (
        <a
          href={content.content}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 m-5"
        >
          Ouça a música!
        </a>
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
