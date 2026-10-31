import Link from "next/link";
import { Container } from "@/components/section";

export default function NotFound() {
  return (
    <Container className="py-28">
      <p className="eyebrow">404</p>
      <h1 className="h-page mt-3">Page not found</h1>
      <p className="lead mt-4 max-w-lg">The link may be old or mistyped. Try the home page or get in touch.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-primary">
          Back to home
        </Link>
        <Link href="/contact" className="btn btn-secondary">
          Contact
        </Link>
      </div>
    </Container>
  );
}
