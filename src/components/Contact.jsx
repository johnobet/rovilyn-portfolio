import { Facebook, Mail, MessageCircle, MessageSquare, Send, Share2, User } from "lucide-react";
import { useState } from "react";
import Swal from "sweetalert2";
import { profile } from "../data";

const input = "w-full rounded-xl border border-white/20 bg-white/10 p-4 pl-12 text-white placeholder-gray-500 transition-all focus:outline-none focus:ring-2 focus:ring-[#6366f1]/40 hover:border-[#6366f1]/30";

const swal = { background: "#0f0c29", color: "#fff", confirmButtonColor: "#6366f1" };

export default function Contact() {
  return (
    <section id="Contact" className="px-[5%] pb-10 pt-24 md:px-[10%]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center" data-aos="fade-down">
          <h2 className="section-title">Contact Me</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-400 md:text-base">
            Got a question? Send me a message, and I&apos;ll get back to you soon.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <MessageForm />
            <Connect />
          </div>
          <Comments />
        </div>

        <footer className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © 2026 {profile.first}™. All Rights Reserved.
        </footer>
      </div>
    </section>
  );
}

function MessageForm() {
  const submit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const body = `${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`;
    location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Portfolio message from " + f.get("name"))}&body=${encodeURIComponent(body)}`;
    Swal.fire({ ...swal, icon: "success", title: "Almost there!", text: "Your email app is opening with the message ready to send.", timer: 3500 });
    e.target.reset();
  };

  return (
    <div className="glass p-6 sm:p-10" data-aos="fade-right">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h3 className="text-gradient text-3xl font-bold">Get in Touch</h3>
          <p className="mt-2 text-gray-400">Have something to discuss? Send me a message and let&apos;s talk.</p>
        </div>
        <Share2 className="h-9 w-9 text-[#6366f1] opacity-50" />
      </div>
      <form onSubmit={submit} className="space-y-5">
        {[["name", "Your Name", User], ["email", "Your Email", Mail]].map(([name, ph, Icon], i) => (
          <label key={name} className="relative block" data-aos="fade-up" data-aos-delay={100 + i * 100}>
            <Icon className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
            <input name={name} type={name === "email" ? "email" : "text"} placeholder={ph} aria-label={ph} required className={input} />
          </label>
        ))}
        <label className="relative block" data-aos="fade-up" data-aos-delay="300">
          <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
          <textarea name="message" placeholder="Your Message" aria-label="Your Message" required rows={5} className={`${input} resize-none`} />
        </label>
        <button data-aos="fade-up" data-aos-delay="400" className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] py-4 font-medium transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98]">
          <Send size={18} /> Send Message
        </button>
      </form>
    </div>
  );
}

function Connect() {
  return (
    <div className="glass p-6 sm:p-8" data-aos="fade-up">
      <h3 className="flex items-center gap-3 text-xl font-semibold">
        <span className="inline-block h-0.5 w-8 bg-gradient-to-r from-[#6366f1] to-[#a855f7]" /> Connect With Me
      </h3>
      <div className="mt-6 grid gap-4">
        <a href={profile.facebook.url} target="_blank" rel="noopener" className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:-translate-y-0.5 hover:border-[#1877f2]/50 hover:bg-[#1877f2]/10">
          <span className="grid h-12 w-12 place-items-center rounded-lg bg-[#1877f2] transition-transform group-hover:scale-110"><Facebook size={22} /></span>
          <span>
            <b className="block">Let&apos;s Connect</b>
            <span className="text-sm text-gray-400">on Facebook · {profile.facebook.name}</span>
          </span>
        </a>
        <a href={`mailto:${profile.email}`} className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:-translate-y-0.5 hover:border-[#ea4335]/50 hover:bg-[#ea4335]/10">
          <span className="grid h-12 w-12 place-items-center rounded-lg bg-[#ea4335] transition-transform group-hover:scale-110"><Mail size={22} /></span>
          <span className="min-w-0">
            <b className="block">Gmail</b>
            <span className="block truncate text-sm text-gray-400">{profile.email}</span>
          </span>
        </a>
      </div>
    </div>
  );
}

/** Comment wall. Comments are saved in this browser only (no backend). */
function Comments() {
  const [comments, setComments] = useState(() => {
    try { return JSON.parse(localStorage.getItem("rovilyn-comments")) || []; } catch { return []; }
  });

  const post = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const next = [{ name: f.get("name"), text: f.get("text"), at: Date.now() }, ...comments].slice(0, 50);
    setComments(next);
    try { localStorage.setItem("rovilyn-comments", JSON.stringify(next)); } catch { /* storage unavailable */ }
    e.target.reset();
    Swal.fire({ ...swal, icon: "success", title: "Comment posted!", timer: 1800, showConfirmButton: false });
  };

  return (
    <div className="glass flex flex-col p-6 sm:p-8" data-aos="fade-left">
      <h3 className="flex items-center gap-3 text-xl font-semibold">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#6366f1]/20"><MessageCircle size={20} className="text-[#a5b4fc]" /></span>
        Comments <span className="text-[#a5b4fc]">({comments.length})</span>
      </h3>
      <form onSubmit={post} className="mt-6 space-y-4">
        <label className="block text-sm text-gray-300">Name <span className="text-[#a855f7]">*</span>
          <input name="name" required maxLength={40} placeholder="Enter your name" className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 p-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6366f1]/40" />
        </label>
        <label className="block text-sm text-gray-300">Message <span className="text-[#a855f7]">*</span>
          <textarea name="text" required maxLength={300} rows={3} placeholder="Write your message here..." className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 p-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6366f1]/40" />
        </label>
        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] py-3 font-medium transition-all hover:scale-[1.01] active:scale-[0.98]">
          <Send size={16} /> Post Comment
        </button>
      </form>
      <div className="mt-6 max-h-80 space-y-3 overflow-y-auto pr-1">
        {comments.length === 0 && <p className="py-6 text-center text-sm text-gray-500">No comments yet. Be the first!</p>}
        {comments.map((c) => (
          <div key={c.at} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between">
              <b className="flex items-center gap-2 text-sm"><span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-[#6366f1] to-[#a855f7] text-xs">{c.name[0]?.toUpperCase()}</span>{c.name}</b>
              <span className="text-xs text-gray-500">{new Date(c.at).toLocaleDateString()}</span>
            </div>
            <p className="mt-2 break-words text-sm text-gray-300">{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
