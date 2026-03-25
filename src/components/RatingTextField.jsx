import {TextField} from '@mui/material';

const RatingTextField = ({value, onChange}) => {
	const handleChange = (event) => {
		const raw = event.target.value.replace(/[^0-9.]/g, "");
		let input = event.target.value.replace(/[^0-9]/g, "");
		if (raw.at(0) == '0' && raw.length === 4) input = input.substring(0,2);
		let newValue = parseInt(input, 10);

		if (newValue > 100) {
			newValue = newValue = (newValue * 0.1).toFixed(1);
		}
		if (input > 10) {
			newValue = Math.trunc(newValue);
			newValue = (newValue * 0.1).toFixed(1);
		}
		if (isNaN(newValue)) newValue = "";
		if (input.at(0) === '0' && (input.length === 2)) newValue = "0." + newValue;
		if (newValue == "10") newValue = "1.0";
		onChange(newValue);
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