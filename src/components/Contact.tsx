import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire up to email service (e.g., Mailchimp, ConvertKit, custom API)
    toast({
      title: "Thanks for your interest!",
      description: "We'll keep you posted on updates.",
    });
    setEmail("");
  };

  return (
    <section id="contact" className="py-24 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Stay in the <span className="text-primary">Loop</span>
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Want to collaborate, test a tool, or talk ideas? Reach out or subscribe for updates.
        </p>

        {/* Email subscription form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-12">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-background border-border focus:border-primary"
            required
          />
          <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Get Updates
          </Button>
        </form>

        {/* Contact links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto border-border hover:border-primary hover:bg-primary/10"
            asChild
          >
            <a href={`mailto:${siteConfig.contact.email}`}>
              <Mail className="mr-2 w-5 h-5" />
              Email
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto border-border hover:border-primary hover:bg-primary/10"
            asChild
          >
            <a href={siteConfig.contact.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 w-5 h-5" />
              GitHub
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto border-border hover:border-primary hover:bg-primary/10"
            asChild
          >
            <a href={siteConfig.contact.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 w-5 h-5" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
