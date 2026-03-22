import Icon from "@/components/ui/icon";

const FIREFLY_IMAGE = "https://cdn.poehali.dev/projects/2a0a9b7f-08f1-4dd4-85a6-f6d2cddfdcd1/files/a2a2d641-23f1-4a77-b8e5-5fa213599754.jpg";

const fireflies = [
  { top: "15%", left: "8%", duration: "5s", delay: "0s" },
  { top: "25%", left: "92%", duration: "7s", delay: "1s" },
  { top: "60%", left: "5%", duration: "6s", delay: "2s" },
  { top: "70%", left: "90%", duration: "8s", delay: "0.5s" },
  { top: "40%", left: "50%", duration: "9s", delay: "3s" },
  { top: "80%", left: "30%", duration: "5.5s", delay: "1.5s" },
  { top: "10%", left: "60%", duration: "6.5s", delay: "2.5s" },
  { top: "50%", left: "75%", duration: "7.5s", delay: "4s" },
];

const stars = [
  { top: "5%", left: "20%", size: 2, duration: "2s", delay: "0s" },
  { top: "8%", left: "45%", size: 3, duration: "3s", delay: "0.5s" },
  { top: "12%", left: "70%", size: 2, duration: "2.5s", delay: "1s" },
  { top: "3%", left: "85%", size: 2, duration: "1.8s", delay: "0.3s" },
  { top: "18%", left: "35%", size: 2, duration: "3.2s", delay: "1.5s" },
  { top: "30%", left: "15%", size: 3, duration: "2.2s", delay: "0.8s" },
  { top: "35%", left: "88%", size: 2, duration: "2.8s", delay: "2s" },
  { top: "55%", left: "22%", size: 2, duration: "3s", delay: "1.2s" },
  { top: "65%", left: "65%", size: 3, duration: "2.4s", delay: "0.6s" },
  { top: "75%", left: "48%", size: 2, duration: "1.9s", delay: "2.2s" },
  { top: "85%", left: "12%", size: 2, duration: "3.5s", delay: "0.9s" },
  { top: "90%", left: "78%", size: 3, duration: "2.7s", delay: "1.8s" },
];

const weeks = [
  {
    num: 1,
    icon: "🔥",
    title: "Тайна огня и первая искорка",
    color: "from-orange-500/20 to-red-500/10",
    border: "border-orange-400/30",
    items: [
      "Беседа «Что мы знаем о свете?»",
      "Сказки: «Кошкин дом», миф о Прометее",
      "Опыт: наблюдение за пламенем свечи",
      "Рисование «Огонёк» ватными палочками",
      "Правила пожарной безопасности",
    ],
  },
  {
    num: 2,
    icon: "🕯️",
    title: "В гостях у Бабушки Лучинки",
    color: "from-amber-500/20 to-yellow-500/10",
    border: "border-amber-400/30",
    items: [
      "Рассматривание лучины, свечи, керосиновой лампы",
      "Игра «Теневой театр» — сказка «Репка»",
      "Лепка «Свечка» из пластилина",
      "Разучивание стихов об огоньке",
    ],
  },
  {
    num: 3,
    icon: "💡",
    title: "Волшебная лампочка",
    color: "from-yellow-400/20 to-lime-500/10",
    border: "border-yellow-400/30",
    items: [
      "Беседа «Как электричество пришло в дом»",
      "Разные лампочки: накаливания и светодиодная",
      "Опыт с фонариком (далеко / близко)",
      "Игра «Найди, что работает от электричества»",
      "Безопасность: розетки и провода",
    ],
  },
  {
    num: 4,
    icon: "🏮",
    title: "Мастерская Светлячков",
    color: "from-green-500/20 to-teal-500/10",
    border: "border-green-400/30",
    items: [
      "Мастер-класс с родителями",
      "Семейный светильник: декор баночки",
      "Светлячок из пластикового яйца",
      "Бумажный фонарик своими руками",
      "Коллективное панно «История света»",
    ],
  },
  {
    num: 5,
    icon: "🎉",
    title: "Праздник света (итоговый)",
    color: "from-purple-500/20 to-pink-500/10",
    border: "border-purple-400/30",
    items: [
      "Выставка «Наши семейные светлячки»",
      "Стихи и песни про свет",
      "Включение всех самодельных светильников",
      "Чаепитие с электрическими свечами",
      "Возвращение к «Методу трёх вопросов»",
    ],
  },
];

