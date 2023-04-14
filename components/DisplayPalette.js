const DisplayPalette = ({ color, schemeData }) => {
	return (
		<>
			<h2>Hello</h2>
			{schemeData.colors?.map((i) => {
				return (
					<ul>
						<li>Stink {JSON.stringify(i.hex.value)} </li>
					</ul>
				);
			})}
		</>
	);
};

export default DisplayPalette;
