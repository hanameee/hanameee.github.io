"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export function Logo() {
	const { theme } = useTheme();

	return (
		<Link href="/">
			<Image
				src="/logo.png"
				alt="logo"
				width={150}
				className={`m-auto invert${theme !== "dark" ? "-0" : ""}`}
			/>
		</Link>
	);
}
