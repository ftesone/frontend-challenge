/**
 * Given a list of items implement a navigation through the keyboard, following these requirements:
 * - Navigate through the list with UP and RIGHT keys will focus the next item.
 * - Navigate through the list with DOWN and LEFT keys will focus the previous item.
 * - Only one item will be FOCUSED per time in the browser.
 *
 * Suggestion: you may to think in term of "indexes".
 * You may calculate the index and use it to select the item, then you will focus that item.
 *
 * NOTE: The keydown event will work once the <ul> receives the focus.
 */

import { useEffect, useRef, useState } from "react";

import "./ListItemsForNavigation.css";

export function ListItemsForNavigation({items}) {
	const [
		selectedIndex,
		setSelectedIndex,
	] = useState(0);
	const activeItemRef = useRef();

	useEffect(
		function () {
			activeItemRef.current.focus();
		},
		[
			selectedIndex
		]
	);

	function handleKeyDown(event) {
		event.preventDefault(); // to prevent page scroll

		if (selectedIndex > 0 && (37 === event.keyCode || 40 === event.keyCode)) {
			setSelectedIndex(prevIndex => prevIndex - 1);
		} else if (selectedIndex < items.length - 1 && (38 === event.keyCode || 39 === event.keyCode)) {
			setSelectedIndex(prevIndex => prevIndex + 1);
		}
	}

	return (
		<ul onKeyDown={handleKeyDown}>
			{items && items.map((item, index) => <li key={item} ref={index === selectedIndex ? activeItemRef : null} tabIndex={0}>{item}</li>)}
		</ul>
	);
}
