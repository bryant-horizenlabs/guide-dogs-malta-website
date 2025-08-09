import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import path from "path";
import { insertContactSchema, insertDonationSchema, insertVolunteerSchema } from "@shared/schema";
import { ZodError } from "zod";
import { sendEmail } from "./emailService";

export async function registerRoutes(app: Express) {
  app.post("/api/contact", async (req, res) => {
    try {
      const submission = insertContactSchema.parse(req.body);
      const result = await storage.createContactSubmission({
        ...submission,
        forwardTo: "info@guidedogsmalta.org"
      });

      // Send email
      try {
        await sendEmail(
          'New Contact Form Submission',
          `Name: ${submission.name}\nEmail: ${submission.email}\nMessage: ${submission.message}`
        );
      } catch (emailError) {
        console.error('Failed to send contact form email:', emailError);
        // Continue with the request even if email fails
      }

      res.json(result);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        console.error('Contact form error:', error);
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  app.post("/api/donations", async (req, res) => {
    try {
      const donation = insertDonationSchema.parse(req.body);
      const result = await storage.createDonation(donation);
      res.json(result);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  app.post("/api/volunteers", async (req, res) => {
    try {
      const volunteer = insertVolunteerSchema.parse(req.body);
      const result = await storage.createVolunteer({
        ...volunteer,
        forwardTo: "info@guidedogsmalta.org"
      });

      // Send email
      try {
        await sendEmail(
          'New Volunteer Application',
          `Name: ${volunteer.name}\nEmail: ${volunteer.email}\nMessage: ${volunteer.experience}`
        );
      } catch (emailError) {
        console.error('Failed to send volunteer form email:', emailError);
        // Continue with the request even if email fails
      }

      res.json(result);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        console.error('Volunteer form error:', error);
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  app.get('/sitemap.xml', (req, res) => {
    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('X-Robots-Tag', 'noindex');
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.guidedogsmalta.org/</loc>
    <lastmod>2024-02-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.guidedogsmalta.org/donate</loc>
    <lastmod>2024-02-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.guidedogsmalta.org/volunteer</loc>
    <lastmod>2024-02-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.guidedogsmalta.org/contact</loc>
    <lastmod>2024-02-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;
    res.send(sitemap);
  });

  return createServer(app);
}