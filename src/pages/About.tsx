import { BookOpen, Heart, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-24 px-6 pb-12">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 gradient-text animate-fade-in">
          À Propos de Moi
        </h1>

        <div className="space-y-8">
          <div className="glass p-8 rounded-2xl animate-fade-in hover-glow">
            <div className="flex items-start gap-4">
              <Heart className="text-accent mt-1" size={32} />
              <div>
                <h2 className="text-2xl font-bold mb-4 text-accent">Ma Passion</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Passionnée par l'univers du digital, je m'engage à construire une carrière 
                  utile, humaine et tournée vers des solutions concrètes. Le design graphique 
                  et la gestion de projet sont mes terrains de jeu préférés où créativité et 
                  organisation se rencontrent.
                </p>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl animate-fade-in hover-glow">
            <div className="flex items-start gap-4">
              <BookOpen className="text-accent mt-1" size={32} />
              <div>
                <h2 className="text-2xl font-bold mb-4 text-accent">Mon Parcours</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Formation</h3>
                    <ul className="space-y-2 ml-4">
                      <li>• Baccalauréat - Institut Privé de Gestion (IPG, Dakar) 2021-2022</li>
                      <li>• BFEM - Lucie Leclerc Nord Foire 2016-2017</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Langues</h3>
                    <ul className="space-y-2 ml-4">
                      <li>• Français: Parler et Écrire</li>
                      <li>• Anglais: B1 - Vocabulaire du quotidien</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl animate-fade-in hover-glow">
            <div className="flex items-start gap-4">
              <Target className="text-accent mt-1" size={32} />
              <div>
                <h2 className="text-2xl font-bold mb-4 text-accent">Mes Soft Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['Connaissance', 'Créativité', 'Compétence', 'Travail d\'équipe', 'Story telling', 'Motivation'].map((skill) => (
                    <div key={skill} className="bg-secondary/50 px-4 py-2 rounded-lg text-center hover:bg-secondary transition-colors">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl animate-fade-in hover-glow">
            <h2 className="text-2xl font-bold mb-4 text-accent">Contact</h2>
            <div className="space-y-2 text-lg text-muted-foreground">
              <p><span className="text-foreground font-semibold">Localisation:</span> YOFF, NORD FOIRE, Dakar, Sénégal</p>
              <p><span className="text-foreground font-semibold">Téléphone:</span> 78 477 80 88</p>
              <p><span className="text-foreground font-semibold">Email:</span> sokhnalaladiagne.p4hackeuse@gmail.com</p>
              <p><span className="text-foreground font-semibold">Statut:</span> Célibataire</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
