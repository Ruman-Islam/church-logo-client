export default function CustomButton(props) {
  // Without handler
  let button = (
    <button
      type={props.type}
      name={props.name}
      style={props.style}
      disabled={props.disabled}
      className={props.className}
    >
      {props.children}
    </button>
  );

  // With handler
  if (props.onClick) {
    button = (
      <button
        type={props.type}
        name={props.name}
        style={props.style}
        onClick={props.onClick}
        disabled={props.disabled}
        className={props.className}
      >
        {props.children}
      </button>
    );
  }

  return button;
}
