import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { buttonVariants } from '@/components/ui/button-variants';

export default async function NotFoundPage() {
    const t = await getTranslations('NotFound');

    return (
        <div className="mx-auto flex min-h-[60vh] w-full max-w-6xl flex-col justify-center px-6 py-24">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">404</p>
            <h1 className="mt-4 text-5xl font-medium tracking-[-0.05em] md:text-7xl">
                {t('title')}
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                {t('description')}
            </p>
            <Link href="/" className={buttonVariants({ size: "lg", className: "mt-10 h-11 w-fit rounded-sm px-5" })}>
                {t('back')}
            </Link>
        </div>
    );
}
