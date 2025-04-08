"use client";

import type React from "react";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export interface EmailFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Contact Me
          </h1>
          <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Have a question, want to collaborate, or just need advice? Reach
            out!
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-1">
            <div>
              <h2 className="text-2xl font-bold">Get in Touch</h2>
              <p className="mt-2 text-muted-foreground">
                Here's my contact info:
              </p>
              <div className="flex flex-col items-center justify-center space-y-4 text-center mt-4">
                <div className="flex items-center gap-3">
                  <span>
                    Actually... let me build a contact form. For now, just find
                    me on Linkedin or something :{"("}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
