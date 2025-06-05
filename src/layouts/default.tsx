import { Link } from "@heroui/link";
import { Analytics } from "@vercel/analytics/react"
import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
        <Analytics />
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://github.com/GhostFreakOS"
          title="GhostFreakOS"
        >
          <span className="text-default-600">Copy Rights GhostFreak os</span>
        </Link>
      </footer>
    </div>
  );
}
