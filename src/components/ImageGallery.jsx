/**
 * Implement the ImageGallery component that accepts a `links`
 * prop and renders the gallery so that the first
 * item in the links prop is the src attribute of the first image in the gallery.

 * It should also implement the following logic:
 * - When the button is clicked, the image that is in the same div as the button should be removed from the gallery.
 */
import {createRef, forwardRef} from "react";

function Image({ src, onRemove, forwardedRef }) {
	return (
		<div className="image" ref={forwardedRef}>
			<img src={src} />
			<button className="remove" onClick={() => onRemove(forwardedRef)}>X</button>
		</div>
	);
}

const ImageRef = forwardRef((props, ref) => <Image {...props} forwardedRef={ref} />);

export function ImageGallery({ links }) {
	const parentRef = createRef();

	const removeImage = ref => parentRef.current.removeChild(ref.current);

	return (
		<div ref={parentRef}>
			{links && links.map(link => <ImageRef key={link} src={link} onRemove={removeImage} ref={createRef()} />)}
		</div>
	);
}
