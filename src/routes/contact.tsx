import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CosmicBackdrop } from "@/components/site/CosmicBackdrop";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sabina Love — Get in Touch" },
      {
        name: "description",
        content: "Write to Sabina Love for reader letters, collaborations, interviews and press enquiries.",
      },
      { property: "og:title", content: "Contact Sabina Love — Get in Touch" },
      {
        property: "og:description",
        content: "Reader letters, collaborations, interviews and press enquiries.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please share your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().max(150).optional(),
  message: z.string().trim().min(1, "Please write a message").max(2000),
});

const fieldClass =
  "rounded-none border-0 border-b border-input bg-transparent px-0 text-base text-cream shadow-none transition-colors duration-500 focus-visible:border-gold focus-visible:ring-0";
const labelClass = "text-[0.68rem] font-normal tracking-[0.36em] text-gold uppercase";

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

function ContactPage() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = schema.safeParse(data);
    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSent(true);
    e.currentTarget.reset();
    toast("Thank you — your message has been received.");
  }

  return (
    <>
      <section className="relative isolate overflow-hidden pt-44 pb-20 md:pt-52 md:pb-28">
        <CosmicBackdrop intensity="subtle" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <span className="eyebrow animate-rise">Contact</span>
          <h1 className="mt-6 animate-rise text-5xl text-cream md:text-7xl [animation-delay:150ms]">
            Write to Sabina
          </h1>
          <div className="mx-auto mt-10 hairline w-28 animate-rise [animation-delay:300ms]" />
          <p className="mx-auto mt-8 max-w-lg animate-rise font-display text-xl text-cream/75 italic [animation-delay:450ms]">
            Every letter is read with care — from readers, kindred spirits and collaborators alike.
          </p>
        </div>
      </section>

      <section className="relative pb-32 md:pb-44">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[2fr_3fr] md:gap-24 md:px-10">
          <Reveal className="space-y-12">
            <div>
              <span className="eyebrow">Correspondence</span>
              <ul className="mt-8 space-y-8">
                <li className="flex items-start gap-5">
                  <Mail className="mt-1 size-5 text-gold" strokeWidth={1.2} />
                  <div>
                    <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase">Email</p>
                    <a href="mailto:hello@sabinalove.com" className="mt-1 block font-display text-xl text-cream transition-colors hover:text-gold-soft">
                      hello@sabinalove.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <Instagram className="mt-1 size-5 text-gold" strokeWidth={1.2} />
                  <div>
                    <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase">Instagram</p>
                    <p className="mt-1 font-display text-xl text-cream">@sabinalove</p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <MapPin className="mt-1 size-5 text-gold" strokeWidth={1.2} />
                  <div>
                    <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase">Writing from</p>
                    <p className="mt-1 font-display text-xl text-cream">Everywhere under the stars</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="hairline w-24 opacity-70" />
            <p className="max-w-xs font-display text-lg leading-relaxed text-cream/65 italic">
              For press, interviews and collaborations, please mention it in your subject line.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="border border-border bg-card/40 p-8 backdrop-blur-sm md:p-12">
              {sent ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="font-display text-6xl text-gold">✦</span>
                  <h2 className="mt-6 text-3xl text-cream">Thank you</h2>
                  <p className="mt-4 max-w-sm text-cream/70">
                    Your words have been received. Sabina will write back as soon as she can.
                  </p>
                  <Button variant="goldOutline" size="xl" className="mt-10" onClick={() => setSent(false)}>
                    Send another
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-10">
                  <div className="grid gap-10 sm:grid-cols-2">
                    <Field label="Your name" name="name" error={errors.name} />
                    <Field label="Email" name="email" type="email" error={errors.email} />
                  </div>
                  <Field label="Subject (optional)" name="subject" error={errors.subject} />
                  <div className="space-y-3">
                    <Label htmlFor="message" className={labelClass}>Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      maxLength={2000}
                      aria-invalid={!!errors.message}
                      className={`${fieldClass} min-h-[140px] resize-none`}
                    />
                    {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                  </div>
                  <Button type="submit" variant="gold" size="xl" className="w-full sm:w-auto">
                    Send message
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string | undefined;
}) {
  return (
    <div className="space-y-3">
      <Label htmlFor={name} className={labelClass}>{label}</Label>
      <Input id={name} name={name} type={type} aria-invalid={!!error} className={`${fieldClass} h-11`} />
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
