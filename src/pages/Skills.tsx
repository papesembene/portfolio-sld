import { Code, Palette, Users, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Outils de Design',
      icon: Palette,
      skills: [
        'Canva',
        'Adobe Illustrator',
        'PhotoShop',
        'Microsoft Design',
        'Figma',
        'Genially'
      ]
    },
    {
      title: 'Outils Collaboratifs',
      icon: Users,
      skills: [
        'Google Workspace',
        'Google Drive',
        'Google Forms',
        'Google Sheet',
        'Google Meet',
        'Google Analytics',
        'Trello',
        'Slack',
        'Notion',
        'Asana'
      ]
    },
    {
      title: 'Bureautique',
      icon: Code,
      skills: [
        'Word',
        'Excel',
        'PowerPoint',
        'Dactylographie'
      ]
    },
    {
      title: 'Autres Outils',
      icon: Wrench,
      skills: [
        'CapCut',
        'Removebg',
        'ChatGPT'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-6 pb-12">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-3xl md:text-6xl font-bold mb-12 gradient-text animate-fade-in">
          Compétences & Outils
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="glass p-8 rounded-2xl animate-fade-in hover-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-accent/20 p-3 rounded-lg">
                  <category.icon className="text-accent" size={32} />
                </div>
                <h2 className="text-2xl font-bold text-accent">{category.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="bg-secondary/50 px-4 py-3 rounded-lg hover:bg-secondary transition-colors text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 glass p-8 rounded-2xl animate-fade-in hover-glow">
          <h2 className="text-2xl font-bold mb-6 text-accent">Réseaux Sociaux</h2>
          <div className="flex flex-wrap gap-4">
            <div className="bg-secondary/50 px-6 py-3 rounded-full hover:bg-secondary transition-colors">
              @Sokhna Lala Diagne
            </div>
            <div className="bg-secondary/50 px-6 py-3 rounded-full hover:bg-secondary transition-colors">
              @Diagne_Lala
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
