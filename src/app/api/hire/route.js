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
    const requiredFieldsByIntent = {
      fulltime: [
        "companyName",
        "roleTitle",
        "workType",
        "location",
        "interviewDate",
        "phoneNumber",
      ],
      freelance: [
        "companyClientName",
        "projectType",
        "scopeProjection",
        "timeline",
        "budgetRange",
        "dateAndTime",
        "timezone",
      ],
    }

    const requiredFields = requiredFieldsByIntent[intent] || []

    for (const field of requiredFields) {
      if (!data[field]) {
        return new Response(
          JSON.stringify({ error: `Missing field: ${field}` }),
          { status: 400 }
        )
      }
    }

    const subject =
      intent === "fulltime"
        ? `[Hire Request] Full-time – ${data.roleTitle} @ ${data.companyName}`
        : `[Hire Request] Freelance – ${data.projectType}`

    const emailContent = buildEmailContent(intent, data, language)

    const senderName =
      intent === "fulltime"
        ? data.companyName
        : data.companyClientName || "New Client"

    await resend.emails.send({
      from: `${senderName} <onboarding@resend.dev>`,
      to: [process.env.CONTACT_RECEIVER_EMAIL],
      reply_to: data.email,
      subject,
      html: emailContent,
    })


    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error) {
    console.error("Hire form error:", error)

    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    )
  }
}

function buildEmailContent(intent, data, language) {
  const isFullTime = intent === "fulltime"

  return `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 640px;">
    
    <h2 style="margin-bottom: 4px;">
      ${isFullTime ? "Full-time Opportunity" : "Freelance Project Inquiry"}
    </h2>

    <p style="color: #555; margin-top: 0;">
      Submitted via Oren Dev website
    </p>

    <hr />

    <h3>Contact Information</h3>
    <p><strong>Email:</strong> ${data.email}</p>
    ${data.phoneNumber ? `<p><strong>Phone:</strong> ${data.phoneNumber}</p>` : ""}
    <p><strong>Language:</strong> ${language || "Not specified"}</p>

    <hr />

    ${
      isFullTime
        ? `
        <h3>Position Details</h3>
        <p><strong>Company:</strong> ${data.companyName}</p>
        <p><strong>Role:</strong> ${data.roleTitle}</p>
        <p><strong>Work Type:</strong> ${data.workType}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Interview Date:</strong> ${data.interviewDate}</p>
        `
        : `
        <h3>Project Details</h3>
        <p><strong>Client / Company:</strong> ${data.companyClientName}</p>
        <p><strong>Project Type:</strong> ${data.projectType}</p>
        <p><strong>Scope:</strong><br />${data.scopeProjection}</p>
        <p><strong>Timeline:</strong> ${data.timeline}</p>
        <p><strong>Budget:</strong> ${data.budgetRange}</p>
        <p><strong>Preferred Date & Time:</strong> ${data.dateAndTime}</p>
        <p><strong>Timezone:</strong> ${data.timezone}</p>
        `
    }

    <hr />

    <p style="font-size: 12px; color: #777;">
      This message was sent from the Oren Dev Website
    </p>
  </div>
  `
}
