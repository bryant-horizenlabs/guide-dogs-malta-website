import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertVolunteerSchema, type InsertVolunteer } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { apiRequest } from "@/lib/queryClient";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Volunteer() {
  const { toast } = useToast();
  const form = useForm<InsertVolunteer>({
    resolver: zodResolver(insertVolunteerSchema),
    defaultValues: {
      name: "",
      email: "",
      experience: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertVolunteer) => {
      const res = await apiRequest("POST", "/api/volunteers", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Registration submitted",
        description: "We are so grateful that you'd like to help! We'll be in touch soon!",
      });
      form.reset();
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    },
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-12 md:pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 md:mb-16"
          >
            <Heart className="w-16 h-16 md:w-24 md:h-24 text-primary mx-auto mb-6 md:mb-8" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Volunteer with Us</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
              It means so much to us that you would consider joining our mission to support the Visually Impared in Malta. Let us know how you'd like to help below!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-12"
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit((data) => mutation.mutate(data))}
                className="space-y-6 md:space-y-8"
              >
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base md:text-lg">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" className="text-base md:text-lg py-5 md:py-6" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base md:text-lg">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" className="text-base md:text-lg py-5 md:py-6" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base md:text-lg">Let us know how you can help!</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your interests and how you'd like to contribute"
                          className="min-h-[120px] resize-none text-base md:text-lg"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg md:text-xl py-6 md:py-8"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}