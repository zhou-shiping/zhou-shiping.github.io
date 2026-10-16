export interface LocaleMessages {
  common: {
    all: string;
    copyToClipboard: string;
  };
  navigation: {
    openMainMenu: string;
  };
  theme: {
    system: string;
    light: string;
    dark: string;
    currentTheme: string;
    cycleTheme: string;
  };
  profile: {
    email: string;
    location: string;
    workAddress: string;
    click: string;
    googleMap: string;
    send: string;
    sendEmail: string;
    researchInterests: string;
    like: string;
    liked: string;
    thanks: string;
  };
  home: {
    about: string;
    news: string;
    selectedPublications: string;
    viewAll: string;
    olderNews: string;
    recentNews: string;
    noNews: string;
    upcoming: string;
    newsCategories: {
      publication: string;
      talk: string;
      student: string;
      group: string;
      funding: string;
      award: string;
      general: string;
    };
  };
  pdf: {
    open: string;
    download: string;
    hint: string;
  };
  publications: {
    searchPlaceholder: string;
    filters: string;
    year: string;
    type: string;
    noResults: string;
    abstract: string;
    bibtex: string;
    code: string;
    arxivPreprint: string;
    accepted: string;
    journalCount: (count: number) => string;
    arxivCount: (count: number) => string;
    showingCount: (visible: number, total: number) => string;
  };
  footer: {
    lastUpdated: string;
    builtWithPrism: string;
  };
}

const en: LocaleMessages = {
  common: {
    all: 'All',
    copyToClipboard: 'Copy to clipboard',
  },
  navigation: {
    openMainMenu: 'Open main menu',
  },
  theme: {
    system: 'System',
    light: 'Light',
    dark: 'Dark',
    currentTheme: 'Current theme',
    cycleTheme: 'Click to cycle theme',
  },
  profile: {
    email: 'Email',
    location: 'Location',
    workAddress: 'Work Address',
    click: 'Click',
    googleMap: 'Google Map',
    send: 'Send',
    sendEmail: 'Send Email',
    researchInterests: 'Research Interests',
    like: 'Like',
    liked: 'Liked',
    thanks: 'Thanks!',
  },
  home: {
    about: 'About Me',
    news: 'News',
    selectedPublications: 'Selected Publications',
    viewAll: 'View All',
    olderNews: 'Show older news',
    recentNews: 'Show recent news only',
    noNews: 'Updates coming soon.',
    upcoming: 'Upcoming:',
    newsCategories: {
      publication: 'Publication',
      talk: 'Talk',
      student: 'Student news',
      group: 'Group news',
      funding: 'Funding',
      award: 'Award',
      general: 'News',
    },
  },
  pdf: {
    open: 'Open PDF',
    download: 'Download PDF',
    hint: 'If the preview is unavailable or difficult to read on your device, open or download the PDF above.',
  },
  publications: {
    searchPlaceholder: 'Search publications...',
    filters: 'Filters',
    year: 'Year',
    type: 'Type',
    noResults: 'No publications found matching your criteria.',
    abstract: 'Abstract',
    bibtex: 'BibTeX',
    code: 'Code',
    arxivPreprint: 'arXiv preprint',
    accepted: 'Accepted',
    journalCount: (count) => `${count} journal ${count === 1 ? 'article' : 'articles'}`,
    arxivCount: (count) => `${count} arXiv ${count === 1 ? 'preprint' : 'preprints'}`,
    showingCount: (visible, total) => `Showing ${visible} of ${total} ${total === 1 ? 'paper' : 'papers'}.`,
  },
  footer: {
    lastUpdated: 'Last updated',
    builtWithPrism: 'Built with PRISM',
  },
};

const zh: LocaleMessages = {
  common: {
    all: '全部',
    copyToClipboard: '复制到剪贴板',
  },
  navigation: {
    openMainMenu: '打开主菜单',
  },
  theme: {
    system: '跟随系统',
    light: '浅色',
    dark: '深色',
    currentTheme: '当前主题',
    cycleTheme: '点击切换主题',
  },
  profile: {
    email: '邮箱',
    location: '地址',
    workAddress: '办公地址',
    click: '点击',
    googleMap: '谷歌地图',
    send: '发送',
    sendEmail: '发送邮件',
    researchInterests: '研究兴趣',
    like: '点赞',
    liked: '已点赞',
    thanks: '感谢支持！',
  },
  home: {
    about: '关于我',
    news: '动态',
    selectedPublications: '精选论文',
    viewAll: '查看全部',
    olderNews: '查看往期动态',
    recentNews: '仅显示近期动态',
    noNews: '动态即将更新。',
    upcoming: '即将举行：',
    newsCategories: {
      publication: '论文',
      talk: '报告',
      student: '学生动态',
      group: '课题组动态',
      funding: '科研资助',
      award: '奖项',
      general: '动态',
    },
  },
  pdf: {
    open: '打开 PDF',
    download: '下载 PDF',
    hint: '如果预览无法显示或不便阅读，请使用上方链接打开或下载 PDF。',
  },
  publications: {
    searchPlaceholder: '搜索论文...',
    filters: '筛选',
    year: '年份',
    type: '类型',
    noResults: '没有找到符合条件的论文。',
    abstract: '摘要',
    bibtex: 'BibTeX',
    code: '代码',
    arxivPreprint: 'arXiv 预印本',
    accepted: '已接收',
    journalCount: (count) => `${count} 篇期刊论文`,
    arxivCount: (count) => `${count} 篇 arXiv 预印本`,
    showingCount: (visible, total) => `显示 ${visible} 篇，共 ${total} 篇论文。`,
  },
  footer: {
    lastUpdated: '最近更新',
    builtWithPrism: '由 PRISM 构建',
  },
};

export const messages: Record<string, LocaleMessages> = {
  en,
  zh,
};

export function getMessages(locale: string): LocaleMessages {
  return messages[locale] || en;
}
