"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useTranslations } from "next-intl"
import { submitContact } from "@/app/actions/contact"

const fieldClass = "h-11 rounded-sm px-3 text-base md:text-sm"

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState("")
    const t = useTranslations('Contact')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError("")

        const form = e.currentTarget
        const formData = new FormData(form)
        const result = await submitContact(formData)

        if (result.success) {
            setIsSuccess(true)
            form.reset()
        } else if (result.error === "missing") {
            setError(t('missingFields'))
        } else {
            setError(t('genericError'))
        }
        setIsSubmitting(false)
    }

    if (isSuccess) {
        return (
            <div className="border-t border-border pt-8">
                <h2 className="text-3xl font-medium tracking-[-0.04em]">{t('successTitle')}</h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{t('successDesc')}</p>
                <Button
                    className="mt-8 h-11 rounded-sm px-5"
                    onClick={() => setIsSuccess(false)}
                    variant="outline"
                >
                    {t('sendAnother')}
                </Button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 border-t border-border pt-8">
            <div className="space-y-2">
                <Label htmlFor="name" className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {t('nameLabel')}
                </Label>
                <Input id="name" name="name" required autoComplete="name" placeholder={t('namePlaceholder')} className={fieldClass} />
            </div>
            <div className="space-y-2">
                <Label htmlFor="email" className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {t('emailLabel')}
                </Label>
                <Input id="email" name="email" type="email" required autoComplete="email" placeholder={t('emailPlaceholder')} className={fieldClass} />
            </div>
            <div className="space-y-2">
                <Label htmlFor="message" className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {t('messageLabel')}
                </Label>
                <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder={t('messagePlaceholder')}
                    className="min-h-36 rounded-sm px-3 py-3 text-base md:text-sm"
                />
            </div>
            {error ? <p className="text-sm text-destructive">{error}</p> : null}
            <Button type="submit" disabled={isSubmitting} className="h-11 rounded-sm px-6">
                {isSubmitting ? t('sendingButton') : t('sendButton')}
            </Button>
        </form>
    )
}
