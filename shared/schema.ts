import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  forwardTo: text("forward_to"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const donations = pgTable("donations", {
  id: serial("id").primaryKey(),
  amount: integer("amount").notNull(),
  email: text("email").notNull(),
  name: text("name").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const volunteers = pgTable("volunteers", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  experience: text("experience").notNull(),
  forwardTo: text("forward_to"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
  forwardTo: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
});

export const insertDonationSchema = createInsertSchema(donations).omit({
  id: true,
  createdAt: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  amount: z.number().min(1, "Minimum donation amount is €1"),
});

export const insertVolunteerSchema = createInsertSchema(volunteers).omit({
  id: true,
  createdAt: true,
  forwardTo: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  experience: z.string().min(10, "Please tell us a bit more about how you'd like to help"),
});

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = z.infer<typeof insertContactSchema>;

export type Donation = typeof donations.$inferSelect;
export type InsertDonation = z.infer<typeof insertDonationSchema>;

export type Volunteer = typeof volunteers.$inferSelect;
export type InsertVolunteer = z.infer<typeof insertVolunteerSchema>;