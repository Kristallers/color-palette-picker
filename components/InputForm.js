import { ChromePicker } from "react-color";
import classes from "../styles/InputForm.module.css";

const InputForm = ({ handleColor, handleCurrentColor, currentColor }) => {
	return (
		<>
			<div className={classes["picker-container"]}>
				<ChromePicker
					disableAlpha={true}
					color={currentColor}
					onChange={handleCurrentColor}
					onChangeComplete={handleColor}
				/>
			</div>
		</>
	);
};

export default InputForm;
