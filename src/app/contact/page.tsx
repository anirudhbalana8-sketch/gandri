"use client";
import { FormEvent } from "react";
import { PageFrame } from "@/components/site";
export default function Contact() {
	function submit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const message = [
			"Hello Dangri Desert Camp, I would like to make an enquiry.",
			`Name: ${formData.get("name")}`,
			`Phone: ${formData.get("phone")}`,
			`Email: ${formData.get("email")}`,
			`Dates: ${formData.get("dates")}`,
			`Message: ${formData.get("message")}`,
		].join("\n");

		window.open(
			`https://wa.me/917043597002?text=${encodeURIComponent(message)}`,
			"_blank",
			"noopener,noreferrer",
		);
	}

	return <PageFrame><section className="bg-night px-5 pb-20 pt-40 text-paper md:px-10 md:pb-28 md:pt-52"><div className="mx-auto max-w-350"><p className="eyebrow text-sand">Make an enquiry</p><h1 className="mt-5 max-w-4xl font-display text-7xl leading-[.8] md:text-9xl">Let&apos;s plan<br /><em>your desert.</em></h1></div></section><section className="grid bg-paper md:grid-cols-2"><form onSubmit={submit} className="space-y-8 px-5 py-16 md:px-16 md:py-24"><div className="grid gap-8 sm:grid-cols-2"><label className="field">Your name<input required name="name" /></label><label className="field">Phone<input required name="phone" type="tel" /></label></div><div className="grid gap-8 sm:grid-cols-2"><label className="field">Email<input required name="email" type="email" /></label><label className="field">Dates<input required name="dates" placeholder="e.g. 12 - 15 Oct" /></label></div><label className="field">Tell us a little more<textarea required name="message" rows={4} /></label><button className="w-full bg-terracotta py-4 text-xs uppercase tracking-[.2em] text-paper transition hover:bg-night">Send enquiry</button></form><div className="min-h-105 bg-ink md:min-h-full"><iframe title="Dangri Desert Camp location" src="https://www.google.com/maps?q=Dangri%20Desert%20Camp%2C%20Sam%20Village%2C%20Jaisalmer&output=embed" className="h-full min-h-105 w-full grayscale" loading="lazy" /></div></section></PageFrame>;
}