export default function PackageIcon(props) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enableBackground="new 0 0 100 100"
      xmlSpace="preserve"
      width="40"
      fill={props.fill}
    >
      <g>
        <path
          fill={props.fill}
          d="M83.4,83.7H70.3V47.3H29.2v36.4H16.1V0.2h13.1v35.2h41.1V0.2h13.1V83.7z"
        />
        <rect x="42.7" y="16.3" fill={props.fill} width="13.1" height="83.4" />
      </g>
    </svg>
  );
}
