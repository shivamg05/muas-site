
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import emailjs from '@emailjs/browser';

interface EmailJSConfig {
  publicKey: string | null;
  serviceId: string | null;
  templateId: string | null;
}

export const useEmailJSConfig = () => {
  const [emailjsConfig, setEmailjsConfig] = useState<EmailJSConfig>({
    publicKey: null,
    serviceId: null,
    templateId: null,
  });

  useEffect(() => {
    const fetchSecrets = async () => {
      try {
        const { data: secrets, error } = await supabase.functions.invoke('get-secrets', {
          body: {
            secrets: ['EMAILJS_PUBLIC_KEY', 'EMAILJS_SERVICE_ID', 'EMAILJS_TEMPLATE_ID']
          }
        });

        if (error) {
          console.error('Error fetching secrets:', error);
          return;
        }

        if (secrets) {
          setEmailjsConfig({
            publicKey: secrets.EMAILJS_PUBLIC_KEY,
            serviceId: secrets.EMAILJS_SERVICE_ID,
            templateId: secrets.EMAILJS_TEMPLATE_ID,
          });
          emailjs.init(secrets.EMAILJS_PUBLIC_KEY);
        }
      } catch (error) {
        console.error('Error in fetchSecrets:', error);
      }
    };

    fetchSecrets();
  }, []);

  return emailjsConfig;
};
