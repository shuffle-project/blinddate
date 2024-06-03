export function getRandomId() {
	return Math.random().toString(16).slice(2);
}

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

export function trapFocus(element: HTMLElement, arrowKeys = false) {
	console.log('trapfocus');
	const focusableEls: NodeListOf<Element> = element.querySelectorAll(
		'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
	);
	console.log(focusableEls);

	const firstFocusableEl = focusableEls[0];
	const lastFocusableEl = focusableEls[focusableEls.length - 1];
	console.log(firstFocusableEl);
	console.log(lastFocusableEl);

	(firstFocusableEl as HTMLElement).focus();

	element.addEventListener('keydown', function (e) {
		if (arrowKeys) {
			// ARROW DOWN & RIGHT
			if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
				for (let index = 0; index < focusableEls.length; index++) {
					const element = focusableEls[index];
					if (element === document.activeElement) {
						const newFocus = index + 1 >= focusableEls.length ? 0 : index + 1;
						(focusableEls[newFocus] as HTMLElement).focus();
						break;
					}
				}

				e.preventDefault();
			}

			// ARROW UP & LEFT
			if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
				for (let index = 0; index < focusableEls.length; index++) {
					const element = focusableEls[index];
					if (element === document.activeElement) {
						const newFocus = index - 1 < 0 ? focusableEls.length - 1 : index - 1;
						(focusableEls[newFocus] as HTMLElement).focus();
						break;
					}
				}

				e.preventDefault();
			}
		}
		// TAB
		if (e.key === 'Tab') {
			if (e.shiftKey) {
				/* shift + tab */ if (document.activeElement === firstFocusableEl) {
					(lastFocusableEl as HTMLElement).focus();
					e.preventDefault();
				}
			} /* tab */ else {
				if (document.activeElement === lastFocusableEl) {
					(firstFocusableEl as HTMLElement).focus();
					e.preventDefault();
				}
			}
		}
	});
}
