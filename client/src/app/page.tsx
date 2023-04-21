import { Hanken_Grotesk } from "next/font/google";

const font = Hanken_Grotesk({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${font.className} flex min-h-screen flex-row items-start justify-start p-4 text-secondary-text `}
    >
      <h1 className={`${font.className} text-6xl`}>Testing</h1>
    </main>
  );
}
