"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send } from "lucide-react"
import { useTranslations } from "next-intl"
import { submitContact } from "@/app/actions/contact"

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState("")
    const t = useTranslations('Contact')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError("")

        const formData = new FormData(e.currentTarget)
        const result = await submitContact(formData)

        if (result.success) {
            setIsSuccess(true)
        } else {
            setError(result.error || "Something went wrong")
        }
        setIsSubmitting(false)
    }

    if (isSuccess) {
        return (
            <div className="rounded-lg border bg-card p-8 text-center shadow-sm">
                <h3 className="mb-2 text-2xl font-semibold tracking-tight">{t('successTitle')}</h3>
                <p className="text-muted-foreground">{t('successDesc')}</p>
                <Button
                    className="mt-6"
                    onClick={() => setIsSuccess(false)}
                    variant="outline"
                >
                    {t('sendAnother')}
                </Button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 rounded-lg border bg-card p-6 shadow-sm md:p-8">
            <div className="space-y-2">
                <Label htmlFor="name">{t('nameLabel')}</Label>
                <Input id="name" name="name" required placeholder={t('namePlaceholder')} />
            </div>
            <div className="space-y-2">
                <Label htmlFor="email">{t('emailLabel')}</Label>
                <Input id="email" name="email" type="email" required placeholder={t('emailPlaceholder')} />
            </div>
            <div className="space-y-2">
                <Label htmlFor="message">{t('messageLabel')}</Label>
                <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder={t('messagePlaceholder')}
                    className="min-h-[120px]"
                />
            </div>
            {error && <p className="text-sm font-medium text-destructive">{error}</p>}
            <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? t('sendingButton') : (
                    <>
                        {t('sendButton')} <Send className="ml-2 h-4 w-4" />
                    </>
                )}
            </Button>
        </form>
    )
}
