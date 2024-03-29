import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";
import { Logo } from "@/components/logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "hanameee.github.io",
	description: "이해나 블로그",
	metadataBase: new URL("https://hanameee.github.io"),
	openGraph: {
		title: "hanameee.github.io",
		description: "이해나 블로그",
		url: "https://hanameee.github.io",
		locale: "ko_KR",
		type: "website",
	},
	twitter: {
		card: "summary",
	},
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="ko">
			<body
				className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
			>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<div className="max-w-2xl mx-auto py-10 px-4">
						<Logo />
						<header>
							<div className="flex items-center justify-between">
								<ModeToggle />
								<nav className="ml-auto text-sm font-medium space-x-6">
									<Link href="/">Home</Link>
									<Link href="/about">About</Link>
								</nav>
							</div>
						</header>
						<main>{children}</main>
					</div>
					<Analytics />
				</ThemeProvider>
			</body>
		</html>
	);
}
