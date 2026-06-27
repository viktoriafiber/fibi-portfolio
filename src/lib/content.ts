export const siteContent = {
  hero: {
    sectionNumber: "00",
    sectionLabel: "Главная",
    title: "FIBI",
    subtitle: "AI CONTENT CREATOR",
    description:
      "Превращаю идеи в визуальные миры с помощью AI.\nОт первых набросков и концепций до готовых изображений, анимации и рекламных роликов.",
    tagline: "превращаю идеи\nв визуальные миры",
    cta: "СВЯЗАТЬСЯ",
  },
  selectedWork: {
    sectionNumber: "01",
    sectionLabel: "ИЗБРАННЫЕ РАБОТЫ",
    windowTitle: "01_SELECTED_WORK.EXE",
    description:
      "Несколько проектов, которые лучше всего показывают мой подход к работе.",
    linkLabel: "Открыть проект →",
    allProjects: "ВСЕ ПРОЕКТЫ",
  },
  about: {
    sectionNumber: "02",
    windowTitle: "02_ОБО_МНЕ.TXT",
    updatedDate: "27.06.2026",    text: `привет! я - Вика, AI Content Creator, а также создатель и генералист креативити эйдиас! или попроще, генератор идей и ai контента <3

работаю с брендами, артистами, агентствами и коммерческими проектами, включая проекты под NDA.

создаю не просто красивые кадры, а законченные визуальные истории: от идеи и сториборда до готовых изображений, анимации и рекламных роликов <3

до работы с генеративным AI много лет занималась IT-копирайтингом и журналистикой: именно поэтому для меня история всегда важнее эффекта, а композиция важнее случайной "красивой картинки"!!

работаю как самостоятельно, так и внутри команд, подключаясь на любом этапе производства, активно интегрирую ai в реальный съемочный процесс :3

основной стек:

• Midjourney

• Kling AI

• Higgsfield (Soul 2.0, Soul Cinema)

• Veo

• Runway

• CapCut

• Lightroom

• Photoshop (по необходимости, но проще работать с ретушерами)

буду рада подключиться к вашему проекту!

если у вас есть готовое тз и четкий бриф - окажу помощь в качестве генералиста, а если идей нет совсем - подключусь как генератор и реализатор креативных идей!`,
  },
  archive: {
    sectionNumber: "03",
    windowTitle: "03_ARCHIVE",
    description: "Рабочие материалы.",
    folders: [
      { name: "ИДЕИ", label: "01_идеи" },
      { name: "РЕФЕРЕНСЫ", label: "02_референсы" },
      { name: "ПРОЦЕСС", label: "03_процесс" },
      { name: "ЭКСПЕРИМЕНТЫ", label: "04_эксперименты" },
      { name: "ЗАКАДР", label: "05_закадр" },
      { name: "WIP", label: "06_wip" },
    ],
  },
 contacts: {
  sectionNumber: "04",
  windowTitle: "04_CONTACTS.EXE",
  text: "Если вам нужен AI-визуал для рекламы, бренда, контента или творческого проекта — напишите мне. Отвечаю лично.",
  cta: "НАПИСАТЬ В TELEGRAM",
  links: {
    telegram: "https://t.me/vikafibi",
    instagram: "https://instagram.com/fibiviki",
    email: "mailto:viktoriafiber@gmail.com",
    contra: "https://contra.com/viktoriya_dolgosheeva_27cotcd4/work?r=viktoriya_dolgosheeva_27cotcd4",
    portfolio: "https://t.me/vifiportfolio",
  },
},
   
  footer: {
    copyright: "© 2026",
    name: "VIKTORIIA FIBER",
    role: "AI CONTENT CREATOR",
  },
  sidebar: [
    { label: "Мой компьютер", icon: "computer", href: "#hero" },
    { label: "Проекты", icon: "folder", href: "#selected-work" },
    { label: "Архив", icon: "folder", href: "#archive" },
    { label: "Заметки.txt", icon: "notes", href: "#about" },
    { label: "Корзина", icon: "trash", href: "#contacts" },
  ],
  social: [
    {
      label: "Telegram",
      icon: "telegram",
      href: "https://t.me/vikafibi",
    },
    {
      label: "Instagram",
      icon: "instagram",
      href: "https://instagram.com/fibiviki",
    },
  ],
} as const;

