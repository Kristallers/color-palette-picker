import classes from "../styles/DisplayPalette.module.css";

const DisplayPalette = ({ schemeData, wordArray }) => {
	console.log(wordArray);

	return (
		<>
			<h2 className={classes["palette-title"]}>Heres your color scheme!</h2>
			<ul className={classes["li-items__container"]}>
				{schemeData.colors?.map((item, index) => {
					return (
						<>
							<li
								key={JSON.stringify(item.hex.value)}
								className={`color ${classes["li-item"]}`}
							>
								{wordArray[index]} {JSON.stringify(item.hex.value)}
							</li>
							<style jsx>{`
								.color {
									background-color: ${item.hex.value};
								}
							`}</style>
						</>
					);
				})}
			</ul>
		</>
	);
};

export default DisplayPalette;
