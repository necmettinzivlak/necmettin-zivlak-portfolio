"use server"

export async function submitContact(formData: FormData) {
    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")

    // Validate
    if (!name || !email || !message) {
        return { success: false, error: "Missing fields" }
    }

    // In a real application, you would integrate Resend or EmailJS here:
    // await resend.emails.send({ ... })

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    return { success: true }
}