const areas = [
  {
    icon: "🔬",
    title: "Познавательное",
    desc: "История освещения, опыты со светом и тенью, экспериментирование",
    color: "border-yellow-400/40 bg-yellow-400/5",
  },
  {
    icon: "🤝",
    title: "Социально-коммуникативное",
    desc: "Беседы о безопасности, совместная деятельность, взаимодействие в группе",
    color: "border-blue-400/40 bg-blue-400/5",
  },
  {
    icon: "📖",
    title: "Речевое",
    desc: "Лучина, керосин, подсвечник, пламя, электричество — обогащение словаря",
    color: "border-green-400/40 bg-green-400/5",
  },
  {
    icon: "🎨",
    title: "Художественно-эстетическое",
    desc: "Рисование, лепка свечей, создание светильников, теневой театр",
    color: "border-pink-400/40 bg-pink-400/5",
  },
  {
    icon: "🤸",
    title: "Физическое",
    desc: "Игры «День и ночь», «Горелки», пальчиковая гимнастика",
    color: "border-orange-400/40 bg-orange-400/5",
  },
];

const tasks = [
  {
    type: "Образовательные",
    icon: "📚",
    color: "bg-yellow-400/10 border-yellow-400/30",
    titleColor: "text-yellow-300",
    items: [
      "Дать представления об освещении прошлого (костёр, лучина, свеча, лампа) и настоящего (лампочки, светодиоды, фонарики)",
      "Познакомить со свойствами света и тени",
      "Создать условия для практических опытов и экспериментирования",
    ],
  },
  {
    type: "Развивающие",
    icon: "🌱",
    color: "bg-green-400/10 border-green-400/30",
    titleColor: "text-green-300",
    items: [
      "Обогатить словарный запас: лучина, керосин, подсвечник, пламя, электричество, тень, отражение",
      "Развивать познавательную активность, любознательность и умение делать выводы",
    ],
  },
  {
    type: "Воспитательные",
    icon: "💛",
    color: "bg-amber-400/10 border-amber-400/30",
    titleColor: "text-amber-300",
    items: [
      "Воспитывать бережное отношение к электроэнергии",
      "Формировать основы безопасного поведения: спички детям не игрушка, нельзя трогать розетки",
    ],
  },
];

