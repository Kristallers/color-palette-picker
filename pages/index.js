import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import DisplayPalette from "@/components/DisplayPalette";
import InputForm from "@/components/InputForm";

export default function Home() {
	const [finalColor, setFinalColor] = useState("#fff");
	const [currentColor, setCurrentColor] = useState("#fff");
	const [schemeState, setSchemeState] = useState("inactive");
	const [schemeData, setSchemeData] = useState([]);

	const [wordArray, setWordArray] = useState();

	const handleFinalColor = (event) => {
		const hexColor = event.hex;
		const hexUrlColor = hexColor.replace("#", "");
		setFinalColor((prev) => hexUrlColor);
		return hexUrlColor;
	};

	const handleCurrentColor = (event) => {
		setCurrentColor((prev) => event.hex);
		return currentColor;
	};

	const showPalette = () => {
		setSchemeState(() => finalColor);
		console.log(schemeState);
	};

	useEffect(() => {
		const fetchScheme = async (schemeColor) => {
			const response = await fetch(
				`https://www.thecolorapi.com/scheme?hex=${schemeColor}&count=6`
			);
			const scheme = await response.json();
			setSchemeData(scheme);
		};

		const fetchWordArray = async () => {
			const arr = [];
			for (let i = 0; i < 6; i++) {
				const res = await fetch("https://random-word-api.herokuapp.com/word");
				const word = await res.json();
				arr.push(word[0]);
			}
			setWordArray((...prev) => arr);
		};

		try {
			fetchScheme(finalColor);
			fetchWordArray();
			console.log(schemeData);
			console.log("success");
		} catch (err) {
			console.log("Very baaaad", err);
		}
	}, [schemeState]);

	return (
		<>
			<Head>
				<link
					rel="shortcut icon"
					href="https://mystickermania.com/cdn/stickers/anime/spy-family-anya-smirk-512x512.png"
				/>
			</Head>
			<InputForm
				handleCurrentColor={handleCurrentColor}
				currentColor={currentColor}
				handleFinalColor={handleFinalColor}
				finalColor={finalColor}
				showPalette={showPalette}
			/>
			<DisplayPalette schemeData={schemeData} wordArray={wordArray} />
		</>
	);
}
