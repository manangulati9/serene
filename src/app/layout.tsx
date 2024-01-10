import type { Metadata } from "next";
import { Inter, Judson } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});
const judson = Judson({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-judson",
	weight: ["400", "700"],
});

export const metadata: Metadata = {
	title: "Serene",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${inter.variable} ${judson.variable}`}>
			<body className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}