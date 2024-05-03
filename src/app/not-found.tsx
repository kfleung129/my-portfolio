import Link from "next/link";
import "@/styles/globals.css";

export default function Loading() {
  return (
    <div className="notFound">
      <h1>404 Error - The page you are looking does not exist.</h1>
      <Link href="/">Return home</Link>
    </div>
  );
}