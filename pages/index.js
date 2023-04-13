import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import DisplayPalette from "@/components/DisplayPalette";
import InputForm from "@/components/InputForm";

export default function Home() {
	return (
		<>
			<InputForm />
			<DisplayPalette />
		</>
	);
}
