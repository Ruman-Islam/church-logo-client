import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

export default function Input(props) {
  const {
    id,
    type,
    name,
    error,
    label,
    variant,
    onChange,
    helperText,
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
      <TextField
        error={error}
        sx={outlinedInputStyle}
        id={id}
        name={name}
        type={type}
        value={inputValue}
        onChange={onChange}
        label={label}
        helperText={helperText}
      />
    </FormControl>
  );

  if (startAdornmentChildren) {
    input = (
      <FormControl sx={formControlStyle} variant={variant}>
        <InputLabel sx={inputLabelStyle} htmlFor={id}>
          {label}
        </InputLabel>
        <TextField
          error={error}
          sx={outlinedInputStyle}
          id={id}
          type={type}
          name={name}
          value={inputValue}
          onChange={onChange}
          helperText={helperText}
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
        <TextField
          error={error}
          sx={outlinedInputStyle}
          id={id}
          type={type}
          name={name}
          value={inputValue}
          onChange={onChange}
          helperText={helperText}
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
