"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const SYSTEM_THEME = "system" as const;

export function Logo() {
	const { theme, systemTheme } = useTheme();
	const currentTheme = theme === SYSTEM_THEME ? systemTheme : theme;

	return (
		<Link href="/">
			<Image
				src="/logo.png"
				alt="logo"
				width={150}
				height={150}
				className={`mb-4 m-auto invert${currentTheme !== "dark" ? "-0" : ""}`}
			/>
		</Link>
	);
}
