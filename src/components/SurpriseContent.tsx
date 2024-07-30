import React from "react";

interface SurpriseContentProps {
  content: string | null;
}

const SurpriseContent: React.FC<SurpriseContentProps> = ({ content }) => {
  if (!content) return null;

  const isImage =
    content.startsWith("http") &&
    (content.endsWith(".jpg") || content.endsWith(".png"));
  const isVideo = content.startsWith("http") && content.includes("youtube.com");
  const isMusic = content.startsWith("http") && content.includes("spotify.com");

  return (
    <div className="p-4 bg-white rounded shadow-md">
      {isImage && (
        <img src={content} alt="Surprise" className="w-full h-auto" />
      )}
      {isVideo && (
        <iframe
          width="560"
          height="315"
          src={content}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      {isMusic && (
        <a
          href={content}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Ouça a música!
        </a>
      )}
      {!isImage && !isVideo && !isMusic && <p className="text-lg">{content}</p>}
    </div>
  );
};

export default SurpriseContent;
