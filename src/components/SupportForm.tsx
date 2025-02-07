
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import emailjs from '@emailjs/browser';

const SupportForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [emailjsConfig, setEmailjsConfig] = useState<{
    publicKey: string | null;
    serviceId: string | null;
    templateId: string | null;
  }>({
    publicKey: null,
    serviceId: null,
    templateId: null,
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
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

      // Log the exact template parameters being sent
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

  return (
    <section id="support" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 text-center">Support Us!</h2>
          <h3 className="text-2xl font-semibold mb-4">Why Sponsor?</h3>
          <p className="text-lg text-gray-700 mb-8">
            MUAS relies on the generous support of its sponsors. This provides resources for our members to explore cutting-edge technologies, take calculated risks, and develop as an organization as a whole. Without such support, MUAS would not exist. Thank you to all of our sponsors!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name *
                </label>
                <Input
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name *
                </label>
                <Input
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject *
              </label>
              <Input
                id="subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <Textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-[150px]"
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Sending..." : "Submit"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportForm;