export default function Index() {
  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{ background: "linear-gradient(160deg, #0d1b3e 0%, #0a1628 40%, #0d2d1a 100%)" }}
    >
      {/* Stars */}
      {stars.map((s, i) => (
        <div
          key={i}
          className="star-dot"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            ["--duration" as string]: s.duration,
            ["--delay" as string]: s.delay,
          }}
        />
      ))}

      {/* Floating firefly dots */}
      {fireflies.map((f, i) => (
        <div
          key={i}
          className="firefly-dot"
          style={{
            top: f.top,
            left: f.left,
            ["--duration" as string]: f.duration,
            ["--delay" as string]: f.delay,
          }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-10">

        {/* HERO */}
        <header className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 week-badge px-4 py-1.5 mb-6 text-sm font-semibold text-yellow-300 flex-wrap justify-center">
            <span>февраль – март 2026</span>
            <span>·</span>
            <span>средняя группа · 4–5 лет</span>
            <span>·</span>
            <span>5 недель</span>
          </div>

          <div className="relative inline-block mb-6">
            <img
              src={FIREFLY_IMAGE}
              alt="Светлячки"
              className="w-44 h-44 rounded-full object-cover mx-auto animate-glow-pulse"
              style={{ boxShadow: "0 0 60px rgba(253,224,71,0.4), 0 0 120px rgba(253,224,71,0.15)" }}
            />
            <span className="absolute -top-2 -right-2 text-3xl animate-float" style={{ animationDelay: "0.5s" }}>✨</span>
            <span className="absolute -bottom-1 -left-3 text-2xl animate-float" style={{ animationDelay: "1.2s" }}>🌟</span>
          </div>

          <p className="text-yellow-400/80 font-semibold tracking-widest uppercase text-sm mb-3">
            Паспорт проекта
          </p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4" style={{ fontFamily: "'Nunito', sans-serif" }}>
            <span className="shimmer-text">Путешествие в страну</span>
            <br />
            <span className="gradient-text-green">Светлячков</span>
          </h1>
          <p className="text-xl text-yellow-100/70 font-semibold max-w-xl mx-auto">
            Как люди дружили со светом
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {["Познавательно-исследовательский", "Групповой", "Педагоги · Дети · Родители"].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-bold bg-white/5 border border-white/10 text-white/70">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* ЦЕЛЬ */}
        <section className="section-card p-8 mb-10 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          <div className="flex items-start gap-4">
            <div className="text-5xl animate-float flex-shrink-0">🎯</div>
            <div>
              <h2 className="text-2xl font-black gradient-text mb-3">Цель проекта</h2>
              <p className="text-yellow-100/80 text-lg leading-relaxed">
                Формировать у детей представления об <strong className="text-yellow-300">истории освещения</strong>,
                развивать познавательный интерес, творческие способности и навыки{" "}
                <strong className="text-yellow-300">безопасного поведения</strong>.
              </p>
              <p className="text-yellow-100/60 mt-3 leading-relaxed">
                Показать детям, как люди в разное время добывали свет: от костра до современных светильников.
              </p>
            </div>
          </div>
        </section>

        {/* УЧАСТНИКИ */}
        <section className="grid grid-cols-3 gap-4 mb-10">
          {[
            { icon: "👩‍🏫", label: "Педагоги", desc: "Воспитатели группы" },
            { icon: "👦", label: "Дети", desc: "Средняя группа · 4–5 лет" },
            { icon: "👨‍👩‍👧", label: "Родители", desc: "Активные участники" },
          ].map((p) => (
            <div key={p.label} className="section-card p-5 text-center">
              <div className="text-4xl mb-2 animate-float">{p.icon}</div>
              <div className="font-black text-yellow-300 text-lg">{p.label}</div>
              <div className="text-white/50 text-sm mt-1">{p.desc}</div>
            </div>
          ))}
        </section>

        {/* ЗАДАЧИ */}
        <section className="mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-2xl font-black gradient-text mb-6 text-center">Задачи проекта</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {tasks.map((task) => (
              <div key={task.type} className={`rounded-2xl border p-5 ${task.color}`}>
                <div className="text-3xl mb-3">{task.icon}</div>
                <h3 className={`font-black text-lg mb-3 ${task.titleColor}`}>{task.type}</h3>
                <ul className="space-y-2">
                  {task.items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-white/70 leading-snug">
                      <span className="text-yellow-400 mt-0.5 flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ОБРАЗОВАТЕЛЬНЫЕ ОБЛАСТИ */}
        <section className="mb-10 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
          <h2 className="text-2xl font-black gradient-text mb-6 text-center">Образовательные области</h2>
          <div className="grid md:grid-cols-5 gap-3">
            {areas.map((area) => (
              <div key={area.title} className={`rounded-2xl border p-4 text-center ${area.color}`}>
                <div className="text-3xl mb-2">{area.icon}</div>
                <div className="font-black text-sm text-white mb-1">{area.title}</div>
                <div className="text-white/50 text-xs leading-snug">{area.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 5 НЕДЕЛЬ */}
        <section className="mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-2xl font-black gradient-text mb-8 text-center">Пять недель путешествия</h2>
          <div className="space-y-4">
            {weeks.map((week, idx) => (
              <div
                key={week.num}
                className={`rounded-2xl border p-5 bg-gradient-to-r ${week.color} ${week.border} relative overflow-hidden`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl font-black border border-white/20">
                      {week.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="week-badge px-3 py-0.5 text-xs font-black text-yellow-300">
                        Неделя {week.num}
                      </span>
                      <h3 className="font-black text-white text-base">{week.title}</h3>
                    </div>
                    <ul className="flex flex-wrap gap-2">
                      {week.items.map((item, i) => (
                        <li key={i} className="text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1 text-white/70">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ИТОГ */}
        <section className="section-card p-8 text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="text-5xl mb-4 animate-float">🎆</div>
          <h2 className="text-2xl font-black gradient-text mb-3">Праздник света и выставка</h2>
          <p className="text-yellow-100/70 max-w-lg mx-auto leading-relaxed">
            Финальное мероприятие: выставка{" "}
            <strong className="text-yellow-300">«Наши семейные светлячки»</strong>,
            включение всех самодельных светильников, чаепитие с электрическими свечами
            и подведение итогов по «Методу трёх вопросов».
          </p>
          <div className="flex justify-center gap-6 mt-6 text-sm text-white/40 flex-wrap">
            <span>Познавательно-исследовательский проект</span>
            <span>·</span>
            <span>Средняя группа</span>
            <span>·</span>
            <span>Февраль – март 2026</span>
          </div>
        </section>

        <div className="text-center mt-10 text-3xl">
          <span className="inline-block animate-float" style={{ animationDelay: "0s" }}>🌟</span>
          <span className="inline-block animate-float mx-3" style={{ animationDelay: "0.5s" }}>✨</span>
          <span className="inline-block animate-float" style={{ animationDelay: "1s" }}>🌟</span>
        </div>
      </div>
    </div>
  );
}
