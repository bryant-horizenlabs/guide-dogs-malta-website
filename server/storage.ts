import { ContactSubmission, InsertContactSubmission, Donation, InsertDonation, Volunteer, InsertVolunteer } from "@shared/schema";

export interface IStorage {
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  createDonation(donation: InsertDonation): Promise<Donation>;
  createVolunteer(volunteer: InsertVolunteer): Promise<Volunteer>;
}

export class MemStorage implements IStorage {
  private contacts: Map<number, ContactSubmission>;
  private donations: Map<number, Donation>;
  private volunteers: Map<number, Volunteer>;
  private contactId: number;
  private donationId: number;
  private volunteerId: number;

  constructor() {
    this.contacts = new Map();
    this.donations = new Map();
    this.volunteers = new Map();
    this.contactId = 1;
    this.donationId = 1;
    this.volunteerId = 1;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.contactId++;
    const contact: ContactSubmission = {
      ...submission,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async createDonation(donation: InsertDonation): Promise<Donation> {
    const id = this.donationId++;
    const newDonation: Donation = {
      ...donation,
      id,
      createdAt: new Date(),
      message: donation.message || null,
    };
    this.donations.set(id, newDonation);
    return newDonation;
  }

  async createVolunteer(volunteer: InsertVolunteer): Promise<Volunteer> {
    const id = this.volunteerId++;
    const newVolunteer: Volunteer = {
      ...volunteer,
      id,
      createdAt: new Date(),
    };
    this.volunteers.set(id, newVolunteer);
    return newVolunteer;
  }
}

export const storage = new MemStorage();