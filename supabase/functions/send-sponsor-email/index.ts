// Import required dependencies
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from "../_shared/cors.ts"
import { SendGrid } from "https://deno.land/x/sendgrid@0.0.3/mod.ts"

// Initialize SendGrid with API key
console.log("Initializing SendGrid...");
const sendgrid = new SendGrid(Deno.env.get('SENDGRID_API_KEY')!);

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
    `

    console.log("Attempting to send email via SendGrid...");
    
    // Send email using SendGrid
    const emailResponse = await sendgrid.send({
      to: "umdmuas@gmail.com",
      from: "umdmuas@gmail.com", // This email must be verified in SendGrid
      subject: `New Sponsor Inquiry: ${subject}`,
      text: emailContent,
    });

    console.log("SendGrid response:", emailResponse);

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