import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { buttonVariants } from '@/components/ui/button-variants';

export default function NotFoundPage() {
    // Attempting to catch any translations here if possible, or fallback manually
    // Custom 404s in App Router are slightly complex, especially inside a generic segment
    return (
        <div className="flex h-[calc(100vh-14rem)] flex-col items-center justify-center text-center px-4">
            <h1 className="text-7xl font-extrabold tracking-tight">404</h1>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground/80">
                Page Not Found
            </h2>
            <p className="mt-4 mb-8 text-muted-foreground text-lg max-w-prose">
                The page you are looking for does not exist or has been moved.
            </p>
            <Link href="/" className={buttonVariants({ variant: "default", size: "lg" })}>
                Return Home
            </Link>
        </div>
    );
}
