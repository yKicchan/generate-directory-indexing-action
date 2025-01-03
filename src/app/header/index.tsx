export interface P {
	location: string;
}

export function Header({ location }: P) {
	return (
		<header>
			<h1>
				Index of <span>{location}</span>
			</h1>
		</header>
	);
}
