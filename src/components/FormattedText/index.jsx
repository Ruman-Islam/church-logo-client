const FormattedText = ({ text }) => {
  const urlRegex = /(https?:\/\/\S+|www\.\S+)/g;

  const parts = text.split(urlRegex).map((part, index) =>
    urlRegex.test(part) ? (
      <a
        key={index}
        href={part.startsWith("http") ? part : `https://${part}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-link__color hover:underline"
      >
        {part}
      </a>
    ) : (
      <span key={index}>{part}</span>
    )
  );

  return (
    <p className="text-text__gray max-w-[650px] break-words leading-tight mt-2">
      {parts}
    </p>
  );
};

export default FormattedText;
