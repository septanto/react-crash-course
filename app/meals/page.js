import Link from "next/link";

export default function MealsPage() {
    return (
      <main>
        <h1 style={{ color: 'white', textAlign: 'center' }}>
          This is meals page!
        </h1>
        <p><Link href="/meals/share">Share!</Link></p>
      </main>
    );
  }
  