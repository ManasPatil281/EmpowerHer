import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SkillCard = ({ skill }) => {
  const { t, i18n } = useTranslation();
  
  const getSkillKey = (id) => {
    switch(id) {
      case "1": return "paperBagMaking";
      case "2": return "clothBagMaking";
      case "3": return "sanitizerMaking";
      case "4": return "maskMaking";
      case "5": return "sanitaryPadMaking";
      case "6": return "diyaMaking";
      case "7": return "candleMaking";
      default: return null;
    }
  };
  
  const skillKey = getSkillKey(skill._id);
  const translationKey = skillKey ? `content.skills.${skillKey}.title` : null;
  
  console.log('Current language:', i18n.language);
  console.log('Skill ID:', skill._id);
  console.log('Skill Key:', skillKey);
  console.log('Translation Key:', translationKey);
  console.log('Translated Title:', translationKey ? t(translationKey) : null);
  
  return (
    <div className="overflow-hidden bg-white rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 h-full">
      <div className="relative">
        <img 
          src={skill.thumbnail} 
          alt={skillKey ? t('content.skills.' + skillKey + '.title') : skill.title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/400x300?text=Skill+Image";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
      </div>
      <div className="p-5">
        <h3 className="mb-3 text-lg font-semibold text-text-primary">
          {skillKey ? t('content.skills.' + skillKey + '.title') : skill.title}
        </h3>
        <p className="text-sm text-text-secondary line-clamp-3 mb-4">
          {skillKey ? t('content.skills.' + skillKey + '.description') : skill.description}
        </p>
        
        {skill.level && (
          <div className="flex items-center gap-2 mb-4">
            <span className="badge badge-secondary">{skill.level}</span>
            {skill.duration && (
              <span className="text-xs text-text-muted">• {skill.duration}</span>
            )}
          </div>
        )}
        
        <div className="mt-auto pt-2">
          <span className="inline-block px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-600 hover:bg-primary-700 transition-colors">
            {t('components.skillCard.learnMore')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
