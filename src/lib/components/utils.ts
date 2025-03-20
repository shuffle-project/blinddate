export function handleBackdropClick(e: MouseEvent, dialog: HTMLDialogElement) {
	const dialogDimensions = dialog.getBoundingClientRect();
	if (
		e.clientX < dialogDimensions.left ||
		e.clientX > dialogDimensions.right ||
		e.clientY < dialogDimensions.top ||
		e.clientY > dialogDimensions.bottom
	) {
		dialog.close();
	}
}

export function isIOSDevice() {
	return (
		['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(
			navigator.platform
		) ||
		// iPad on iOS 13 detection
		(navigator.userAgent.includes('Mac') && navigator.maxTouchPoints > 0)
	);
	// return navigator.maxTouchPoints > 0 && /iPad|iPhone|iPod/.test(navigator.userAgent);
}
