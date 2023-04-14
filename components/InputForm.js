import { ChromePicker } from "react-color";

const InputForm = ({ handleColor, handleCurrentColor, currentColor }) => {
	return (
		<>
			<ChromePicker
				disableAlpha={true}
				color={currentColor}
				onChange={handleCurrentColor}
				onChangeComplete={handleColor}
			/>
		</>
	);
};

export default InputForm;
