export function ss(obj: { [s: string]: string | number }): string {
	return Object.entries(obj)
		.map(([k, v]) => `${k}: ${v}`)
		.join(';');
}
