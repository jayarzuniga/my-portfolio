import React from 'react';
import { FaTrophy, FaMedal, FaCrown, FaAward, FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "AppCon 2024 Grand Winner",
      project: "TransiTech: Smart Transportation System",
      award: "Grand Prize Winner",
      prize: "₱100,000",
      competition: "AppCon 2024",
      participants: "1,042 participants from 79 universities",
      technologies: ["AI Crowd Prediction", "IoT Integration", "Real-time Analytics", "Mobile Development"],
      description: "Led development of an innovative transportation management system with AI-powered crowd prediction and real-time data synchronization.",
      icon: <FaCrown />,
      color: "from-yellow-400 to-yellow-600",
      year: "2024",
      image: "/src/assets/images/Appcon2024.jpg",
      sourceLink: "https://www.bloggersphilippines.com/2025/07/grand-winner-of-appcon-2024-competition.html",
    },
    {
      id: 2,
      title: "AppCon 2023 Best Technology Award",
      project: "AI-Powered Social Innovation Platform",
      award: "Best Technology Award",
      prize: "₱30,000",
      competition: "AppCon 2023",
      participants: "222 teams nationwide",
      technologies: ["Artificial Intelligence", "Blockchain", "Web 5.0", "Internet of Things"],
      description: "Part of AMA University Conquestadors team that developed cutting-edge solutions using emerging technologies to address social issues.",
      icon: <FaTrophy />,
      color: "from-blue-400 to-blue-600",
      year: "2023",
      image: "/src/assets/images/Appcon2023.jpg",
      sourceLink: "https://news.amaes.edu.ph/2024/07/ama-university-conquestadors-emerge.html",
    },
  ];

  const [currentAchievement, setCurrentAchievement] = React.useState(0);

  const nextAchievement = () => {
    setCurrentAchievement((prev) => (prev + 1) % achievements.length);
  };

  const prevAchievement = () => {
    setCurrentAchievement((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  const current = achievements[currentAchievement];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-background-dark via-background-darker to-background-card relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary/8 rounded-full blur-2xl animate-bounce" style={{animationDuration: '4s'}}></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl lg:text-6xl font-black text-text-primary mb-4">
              Greatest <span className="text-primary">Achievements</span> in Tech
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>
          <p className="text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto">
            Recognized excellence in AI, IoT, and innovative technology solutions at national competitions
          </p>
        </div>

        {/* Achievement Card */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Glassmorphism Card */}
            <div className="bg-gradient-to-br from-background-card/60 to-background-overlay/40 backdrop-blur-xl rounded-3xl border border-ui-border/20 shadow-2xl p-8 lg:p-12 relative overflow-hidden">
              {/* Award Icon with Glow */}
              <div className="absolute top-8 right-8 opacity-10">
                <div className={`text-8xl bg-gradient-to-br ${current.color} bg-clip-text text-transparent`}>
                  {current.icon}
                </div>
              </div>
              
              {/* Achievement Content - 2x2 Grid Layout */}
              <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Top Row */}
                  <div className="space-y-6">
                    {/* Picture */}
                    {current.image && (
                      <div>
                        <img 
                          src={current.image} 
                          alt={current.title}
                          className="w-full rounded-2xl shadow-lg border border-ui-border/20 hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-6">
                    {/* Details */}
                    <div className="space-y-4">
                      {/* Award Badge */}
                      <div className="inline-flex items-center gap-3">
                        <div className={`p-3 rounded-2xl bg-gradient-to-br ${current.color} shadow-lg`}>
                          <div className="text-2xl text-white">
                            {current.icon}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-primary uppercase tracking-wider">
                            {current.year}
                          </div>
                          <div className={`text-lg font-bold bg-gradient-to-r ${current.color} bg-clip-text text-transparent`}>
                            {current.award}
                          </div>
                        </div>
                      </div>
                      
                      {/* Title & Project */}
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-black text-text-primary mb-2">
                          {current.title}
                        </h3>
                        <h4 className="text-lg lg:text-xl text-primary font-semibold">
                          {current.project}
                        </h4>
                      </div>
                      
                      {/* Description */}
                      <p className="text-base lg:text-lg text-text-secondary leading-relaxed">
                        {current.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Bottom Row */}
                  <div>
                    {/* Cards */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-background-dark/50 rounded-xl p-3">
                        <div className="text-xs text-text-secondary mb-1">Competition</div>
                        <div className="font-semibold text-text-primary text-xs lg:text-sm">{current.competition}</div>
                      </div>
                      <div className="bg-background-dark/50 rounded-xl p-3">
                        <div className="text-xs text-text-secondary mb-1">Prize</div>
                        <div className={`text-lg lg:text-xl font-black bg-gradient-to-r ${current.color} bg-clip-text text-transparent`}>
                          {current.prize}
                        </div>
                      </div>
                      <div className="bg-background-dark/50 rounded-xl p-3">
                        <div className="text-xs text-text-secondary mb-1">Year</div>
                        <div className="font-semibold text-text-primary text-sm">{current.year}</div>
                      </div>
                      <div className="bg-background-dark/50 rounded-xl p-3">
                        <div className="text-xs text-text-secondary mb-1">Participants</div>
                        <div className="text-xs text-primary">{current.participants}</div>
                      </div>
                    </div>
                    
                  </div>
                  
                  <div className="space-y-4">
                    {/* Technologies Used */}
                    <div>
                      <div className="text-sm text-text-secondary mb-3">Technologies Used</div>
                      <div className="flex flex-wrap gap-2">
                        {current.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full border border-primary/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Read Full Article */}
                    {current.sourceLink && (
                      <div className="w-full">
                        <a
                          href={current.sourceLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-sm border border-primary/30 rounded-2xl font-semibold text-primary hover:from-primary hover:to-primary-dark hover:text-background-darker transition-all duration-500 hover:scale-105 hover:shadow-glow group"
                        >
                          <FaExternalLinkAlt className="group-hover:rotate-12 transition-transform duration-300" />
                          <span>Read Full Article</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center mt-8">
              <div className="flex items-center gap-6">
                <button
                  onClick={prevAchievement}
                  className="p-4 rounded-2xl bg-gradient-to-r from-background-dark/60 to-background-overlay/40 backdrop-blur-sm border border-ui-border/20 hover:border-primary/30 text-text-secondary hover:text-primary transition-all duration-300 hover:scale-110 group"
                  aria-label="Previous achievement"
                >
                  <FaChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </button>
                
                {/* Achievement Indicators */}
                <div className="flex items-center gap-3">
                  {achievements.map((achievement, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentAchievement(index)}
                      className={`relative transition-all duration-300 ${
                        index === currentAchievement 
                          ? 'scale-125' 
                          : 'hover:scale-110'
                      }`}
                      aria-label={`Go to achievement ${index + 1}`}
                    >
                      <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === currentAchievement 
                          ? `bg-gradient-to-r ${achievement.color} shadow-lg` 
                          : 'bg-ui-border hover:bg-primary/50'
                      }`} />
                      {index === currentAchievement && (
                        <div className={`absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r ${achievement.color} animate-ping opacity-75`} />
                      )}
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={nextAchievement}
                  className="p-4 rounded-2xl bg-gradient-to-r from-background-dark/60 to-background-overlay/40 backdrop-blur-sm border border-ui-border/20 hover:border-primary/30 text-text-secondary hover:text-primary transition-all duration-300 hover:scale-110 group"
                  aria-label="Next achievement"
                >
                  <FaChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;