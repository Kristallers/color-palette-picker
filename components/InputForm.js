import { ChromePicker } from "react-color";
import { useState } from "react";

const InputForm = () => {
	const [color, setColor] = useState("#fff");

	const handleColor = (event) => {
		setColor((prev) => event.hex);
	};
	return (
		<>
			<ChromePicker disableAlpha={true} color={color} onChange={handleColor} />
		</>
	);
};

export default InputForm;
