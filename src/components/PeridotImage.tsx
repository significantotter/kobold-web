import Image from "next/image";
export default function PeridotImage() {
	return (
		<Image
			src="/peridot.png"
			alt="kobold portrait"
			width="200"
			height="200"
			style={{ marginBottom: "8px" }}
		></Image>
	);
}
