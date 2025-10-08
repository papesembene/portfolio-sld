import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast.success('Message envoyé avec succès !');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      toast.error('Erreur lors de l\'envoi du message. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-24 px-6 pb-12">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-12 gradient-text animate-fade-in">
          Me Contacter
        </h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            <div className="glass p-6 rounded-2xl hover-glow">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="bg-accent/20 p-3 rounded-lg self-center sm:self-start">
                  <Mail className="text-accent" size={24} />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:sokhnalaladiagne.p4hackeuse@gmail.com"
                    className="text-muted-foreground hover:text-accent transition-colors break-all"
                  >
                    sokhnalaladiagne.p4hackeuse@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl hover-glow">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="bg-accent/20 p-3 rounded-lg self-center sm:self-start">
                  <Phone className="text-accent" size={24} />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-semibold mb-1">Téléphone</h3>
                  <a
                    href="tel:+221784778088"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    +221 78 477 80 88
                  </a>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl hover-glow">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="bg-accent/20 p-3 rounded-lg self-center sm:self-start">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-semibold mb-1">Localisation</h3>
                  <p className="text-muted-foreground">
                    YOFF, NORD FOIRE<br />
                    Dakar, Sénégal
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 rounded-2xl animate-fade-in hover-glow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-semibold">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Envoi en cours...' : 'Envoyer le Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
