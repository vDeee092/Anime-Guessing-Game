import {TextField} from '@mui/material';

const RatingTextField = ({value, onChange}) => {
	const handleChange = (event) => {
		let raw = event.target.value.replace(/[^0-9.]/g, "");
		if (raw == "1.00" || /^(10)[0-9]/.test(raw)) {
			onChange("10");
			return;
		}
		if (raw.at(1) == '.' && raw.length >= 4) {
			raw = raw.substring(0, 3);
			onChange(raw);
			return;
		}
		let digits = raw.replace(/\./g, "");
		let value = (/\./.test(raw)) ? parseFloat(raw, 10) : parseInt(digits, 10);
		if (digits == "") {
			onChange("");
			return;
		}
		if (raw == "0.00") {
			onChange("0.0");
			return;
		}
		if (value >= 10) value = (value * 0.1).toFixed(1);
		if (digits.at(0) === '0' && (digits.length === 2) && value % 1 == 0) value = "0." + value;
		onChange(value);
	};

	return (
	<TextField
		placeholder="Guess rating score"
      	value={value}
      	onChange={handleChange}
        helperText="Enter value from 0.0 to 10.0"
    />
	);
}

export default RatingTextField;