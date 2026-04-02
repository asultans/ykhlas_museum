"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'kk' | 'ru' | 'en';

export interface Translations {
  header: {
    museumName: string;
    contacts: string;
  };
  menu: {
    kazakh: string;
    turkic: string;
    world: string;
    about: string;
  };
  hero: {
    title: string;
    subtitle: string;
    fifthMuseum: string;
    collectionSize: string;
    zenkovBuilding: {
      title: string;
      description: string;
      address: string;
      phone: string;
    };
  };
  videoSection: {
    heritageMessage: string;
    kazakhHeritage: {
      title: string;
      count: string;
      stringed: string;
      stringedList: string;
      percussion: string;
      percussionList: string;
      wind: string;
      windList: string;
      noisemakers: string;
      noisemakersList: string;
      reed: string;
      reedList: string;
      explore: string;
    };
    memorial: {
      title: string;
      description: string;
      closing: string;
      explore: string;
    };
    global: {
      title: string;
      count: string;
      line1: string;
      line2: string;
      line3: string;
      explore: string;
    };
    turkic: {
      title: string;
      count: string;
      subtitle: string;
      groups: string;
      description: string;
      explore: string;
    };
  };
  languages: {
    kk: string;
    ru: string;
    en: string;
  };
  kazakhInstruments: {
    hero: {
      title: string;
      subtitle: string;
    };
    categories: {
      stringed: { name: string; description: string; };
      percussion: { name: string; description: string; };
      wind: { name: string; description: string; };
      noisemaker: { name: string; description: string; };
      reed: { name: string; description: string; };
    };
    memorial: {
      title: string;
      description: string;
      buttonText: string;
    };
    instrumentsPage: {
      title: string;
      backButton: string;
    };
  };
  memorialPage: {
    title: string;
    subtitle: string;
    backButton: string;
    yearsLabel: string;
  };
  worldInstruments: {
    hero: {
      title: string;
      subtitle: string;
    };
    instrumentsPage: {
      title: string;
      backButton: string;
    };
    audioPlayer: {
      play: string;
      pause: string;
    };
  };
  turkicInstruments: {
    hero: {
      title: string;
      subtitle: string;
    };
    instrumentsPage: {
      title: string;
      backButton: string;
    };
  };
}

