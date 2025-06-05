// components/shared/Footer.tsx

export default function Footer() {
    return (
      <footer className="text-center text-sm text-gray-500 border-t p-4">
        © {new Date().getFullYear()} Ketsebaot Ertumo. All rights reserved.
        {/* © 2025 Sarah & Daniel — Made with ❤️ & memories. */}
      </footer>
    );
  }