import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistEntrySchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Add waitlist entry
  app.post("/api/waitlist", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const result = insertWaitlistEntrySchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromZodError(result.error);
        return res.status(400).json({
          message: validationError.message,
        });
      }
      
      const { name, email } = result.data;
      
      // Check if email already exists in waitlist
      const existingEntry = await storage.getWaitlistEntryByEmail(email);
      if (existingEntry) {
        return res.status(409).json({
          message: "This email is already on our waitlist.",
        });
      }
      
      // Create new waitlist entry
      const entry = await storage.createWaitlistEntry({ name, email });
      
      return res.status(201).json({
        message: "Successfully added to waitlist",
        entry,
      });
    } catch (error) {
      console.error("Error adding to waitlist:", error);
      return res.status(500).json({
        message: "An error occurred while adding you to the waitlist",
      });
    }
  });

  // Get all waitlist entries (for admin purposes, would normally be protected)
  app.get("/api/waitlist", async (_req: Request, res: Response) => {
    try {
      const entries = await storage.getWaitlistEntries();
      return res.status(200).json(entries);
    } catch (error) {
      console.error("Error fetching waitlist entries:", error);
      return res.status(500).json({
        message: "An error occurred while fetching waitlist entries",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
