import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Mail, User, Phone } from "lucide-react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof formSchema>;

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
}

const ContactSection = ({
  title = "Let's Connect",
  subtitle = "I'd love to hear from you! Please fill out the form below and I'll get back to you as soon as possible.",
  backgroundColor = "bg-[#FFF5F7]",
}: ContactSectionProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", data);

    toast({
      title: "Message Sent!",
      description:
        "Thank you for reaching out. I'll respond to your message soon.",
    });

    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className={`py-16 ${backgroundColor}`}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-[#D8A7B1] font-serif">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10 max-w-3xl mx-auto border border-[#F8E2E8]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#D8A7B1] font-medium">
                      Name
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Your name"
                          className="pl-10 border-[#F8E2E8] focus-visible:ring-[#D8A7B1] rounded-md"
                          {...field}
                        />
                        <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                      </div>
                    </FormControl>
                    <FormMessage className="text-[#E6A4B4]" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#D8A7B1] font-medium">
                      Email
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="your.email@example.com"
                          type="email"
                          className="pl-10 border-[#F8E2E8] focus-visible:ring-[#D8A7B1] rounded-md"
                          {...field}
                        />
                        <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                      </div>
                    </FormControl>
                    <FormMessage className="text-[#E6A4B4]" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#D8A7B1] font-medium">
                      Phone (Optional)
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Your phone number"
                          className="pl-10 border-[#F8E2E8] focus-visible:ring-[#D8A7B1] rounded-md"
                          {...field}
                        />
                        <Phone className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                      </div>
                    </FormControl>
                    <FormMessage className="text-[#E6A4B4]" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#D8A7B1] font-medium">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell me about your project or inquiry..."
                        className="min-h-[120px] border-[#F8E2E8] focus-visible:ring-[#D8A7B1] rounded-md"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[#E6A4B4]" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#D8A7B1] hover:bg-[#C797A1] text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </Form>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Prefer to reach out directly? Email me at{" "}
            <a
              href="mailto:kyrahpangilinan118@gmail.com"
              className="text-[#D8A7B1] hover:underline"
            >
              kyrahpangilinan118@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