const translations: Record<Language, Translations> = {
  kk: {
    header: {
      museumName: 'Музыкалық аспаптар мұражайы',
      contacts: 'Байланыс',
    },
    menu: {
      kazakh: 'Қазақ',
      turkic: 'Түркі',
      world: 'Әлем',
      about: 'Мұражай туралы',
    },
    hero: {
      title: 'Музыкалық аспаптар мұражайы',
      subtitle: 'Museum of Musical Instruments',
      fifthMuseum: 'Әлем бойынша халық музыка аспаптарына арналған бесінші музей',
      collectionSize: 'Қазақ, түркі халықтарының және әлемнің 40-тан астам елінен 1200-ден астам аспап',
      zenkovBuilding: {
        title: 'Зенков ғимараты',
        description: 'Музей 1908 жылы әйгілі сәулетші А.П. Зенковтың жобасымен салынған тарихи ғимаратта орналасқан. Бұл "Ропетов" стиліндегі ағаш сәулет өнерінің бірегей үлгісі.',
        address: 'Зенков көшесі 24, Алматы 050000',
        phone: '+7 (727) 291‒69‒17'
      }
    },
    videoSection: {
      heritageMessage: '113 жылдық сәулет мұрасы — әлемдік музыка мұрасының 1200-ден астам үні',
      kazakhHeritage: {
        title: 'Қазақ мұрасы',
        count: '30+ аспап',
        stringed: 'Ішекті',
        stringedList: 'Домбыра, Қобыз, Жетіген, Шертер, Адырна',
        percussion: 'Ұрмалы',
        percussionList: 'Дабыл, Дауылпаз, Даңғыра',
        wind: 'Үрмелі',
        windList: 'Сыбызғы, Керней, Сазсырнай',
        noisemakers: 'Шулы',
        noisemakersList: 'Асатаяқ, Қоңырау',
        reed: 'Тілшелі',
        reedList: 'Шаңқобыз',
        explore: 'Зерттеу'
      },
      memorial: {
        title: 'Аңыздармен бірге жүріңіз. Тарихқа жаныңызбен тиіңіз.',
        description: 'Қазақстанның мәдени болмысын қалыптастырған 25 музыка шеберінің жеке аспаптарын көріңіз — Құрманғазы мен Дина Нүрпейісовадан Абай Құнанбайұлы мен Жамбыл Жабаевқа дейін.',
        closing: 'Әр аспап — бір тарих. Әр тарих — ұрпақтан ұрпаққа жалғасады.',
        explore: 'Мемориалдық аспаптар'
      },
      global: {
        title: 'Әлемдік жаңғырықтар',
        count: '40+ ел',
        line1: 'Үндістанның Ситарынан Финляндияның Кантелесіне дейін',
        line2: 'Кореяның Гаягеумынан Армянияның Дудугіне дейін',
        line3: 'Құрлықтар арқылы дыбыстық саяхат',
        explore: 'Әлем аспаптары'
      },
      turkic: {
        title: 'Түркі симфониясы',
        count: '13+ этностық топ',
        subtitle: 'Ортақ тамырлар. Әртүрлі дауыстар. Бір музыкалық жан.',
        groups: 'Алтай • Әзірбайжан • Башқұрт • Қарақалпақ • Хакас • Қырғыз\nТатар • Түрік • Түрікмен • Тыва • Ұйғыр • Өзбек • Якут',
        description: 'Алтай таулары мен Каспий теңізі арасында созылған музыкалық мұрасын зерттеңіз — әрбір халық өз дауысын қосады, бірақ барлығы бір-бірімен үйлеседі.',
        explore: 'Түркі аспаптары'
      }
    },
    languages: {
      kk: 'Қазақша',
      ru: 'Русский',
      en: 'English',
    },
    kazakhInstruments: {
      hero: {
        title: 'Қазақ халқының музыкалық аспаптары',
        subtitle: 'Қазақ халқының бай музыкалық мұрасын дәстүрлі аспаптар арқылы ашыңыз',
      },
      categories: {
        stringed: {
          name: 'Ішекті аспаптар',
          description: 'Домбыра, Қобыз, Жетіген, Шертер, Адырна - қазақ музыкасының жүрегі және жаны. Бұл аспаптар ғасырлар бойы даланың дауысын жеткізіп келеді.',
        },
        percussion: {
          name: 'Ұрмалы аспаптар',
          description: 'Дабыл, Дауылпаз, Даңғыра - көшпенді өмірдің ырғағы мен дүрсілін жеткізетін аспаптар. Соғыс пен мереке кезінде қолданылған.',
        },
        wind: {
          name: 'Үрмелі аспаптар',
          description: 'Сыбызғы, Керней, Сазсырнай - қазақ даласының желін, құстардың әнін және табиғаттың дауысын жеткізетін аспаптар.',
        },
        noisemaker: {
          name: 'Шулы аспаптар',
          description: 'Асатаяқ, Қоңырау - көшпенді өмірдің ырғағын құрайтын, баланы тәрбиелеуде және салт-дәстүрлерде қолданылған аспаптар.',
        },
        reed: {
          name: 'Тілшелі аспаптар',
          description: 'Шаңқобыз - ерте замандардан келе жатқан қасиетті аспап. Бақсылар мен домбырашылардың қолында ерекше күш иеленген.',
        },
      },
      memorial: {
        title: 'Аңыздармен бірге жүріңіз',
        description: 'Қазақстанның мәдени болмысын қалыптастырған ұлы музыка шеберлерінің жеке аспаптарын көріңіз. Әр аспап бір тарих, әр тарих ұрпақтан ұрпаққа жалғасады.',
        buttonText: 'Мемориалдық аспаптар',
      },
      instrumentsPage: {
        title: 'Қазақ халқының музыкалық аспаптары',
        backButton: '← Артқа',
      },
    },
    memorialPage: {
      title: 'Аңыздармен бірге жүріңіз',
      subtitle: 'Қазақстанның мәдени болмысын қалыптастырған 25 музыка шеберінің жеке аспаптары',
      backButton: '← Артқа',
      yearsLabel: 'жж.',
    },
    worldInstruments: {
      hero: {
        title: 'Әлем халықтарының музыкалық аспаптары',
        subtitle: 'Әлемнің 32+ еліндегі музыкалық мұраны олардың дәстүрлі аспаптары арқылы зерттеңіз',
      },
      instrumentsPage: {
        title: 'Әлем халықтарының музыкалық аспаптары',
        backButton: '← Артқа',
      },
      audioPlayer: {
        play: 'Ойнату',
        pause: 'Тоқтату',
      },
    },
    turkicInstruments: {
      hero: {
        title: 'Түркі халықтарының музыкалық аспаптары',
        subtitle: '13+ этникалық топтың музыкалық мұрасын олардың дәстүрлі аспаптары арқылы зерттеңіз',
      },
      instrumentsPage: {
        title: 'Түркі халықтарының музыкалық аспаптары',
        backButton: '← Артқа',
      },
    },
  },
  ru: {
    header: {
      museumName: 'Музей музыкальных инструментов',
      contacts: 'Контакты',
    },
    menu: {
      kazakh: 'Казахские',
      turkic: 'Тюркские',
      world: 'Мировые',
      about: 'О музее',
    },
    hero: {
      title: 'Музей музыкальных инструментов',
      subtitle: 'Museum of Musical Instruments',
      fifthMuseum: 'Пятый в мире музей, специализирующийся на народных музыкальных инструментах',
      collectionSize: 'Более 1200 инструментов казахского, тюркских народов и более 40 стран мира',
      zenkovBuilding: {
        title: 'Здание Зенкова',
        description: 'Музей расположен в историческом здании, построенном в 1908 году по проекту известного архитектора А.П. Зенкова. Это уникальный образец деревянного зодчества в «ропетовском» стиле.',
        address: 'ул. Зенкова 24, Алматы 050000',
        phone: '+7 (727) 291‒69‒17'
      }
    },
    videoSection: {
      heritageMessage: '113-летнее архитектурное наследие, хранящее более 1200 голосов мирового музыкального наследия',
      kazakhHeritage: {
        title: 'Казахское наследие',
        count: '30+ инструментов',
        stringed: 'Струнные',
        stringedList: 'Домбра, Кобыз, Жетыген, Шертер, Адырна',
        percussion: 'Ударные',
        percussionList: 'Дабыл, Дауылпаз, Дангыра',
        wind: 'Духовые',
        windList: 'Сыбызгы, Керней, Сазсырнай',
        noisemakers: 'Шумовые',
        noisemakersList: 'Асатаяк, Конырау',
        reed: 'Язычковые',
        reedList: 'Шанкобыз',
        explore: 'Исследовать'
      },
      memorial: {
        title: 'Пройдитесь среди легенд. Прикоснитесь к истории.',
        description: 'Познакомьтесь с личными инструментами 25 музыкальных мастеров, сформировавших культурную идентичность Казахстана — от Курмангазы и Дины Нурпеисовой до Абая Кунанбаева и Жамбыла Жабаева.',
        closing: 'Каждый инструмент хранит историю. Каждая история звучит сквозь поколения.',
        explore: 'Мемориальные инструменты'
      },
      global: {
        title: 'Мировое эхо',
        count: '40+ стран',
        line1: 'От Ситара Индии до Кантеле Финляндии',
        line2: 'От корейского Гаягыма до армянского Дудука',
        line3: 'Звуковое путешествие через континенты',
        explore: 'Инструменты мира'
      },
      turkic: {
        title: 'Тюркская симфония',
        count: '13+ этнических групп',
        subtitle: 'Общие корни. Разные голоса. Единая музыкальная душа.',
        groups: 'Алтай • Азербайджан • Башкир • Каракалпак • Хакас • Кыргыз\nТатар • Турция • Туркмен • Тува • Уйгур • Узбек • Якут',
        description: 'Исследуйте музыкальное наследие, протянувшееся от Алтайских гор до Каспийского моря — каждый народ добавляет свой голос, но все они звучат в гармонии.',
        explore: 'Тюркские инструменты'
      }
    },
    languages: {
      kk: 'Қазақша',
      ru: 'Русский',
      en: 'English',
    },
    kazakhInstruments: {
      hero: {
        title: 'Музыкальные инструменты казахского народа',
        subtitle: 'Откройте для себя богатое музыкальное наследие казахского народа через их традиционные инструменты',
      },
      categories: {
        stringed: {
          name: 'Струнные инструменты',
          description: 'Домбра, Кобыз, Жетыген, Шертер, Адырна - сердце и душа казахской музыки. Эти инструменты передают голос степи на протяжении веков.',
        },
        percussion: {
          name: 'Ударные инструменты',
          description: 'Дабыл, Дауылпаз, Дангыра - инструменты, передающие ритм и грохот кочевой жизни. Использовались в войне и на праздниках.',
        },
        wind: {
          name: 'Духовые инструменты',
          description: 'Сыбызгы, Керней, Сазсырнай - инструменты, передающие ветер казахской степи, песни птиц и голоса природы.',
        },
        noisemaker: {
          name: 'Шумовые инструменты',
          description: 'Асатаяк, Конырау - инструменты, создающие ритм кочевой жизни, используемые в воспитании детей и традициях.',
        },
        reed: {
          name: 'Язычковые инструменты',
          description: 'Шанкобыз - священный инструмент, пришедший из древних времен. Обладал особой силой в руках бакс и домбристов.',
        },
      },
      memorial: {
        title: 'Пройдитесь среди легенд',
        description: 'Познакомьтесь с личными инструментами великих музыкальных мастеров, сформировавших культурную идентичность Казахстана. Каждый инструмент хранит историю, каждая история звучит сквозь поколения.',
        buttonText: 'Мемориальные инструменты',
      },
      instrumentsPage: {
        title: 'Музыкальные инструменты казахского народа',
        backButton: '← Назад',
      },
    },
    memorialPage: {
      title: 'Пройдитесь среди легенд',
      subtitle: 'Личные инструменты 25 музыкальных мастеров, сформировавших культурную идентичность Казахстана',
      backButton: '← Назад',
      yearsLabel: 'гг.',
    },
    worldInstruments: {
      hero: {
        title: 'Музыкальные инструменты народов мира',
        subtitle: 'Исследуйте музыкальное наследие 32+ стран через их традиционные инструменты',
      },
      instrumentsPage: {
        title: 'Музыкальные инструменты народов мира',
        backButton: '← Назад',
      },
      audioPlayer: {
        play: 'Играть',
        pause: 'Пауза',
      },
    },
    turkicInstruments: {
      hero: {
        title: 'Музыкальные инструменты тюркоязычных народов',
        subtitle: 'Исследуйте музыкальное наследие 13+ этнических групп через их традиционные инструменты',
      },
      instrumentsPage: {
        title: 'Музыкальные инструменты тюркоязычных народов',
        backButton: '← Назад',
      },
    },
  },
  en: {
    header: {
      museumName: 'Museum of Musical Instruments',
      contacts: 'Contacts',
    },
    menu: {
      kazakh: 'Kazakh',
      turkic: 'Turkic',
      world: 'World',
      about: 'About',
    },
    hero: {
      title: 'Museum of Musical Instruments',
      subtitle: 'Музыкалық аспаптар мұражайы',
      fifthMuseum: '5th museum of its kind in the world',
      collectionSize: '1,200+ instruments from Kazakh, Turkic peoples, and 40+ countries',
      zenkovBuilding: {
        title: 'Zenkov Building',
        description: 'The museum is located in a historic building constructed in 1908 by the famous architect A.P. Zenkov. It is a unique example of wooden architecture in the "Ropetov" style.',
        address: 'Zenkov St 24, Almaty 050000',
        phone: '+7 (727) 291‒69‒17'
      }
    },
    videoSection: {
      heritageMessage: 'A 113-year-old architectural heritage housing over 1,200 voices of the world\'s musical heritage',
      kazakhHeritage: {
        title: 'Kazakh Heritage',
        count: '30+ instruments',
        stringed: 'Stringed',
        stringedList: 'Dombra, Kobyz, Zhetygen, Sherter, Adyrna',
        percussion: 'Percussion',
        percussionList: 'Dabyl, Dauylpaz, Dangyra',
        wind: 'Wind',
        windList: 'Sybyzgy, Kernei, Sazsyrnai',
        noisemakers: 'Noisemakers',
        noisemakersList: 'Asatayak, Konyrau',
        reed: 'Reed',
        reedList: 'Shankobyz',
        explore: 'Explore'
      },
      memorial: {
        title: 'Walk among legends. Touch history.',
        description: 'Experience the personal instruments of 25 musical masters who shaped Kazakhstan\'s cultural identity — from Kurmangazy and Dina Nurpeisova to Abai Kunanbaiuly and Zhambyl Zhabaev.',
        closing: 'Each instrument tells a story. Each story echoes through generations.',
        explore: 'Memorial Instruments'
      },
      global: {
        title: 'Global Echoes',
        count: '40+ countries',
        line1: 'From the Sitar of India to the Kantele of Finland',
        line2: 'From Korean Gayageum to Armenian Duduk',
        line3: 'A sonic journey across continents',
        explore: 'World Instruments'
      },
      turkic: {
        title: 'Turkic Symphony',
        count: '13+ ethnic groups',
        subtitle: 'Shared roots. Distinct voices. One musical soul.',
        groups: 'Altai • Azerbaijan • Bashkir • Karakalpak • Khakass • Kyrgyz\nTatar • Turkish • Turkmen • Tuvan • Uigur • Uzbek • Yakut',
        description: 'Explore the musical heritage stretching from the Altai Mountains to the Caspian Sea — each people adding their voice, yet all harmonizing as one.',
        explore: 'Turkic Instruments'
      }
    },
    languages: {
      kk: 'Қазақша',
      ru: 'Русский',
      en: 'English',
    },
    kazakhInstruments: {
      hero: {
        title: 'Musical Instruments of the Kazakh People',
        subtitle: 'Discover the rich musical heritage of the Kazakh people through their traditional instruments',
      },
      categories: {
        stringed: {
          name: 'Stringed Instruments',
          description: 'Dombra, Kobyz, Zhetygen, Sherter, Adyrna - the heart and soul of Kazakh music. These instruments have carried the voice of the steppe for centuries.',
        },
        percussion: {
          name: 'Percussion Instruments',
          description: 'Dabyl, Dauylpaz, Dangyra - instruments conveying the rhythm and thunder of nomadic life. Used in war and celebrations.',
        },
        wind: {
          name: 'Wind Instruments',
          description: 'Sybyzgy, Kernei, Sazsyrnai - instruments carrying the wind of the Kazakh steppe, the songs of birds, and the voices of nature.',
        },
        noisemaker: {
          name: 'Noisemaker Instruments',
          description: 'Asatayak, Konyrau - instruments creating the rhythm of nomadic life, used in child rearing and traditions.',
        },
        reed: {
          name: 'Reed Instruments',
          description: 'Shankobyz - a sacred instrument from ancient times. Possessed special power in the hands of shamans and dombra players.',
        },
      },
      memorial: {
        title: 'Walk Among Legends',
        description: 'Experience the personal instruments of great musical masters who shaped Kazakhstan\'s cultural identity. Each instrument tells a story, each story echoes through generations.',
        buttonText: 'Memorial Instruments',
      },
      instrumentsPage: {
        title: 'Musical Instruments of the Kazakh People',
        backButton: '← Back',
      },
    },
    memorialPage: {
      title: 'Walk Among Legends',
      subtitle: 'Personal instruments of 25 musical masters who shaped Kazakhstan\'s cultural identity',
      backButton: '← Back',
      yearsLabel: '',
    },
    worldInstruments: {
      hero: {
        title: 'Musical Instruments of the World',
        subtitle: 'Explore the musical heritage of 32+ countries through their traditional instruments',
      },
      instrumentsPage: {
        title: 'Musical Instruments of the World',
        backButton: '← Back',
      },
      audioPlayer: {
        play: 'Play',
        pause: 'Pause',
      },
    },
    turkicInstruments: {
      hero: {
        title: 'Musical Instruments of Turkic Peoples',
        subtitle: 'Explore the musical heritage of 13+ ethnic groups through their traditional instruments',
      },
      instrumentsPage: {
        title: 'Musical Instruments of Turkic Peoples',
        backButton: '← Back',
      },
    },
  },
};

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Detect browser/device language
function detectLanguage(): Language {
  if (typeof window === 'undefined') return 'kk';
  
  const browserLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage || '';
  const langCode = browserLang.toLowerCase().split('-')[0];
  
  if (langCode === 'kk' || langCode === 'kz') return 'kk';
  if (langCode === 'ru') return 'ru';
  if (langCode === 'en') return 'en';
  
  // Default to Kazakh for Kazakhstan region regardless of language
  if (browserLang.toLowerCase().includes('kz')) return 'kk';
  
  return 'kk'; // Default language
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('kk');
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Check localStorage first, then browser language
    const savedLang = localStorage.getItem('museum-language') as Language | null;
    if (savedLang && ['kk', 'ru', 'en'].includes(savedLang)) {
      setLanguageState(savedLang);
    } else {
      const detected = detectLanguage();
      setLanguageState(detected);
    }
    setIsHydrated(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('museum-language', lang);
    // Update HTML lang attribute
    document.documentElement.lang = lang;
  };

  // Update HTML lang attribute on language change
  useEffect(() => {
    if (isHydrated) {
      document.documentElement.lang = language;
    }
  }, [language, isHydrated]);

  return (
    <I18nContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

// Export translations for direct access if needed
export { translations };
