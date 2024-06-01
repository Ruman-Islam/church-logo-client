import { Button } from "@mui/material";

export default function MuiIButton(props) {
  // Without handler
  let button = (
    <Button
      sx={{
        ...props?.sx,
        "&.MuiButton-root:hover": { bgcolor: "transparent" },
      }}
      type={props?.type}
      name={props?.name}
      style={props?.style}
      disabled={props?.disabled}
      className={props?.className}
      variant={props?.variant}
    >
      {props?.children}
    </Button>
  );

  // With handler
  if (props?.onClick) {
    button = (
      <Button
        sx={{
          ...props?.sx,
          "&.MuiButton-root:hover": { bgcolor: "transparent" },
        }}
        type={props?.type}
        name={props?.name}
        style={props?.style}
        onClick={props?.onClick}
        disabled={props?.disabled}
        className={props?.className}
        variant={props?.variant}
      >
        {props?.children}
      </Button>
    );
  }

  return button;
}
