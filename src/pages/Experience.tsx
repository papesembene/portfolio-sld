import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <div className="min-h-screen pt-24 px-6 pb-12">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-12 gradient-text animate-fade-in">
          Expériences Professionnelles
        </h1>

        <div className="space-y-8">
          <div className="glass p-8 rounded-2xl animate-fade-in hover-glow">
            <div className="flex items-start gap-4">
              <div className="bg-accent/20 p-3 rounded-lg">
                <Briefcase className="text-accent" size={32} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h2 className="text-2xl font-bold text-accent">Assistante Digital</h2>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={18} />
                    <span>2025</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">Orange Digital Center Dakar (ODC)</h3>
                
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Réalisation de projets personnels et scolaires (création de contenus, gestion de réseaux sociaux)</li>
                  <li>• Utilisation d'outils collaboratifs: Google Drive, Trello, Notion pour organiser les tâches</li>
                  <li>• Gestion de projet digital et coordination d'équipe</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl animate-fade-in hover-glow">
            <h2 className="text-2xl font-bold mb-6 text-accent">Compétences en Design</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Création Logo',
                'Création Affiche',
                'Création Carte Visite',
                'Création Flyers',
                'Création Brochure',
                'Création Kakemono',
                'Création Goodies',
                'Charte Graphique',
                'Identité Visuelle'
              ].map((skill) => (
                <div 
                  key={skill} 
                  className="bg-secondary/50 px-4 py-3 rounded-lg hover:bg-secondary transition-colors flex items-center"
                >
                  <span className="text-accent mr-2">▸</span>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="glass p-8 rounded-2xl animate-fade-in hover-glow">
            <h2 className="text-2xl font-bold mb-4 text-accent">Référence</h2>
            <div className="space-y-2">
              <p className="text-lg"><span className="font-semibold">Adji Anta Dabo</span></p>
              <p className="text-muted-foreground">Coach Hackeuse Orange Digital Center, SONATEL ACADEMY</p>
              <p className="text-muted-foreground">Email: adji.anta.dabo@digitalnisa.org</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
