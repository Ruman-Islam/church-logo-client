import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

export default function Input(props) {
  const {
    id,
    type,
    label,
    variant,
    onChange,
    inputValue,
    inputLabelStyle,
    formControlStyle,
    outlinedInputStyle,
    inputAdornmentStyle,
    endAdornmentChildren,
    startAdornmentChildren,
    inputAdornmentPosition,
  } = props;

  let input = (
    <FormControl sx={formControlStyle} variant={variant}>
      <InputLabel sx={inputLabelStyle} htmlFor={id}>
        {label}
      </InputLabel>
      <OutlinedInput
        sx={outlinedInputStyle}
        id={id}
        type={type}
        value={inputValue}
        onChange={onChange}
        label={label}
      />
    </FormControl>
  );

  if (startAdornmentChildren) {
    input = (
      <FormControl sx={formControlStyle} variant={variant}>
        <InputLabel sx={inputLabelStyle} htmlFor={id}>
          {label}
        </InputLabel>
        <OutlinedInput
          sx={outlinedInputStyle}
          id={id}
          type={type}
          value={inputValue}
          onChange={onChange}
          startAdornment={
            <InputAdornment
              sx={inputAdornmentStyle}
              position={inputAdornmentPosition}
            >
              {startAdornmentChildren}
            </InputAdornment>
          }
          label={label}
        />
      </FormControl>
    );
  }

  if (endAdornmentChildren) {
    input = (
      <FormControl sx={formControlStyle} variant={variant}>
        <InputLabel sx={inputLabelStyle} htmlFor={id}>
          {label}
        </InputLabel>
        <OutlinedInput
          sx={outlinedInputStyle}
          id={id}
          type={type}
          value={inputValue}
          onChange={onChange}
          endAdornment={
            <InputAdornment
              sx={inputAdornmentStyle}
              position={inputAdornmentPosition}
            >
              {endAdornmentChildren}
            </InputAdornment>
          }
          label={label}
        />
      </FormControl>
    );
  }

  return input;
}
