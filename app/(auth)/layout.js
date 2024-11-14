import { logout } from "@/actions/auth-actions";
import "@/app/globals.css";

export const metadata = {
  title: "Next Auth",
  description: "Next.js Authentication",
};

export default function AuthRootLayout({ children }) {
  return (
    <>
      <header id="auth-header">
        <p>Wecome back!</p>
      </header>
      <form action={logout}>
        <button>Logout</button>
      </form>
      {children}
    </>
  );
}
