import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const body = await req.json()
    const { intent, data, language } = body

    if (!intent || !data || !data.email) {
      return new Response(
        JSON.stringify({ error: "Invalid request data" }),
        { status: 400 }
      )
    }

    // Intent-based validation
    if (intent === "fulltime") {
      const requiredFields = [
        "companyName",
        "roleTitle",
        "workType",
        "location",
        "interviewDate",
        "phoneNumber",
      ]

      for (const field of requiredFields) {
        if (!data[field]) {
          return new Response(
            JSON.stringify({ error: `Missing field: ${field}` }),
            { status: 400 }
          )
        }
      }
    }

    if (intent === "freelance") {
      const requiredFields = [
        "companyClientName",
        "projectType",
        "scopeProjection",
        "timeline",
        "budgetRange",
        "dateAndTime",
        "timezone",
      ]

      for (const field of requiredFields) {
        if (!data[field]) {
          return new Response(
            JSON.stringify({ error: `Missing field: ${field}` }),
            { status: 400 }
          )
        }
      }
    }

    const subject =
      intent === "fulltime"
        ? "New Full-time Opportunity"
        : "New Freelance Inquiry"

    const emailContent = buildEmailContent(intent, data, language)

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [process.env.CONTACT_RECEIVER_EMAIL],
      subject,
      html: emailContent,
    })

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    )
  } catch (error) {
    console.error("Hire form error:", error)

    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    )
  }
}

function buildEmailContent(intent, data, language) {
  const title =
    intent === "fulltime"
      ? "Full-time Opportunity"
      : "Freelance Project Inquiry"

  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>${title}</h2>
      <p><strong>Language:</strong> ${language || "unknown"}</p>

      ${Object.entries(data)
        .map(
          ([key, value]) =>
            `<p><strong>${key}:</strong> ${value || "-"}</p>`
        )
        .join("")}

      <hr />
      <p style="font-size: 12px; color: #666;">
        Sent from Oren Developer Website
      </p>
    </div>
  `
}
