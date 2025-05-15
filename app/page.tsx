"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Github, ArrowRight, Menu } from "lucide-react";

export default function HomePage() {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen px-6 pb-12 bg-gradient-to-br from-[#f0f9ff] to-[#dbeafe] dark:from-[#0f172a] dark:to-[#1e293b] text-gray-900 dark:text-sky-100 transition-colors duration-300">
      <motion.header initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="py-6 border-b border-black/10 dark:border-white/10">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-extrabold tracking-tight">CodeWithArhan</h1>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition">Home</a>
            <a href="#" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition">Projects</a>
            <a href="#" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition">Contact</a>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <Button variant="secondary" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </Button>
            <a
              href="https://github.com/ArhanAnsari/nextjs-tailwind-ui-mastery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white transition-colors"
            >
              <Github className="h-4 w-4" /> Star on GitHub
            </a>
          </div>
        </div>
        {menuOpen && (
          <nav className="md:hidden flex flex-col gap-3 mt-4">
            <a href="#" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition">Home</a>
            <a href="#" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition">Projects</a>
            <a href="#" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition">Contact</a>
            <Button variant="secondary" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme === "dark" ? "Light Mode" : "Dark Mode"}</Button>
          </nav>
        )}
      </motion.header>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="mt-28 text-center max-w-2xl mx-auto">
        <h2 className="text-5xl font-bold mb-6 leading-tight">
          Master Modern UI with <span className="text-indigo-500 dark:text-indigo-400">Next.js 15</span> & <span className="text-sky-500 dark:text-sky-400">Tailwind CSS</span>
        </h2>
        <p className="text-base text-gray-700 dark:text-sky-100/80 mb-8">
          Build sleek, responsive websites with the power of modern frontend tools. Powered by Next.js, styled with Tailwind, animated with Framer Motion.
        </p>
        <a
          href="https://youtu.be/XXXXXXXXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-sky-500 to-indigo-500 text-white hover:opacity-90 transition text-lg font-medium"
        >
          Watch the Full Tutorial <ArrowRight className="h-4 w-4" />
        </a>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }} className="mt-24 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-4">Why This Stack?</h3>
        <p className="text-base text-gray-700 dark:text-sky-100/80">
          Next.js 15 gives you flexibility and performance, Tailwind CSS handles styling with ease, and Framer Motion brings your UI to life. Whether you&apos;re building a landing page, portfolio, or SaaS dashboard — this combo sets you up for success.
        </p>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }} className="mt-24 max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-4">What You&apos;ll Learn</h3>
        <ul className="space-y-3 text-left list-disc list-inside text-gray-800 dark:text-sky-100/90">
          <li>✅ How to structure a Next.js 15 app with the new app directory</li>
          <li>✅ Configure and theme Tailwind CSS effectively</li>
          <li>✅ Create animated components using Framer Motion</li>
          <li>✅ Add dark mode support using next-themes</li>
          <li>✅ Build beautiful UIs fast using utility-first styling</li>
          <li>✅ Responsive navigation with hamburger menu</li>
          <li>✅ Style switches for dark/light mode toggle</li>
        </ul>
      </motion.section>

      <motion.footer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="mt-24 text-center text-sm text-gray-500 dark:text-sky-100/60">
        <p>Built with ❤️ by CodeWithArhan • Powered by Next.js 15, Tailwind CSS & Framer Motion</p>
      </motion.footer>
    </main>
  );
}
