"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { META } from "@/data/meta";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

type FormState = { name: string; email: string; subject: string; message: string };
type Errors = Partial<FormState>;

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on type
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = (): Errors => {
    const errs: Errors = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Enter a valid email";
    }
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) {
      errs.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters";
    }
    return errs;
  };

  const handleSubmit = async () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    console.log("idsL: ",EMAILJS_SERVICE_ID,EMAILJS_TEMPLATE_ID,EMAILJS_PUBLIC_KEY )
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSent(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Something went wrong. Please email me directly at atulshere18@gmail.com");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: keyof Errors) =>
    `w-full bg-[#111118] border ${
      errors[field] ? "border-red-500/60" : "border-[#1e1e2e]"
    } text-[#e2e8f0] font-mono text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-[#00d4ff] transition-colors placeholder:text-[#2d2d3d]`;

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <p className="font-mono text-xs text-[#00d4ff] tracking-widest uppercase mb-3">
            — get in touch
          </p>
          <h1 className="font-mono text-4xl font-bold text-[#e2e8f0] mb-4">Contact</h1>
          <p className="text-[#64748b] max-w-xl leading-relaxed">
            Open to full-time roles, freelance projects, and interesting conversations.
            Drop a message and I'll get back within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Left — info */}
          <div className="md:col-span-2 space-y-6">
            {[
              { label: "Email", value: META.email, href: `mailto:${META.email}` },
              { label: "LinkedIn", value: "atulshere", href: META.linkedin },
              { label: "GitHub", value: "Atulshere18", href: META.github },
              { label: "Location", value: "Pune, India", href: null },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-mono text-xs text-[#444466] uppercase tracking-widest mb-1">
                  {item.label}
                </p>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer"
                    className="font-mono text-sm text-[#94a3b8] hover:text-[#00d4ff] transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <p className="font-mono text-sm text-[#94a3b8]">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Right — form */}
          <div className="md:col-span-3">
            {sent ? (
              <div className="bg-[#111118] border border-green-400/20 rounded-xl p-8 text-center">
                <div className="text-green-400 font-mono text-2xl mb-3">✓</div>
                <p className="font-mono text-sm text-[#e2e8f0] mb-1">Message sent!</p>
                <p className="text-xs text-[#64748b]">I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <div className="space-y-4">

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(["name", "email"] as const).map((field) => (
                    <div key={field}>
                      <label className="font-mono text-xs text-[#444466] uppercase tracking-widest block mb-2">
                        {field}
                      </label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        value={form[field]}
                        onChange={handleChange}
                        placeholder={field === "email" ? "you@example.com" : "Your name"}
                        className={inputClass(field)}
                      />
                      {errors[field] && (
                        <p className="font-mono text-xs text-red-400 mt-1">{errors[field]}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Subject */}
                <div>
                  <label className="font-mono text-xs text-[#444466] uppercase tracking-widest block mb-2">
                    subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className={inputClass("subject")}
                  />
                  {errors.subject && (
                    <p className="font-mono text-xs text-red-400 mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="font-mono text-xs text-[#444466] uppercase tracking-widest block mb-2">
                    message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project, role, or idea..."
                    className={`${inputClass("message")} resize-none`}
                  />
                  {errors.message && (
                    <p className="font-mono text-xs text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-[#00d4ff] text-[#0a0a0f] font-mono text-sm font-medium py-3 rounded-lg hover:bg-[#00d4ff]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                  {loading ? "Sending..." : "Send message →"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}