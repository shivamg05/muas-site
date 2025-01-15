import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from "../_shared/cors.ts"
import { SendGrid } from "https://deno.land/x/sendgrid@0.0.3/mod.ts"

const sendgrid = new SendGrid(Deno.env.get('SENDGRID_API_KEY')!);

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { firstName, lastName, email, subject, message } = await req.json()

    const emailContent = `
      New Sponsor Inquiry:
      
      From: ${firstName} ${lastName}
      Email: ${email}
      Subject: ${subject}
      
      Message:
      ${message}
    `

    await sendgrid.send({
      to: "your-team@muas.com", // Replace with your team's email
      from: "noreply@muas.com", // Replace with your verified sender
      subject: `New Sponsor Inquiry: ${subject}`,
      text: emailContent,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      },
    )
  }
})