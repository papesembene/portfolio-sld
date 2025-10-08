import TypeWriter from '@/components/TypeWriter';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImage from '@/assets/profile.jpeg';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-accent text-xl">Bonjour, je suis</p>
              <h1 className="text-4xl md:text-7xl font-bold">
                <TypeWriter text="Sokhna Lala Diagne" delay={150} />
              </h1>
            </div>
            
            <p className="text-xl md:text-3xl text-muted-foreground">
              Assistante Digital Design Graphique & Gestion de Projet
            </p>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Jeune femme passionnée par l'univers du digital, j'aspire à construire 
              une carrière utile, humaine et tournée vers les solutions concrètes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className="glass px-8 py-3 rounded-full hover-glow flex items-center justify-center gap-2 group"
              >
                Me Contacter
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/about"
                className="px-8 py-3 border border-border rounded-full hover:border-accent transition-colors text-center"
              >
                En Savoir Plus
              </Link>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl opacity-20 animate-glow"></div>
              <img
                src={profileImage}
                alt="Sokhna Lala Diagne"
                className="relative rounded-full w-64 h-64 md:w-96 md:h-96 object-cover border-4 border-accent/30 hover-glow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
