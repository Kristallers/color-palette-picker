import { ChromePicker } from "react-color";
import classes from "../styles/InputForm.module.css";

const InputForm = ({
	handleFinalColor,
	handleCurrentColor,
	currentColor,
	showPalette,
}) => {
	return (
		<>
			<div className={classes["picker-container"]}>
				<ChromePicker
					disableAlpha={true}
					color={currentColor}
					onChange={handleCurrentColor}
					onChangeComplete={handleFinalColor}
				/>
				<button onClick={showPalette}>Generate scheme</button>
			</div>
		</>
	);
};

export default InputForm;
