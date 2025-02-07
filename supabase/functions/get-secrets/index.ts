
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from "../_shared/cors.ts"

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { secrets } = await req.json()
    const secretValues: Record<string, string> = {}

    // Fetch each requested secret
    for (const secretName of secrets) {
      const value = Deno.env.get(secretName)
      if (value) {
        secretValues[secretName] = value
      }
    }

    return new Response(
      JSON.stringify(secretValues),
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
