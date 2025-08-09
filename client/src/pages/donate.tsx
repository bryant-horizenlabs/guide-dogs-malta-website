import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Donate() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Heart className="w-24 h-24 text-primary mx-auto mb-8" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Online Donations Coming Soon</h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
              We're working on making it easier for you to support our mission online. 
              In the meantime, please contact us directly to learn about other ways to contribute.
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-xl px-8 py-6">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}