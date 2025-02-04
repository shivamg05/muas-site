import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from "../_shared/cors.ts"
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    console.log("Processing new sponsor email request...");
    
    // Parse the request body
    const { firstName, lastName, email, subject, message } = await req.json()
    console.log("Received form data:", { firstName, lastName, email, subject });

    // Prepare email content
    const emailContent = `
      New Sponsor Inquiry:
      
      From: ${firstName} ${lastName}
      Email: ${email}
      Subject: ${subject}
      
      Message:
      ${message}
    `;

    console.log("Attempting to send email via Resend...");
    
    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: "MUAS <onboarding@resend.dev>", // Update this with your verified domain
      to: "umdmuas@gmail.com",
      subject: `New Sponsor Inquiry: ${subject}`,
      html: `
        <h2>New Sponsor Inquiry</h2>
        <p><strong>From:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message}</p>
      `,
      text: emailContent,
    });

    console.log("Resend response:", emailResponse);

    // Return success response
    return new Response(
      JSON.stringify({ 
        message: "Email sent successfully",
        response: emailResponse 
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      },
    )
  } catch (error) {
    // Log and return error response
    console.error("Error in send-sponsor-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: "Failed to send sponsor email" 
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      },
    )
  }
})