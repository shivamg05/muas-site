
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface EmailJSConfig {
  publicKey: string | null;
  serviceId: string | null;
  templateId: string | null;
}

export const useSupportForm = (emailjsConfig: EmailJSConfig) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Starting form submission process...");
    console.log("Form data:", formData);

    if (!emailjsConfig.publicKey || !emailjsConfig.serviceId || !emailjsConfig.templateId) {
      toast({
        title: "Error",
        description: "Email service is not properly configured. Please try again later.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      // Step 1: Store the form data in Supabase
      console.log("Attempting to store data in Supabase...");
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }
        ]);

      if (dbError) {
        console.error("Database error:", dbError);
        throw new Error(`Database error: ${dbError.message}`);
      }

      console.log("Data stored successfully in Supabase");

      // Step 2: Send email via EmailJS
      console.log("Attempting to send email via EmailJS...");
      console.log("EmailJS Configuration:", {
        publicKey: emailjsConfig.publicKey ? "Present" : "Missing",
        serviceId: emailjsConfig.serviceId,
        templateId: emailjsConfig.templateId,
      });

      const templateParams = {
        to_name: "MUAS Team",
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };
      
      console.log("Template parameters being sent:", templateParams);

      try {
        const emailResponse = await emailjs.send(
          emailjsConfig.serviceId!,
          emailjsConfig.templateId!,
          templateParams,
          emailjsConfig.publicKey
        );

        console.log("EmailJS Response:", emailResponse);
        
        if (!emailResponse.status || emailResponse.status !== 200) {
          throw new Error(`Email sending failed with status: ${emailResponse.status}`);
        }

        // Success notification
        toast({
          title: "Success!",
          description: "Your message has been sent and stored successfully!",
        });

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      } catch (emailError: any) {
        console.error("EmailJS error details:", emailError);
        throw new Error(`Failed to send email: ${emailError.message}`);
      }
    } catch (error: any) {
      console.error('Error in form submission:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to process your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    setFormData,
    isLoading,
    handleSubmit,
  };
};
