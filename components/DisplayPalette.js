const DisplayPalette = ({ color, schemeData }) => {
	return (
		<>
			<h2>Hello</h2>
			<ul>
				{schemeData.colors?.map((i) => {
					return (
						<>
							<li className="color">Stink {JSON.stringify(i.hex.value)} </li>
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