export const projects = [
  {
    id: "01",
    title: "PROJECT_01.MP4",
    duration: "00:00:08",
    media: "https://res.cloudinary.com/dz7iinpgm/video/upload/v1782601533/0628_atrrbk.mp4",
    type: "video" as const,
  },
  {
    id: "02",
    title: "PROJECT_02.MP4",
    duration: "00:00:12",
    media: "https://res.cloudinary.com/dz7iinpgm/video/upload/v1782601550/0628_1_hxn5eb.mp4",
    type: "video" as const,
  },
  {
    id: "03",
    title: "PROJECT_03.MP4",
    duration: "00:00:15",
    media: "https://res.cloudinary.com/dz7iinpgm/video/upload/v1782601257/project_03_w5vt8s.mp4",
    type: "video" as const,
  },
  {
    id: "04",
    title: "PROJECT_04.MP4",
    duration: "00:00:10",
    media: "https://res.cloudinary.com/dz7iinpgm/video/upload/v1782601634/0628_3_qfkwxe.mp4",
    type: "video" as const,
  },
  {
    id: "05",
    title: "PROJECT_05.MP4",
    duration: "00:00:10",
    media: "https://res.cloudinary.com/dz7iinpgm/video/upload/v1782601697/0628_4_m7lbcr.mp4",
    type: "video" as const,
  },
  {
    id: "06",
    title: "PROJECT_06.MP4",
    duration: "00:00:10",
    media: "https://res.cloudinary.com/dz7iinpgm/video/upload/v1782601862/0628_5_vscjwp.mp4",
    type: "video" as const,
  },
  {
    id: "07",
    title: "PROJECT_07.MP4",
    duration: "00:00:10",
    media: "https://res.cloudinary.com/dz7iinpgm/video/upload/v1782601859/0628_6_efndta.mp4",
    type: "video" as const,
  },
  {
    id: "08",
    title: "PROJECT_08.MP4",
    duration: "00:00:10",
    media: "https://res.cloudinary.com/dz7iinpgm/video/upload/v1782601888/0628_7_rl4yn6.mp4",
    type: "video" as const,
  },
  {
    id: "09",
    title: "PROJECT_09.MP4",
    duration: "00:00:10",
    media: "https://res.cloudinary.com/dz7iinpgm/video/upload/v1782601910/0628_8_nenekj.mp4",
    type: "video" as const,
  },
  {
    id: "10",
    title: "PROJECT_10.MP4",
    duration: "00:00:10",
    media: "https://res.cloudinary.com/dz7iinpgm/video/upload/v1782602049/0628_9_xmbhmu.mp4",
    type: "video" as const,
  },
  {
    id: "11",
    title: "PROJECT_11.MP4",
    duration: "00:00:10",
    media: "https://res.cloudinary.com/dz7iinpgm/video/upload/v1782601256/project_11_ulg2dx.mp4",
    type: "video" as const,
  },
  {
    id: "12",
    title: "PROJECT_12.MP4",
    duration: "00:00:10",
    media: "https://res.cloudinary.com/dz7iinpgm/video/upload/v1782601257/project_12_mzpd5s.mp4",
    type: "video" as const,
  },
  {
    id: "13",
    title: "PROJECT_13.MP4",
    duration: "00:00:10",
    media: "https://res.cloudinary.com/dz7iinpgm/video/upload/v1782602092/0628_10_w3uiiu.mp4",
    type: "video" as const,
  },
] as const;