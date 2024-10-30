const FormattedText = ({ text }) => {
  // Match URLs and exclude punctuation like commas, periods, etc.
  const urlRegex = /(https?:\/\/[^\s,]+|www\.[^\s,]+)/g;

  // Find all URLs and separate text parts
  const parts = text.split(urlRegex).map((part, index) =>
    urlRegex.test(part.trim()) ? (
      <a
        key={index}
        href={part.startsWith("http") ? part : `https://${part}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-link__color hover:underline"
      >
        {part.trim()}
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
