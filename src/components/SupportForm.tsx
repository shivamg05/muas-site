import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { createClient } from '@supabase/supabase-js';
import emailjs from '@emailjs/browser';

// Supabase configuration
const supabaseUrl = 'https://vlegslbctapckfbvbraf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsZWdzbGJjdGFwY2tmYnZicmFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5MDEzNDQsImV4cCI6MjA1MjQ3NzM0NH0.tjSWy8cU_3dnf3JuQKhq93nJL6j8Lluk-W8sn3Rs6OM';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '');

const SupportForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  // Form data state management
  const [formData, setFormData] = useState({
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
            submitted_at: new Date().toISOString(),
          }
        ]);

      if (dbError) {
        console.error("Database error:", dbError);
        throw dbError;
      }

      console.log("Data stored successfully in Supabase");

      // Step 2: Send email via EmailJS
      console.log("Attempting to send email via EmailJS...");
      console.log("EmailJS Configuration:", {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ? "Present" : "Missing",
      });

      const emailResponse = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      console.log("EmailJS response:", emailResponse);

      if (emailResponse.status !== 200) {
        throw new Error('Failed to send email');
      }

      console.log("Email sent successfully");
      
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
    } catch (error) {
      console.error('Error in form submission:', error);
      toast({
        title: "Error",
        description: "Failed to process your message. Please try again later.",
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