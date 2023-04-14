import classes from "../styles/DisplayPalette.module.css";

const DisplayPalette = ({ color, schemeData }) => {
	return (
		<>
			<h2 className={classes["palette-title"]}>Heres your color scheme!</h2>
			<ul className={classes["li-items__container"]}>
				{schemeData.colors?.map((i) => {
					return (
						<>
							<li className={`color ${classes["li-item"]}`}>
								Stink {JSON.stringify(i.hex.value)}{" "}
							</li>
							<style jsx>{`
								.color {
									background-color: ${i.hex.value};
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
