import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import DisplayPalette from "@/components/DisplayPalette";
import InputForm from "@/components/InputForm";

export default function Home() {
	const [color, setColor] = useState("#fff");
	const [currentColor, setCurrentColor] = useState("#fff");
	const [schemeData, setSchemeData] = useState([]);

	const handleColor = (event) => {
		const hexColor = JSON.stringify(event.hex);
		const hexUrlColor = hexColor.replace(/#|"/g, "");
		setColor(hexUrlColor);
	};

	const handleCurrentColor = (event) => {
		setCurrentColor((prev) => event.hex);
		return currentColor;
	};

	useEffect(() => {
		const fetchScheme = async (schemeColor) => {
			const response = await fetch(
				`https://www.thecolorapi.com/scheme?hex=${schemeColor}&count=6`
			);
			const scheme = await response.json();
			setSchemeData(scheme);
		};

		try {
			fetchScheme(color);
			console.log("success");
		} catch (err) {
			console.log("Very baaaad", err);
		}
	}, [color]);

	return (
		<>
			<InputForm
				handleCurrentColor={handleCurrentColor}
				currentColor={currentColor}
				handleColor={handleColor}
				color={color}
			/>
			<DisplayPalette color={color} schemeData={schemeData} />
		</>
	);
}
