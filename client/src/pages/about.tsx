import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-16">About Us</h1>

          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Guide Dogs Malta is dedicated to enhancing the independence and quality
              of life for individuals who are blind or partially sighted through the
              provision of highly trained guide dogs and comprehensive support
              services.
            </p>
            <p className="text-lg text-muted-foreground">
              We believe that everyone deserves the opportunity to live life to its
              fullest potential, and our guide dogs play a crucial role in making
              this possible.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}