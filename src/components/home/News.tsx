'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Award, Bell, FileText, GraduationCap, Handshake, Presentation, UsersRound } from 'lucide-react';
import { useMessages } from '@/lib/i18n/useMessages';

const newsIcons = {
    publication: FileText,
    talk: Presentation,
    student: GraduationCap,
    group: UsersRound,
    funding: Handshake,
    award: Award,
    general: Bell,
};

export interface NewsItem {
    date: string;
    content: string;
    category?: keyof typeof newsIcons;
    upcoming?: boolean;
}

interface NewsProps {
    items: NewsItem[];
    title?: string;
    limit?: number;
}

export default function News({ items, title, limit = 5 }: NewsProps) {
    const messages = useMessages();
    const [expanded, setExpanded] = useState(false);
    const resolvedTitle = title || messages.home.news;
    const sortedItems = [...items].sort((a, b) => {
        if (Boolean(a.upcoming) !== Boolean(b.upcoming)) return a.upcoming ? -1 : 1;
        return a.upcoming ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date);
    });
    const visibleItems = expanded ? sortedItems : sortedItems.slice(0, limit);

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
        >
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">{resolvedTitle}</h2>
            <ol className="divide-y divide-neutral-200">
                {visibleItems.map((item, index) => {
                    const category = item.category || 'general';
                    const Icon = newsIcons[category];
                    const content = item.upcoming ? `**${messages.home.upcoming}** ${item.content}` : item.content;

                    return (
                        <li key={`${item.date}-${index}`} className="flex items-start gap-3 py-4 first:pt-0">
                            <span
                                role="img"
                                aria-label={messages.home.newsCategories[category]}
                                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] bg-accent/10"
                                style={{ color: 'color-mix(in srgb, var(--accent) 70%, var(--foreground))' }}
                            >
                                <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
                            </span>
                            <div className="min-w-0 flex-1 text-sm text-neutral-700 leading-relaxed break-words">
                                <ReactMarkdown components={{
                                    p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                                    a: ({ ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" className="text-primary underline decoration-accent underline-offset-4 hover:text-accent" />,
                                }}>
                                    {content}
                                </ReactMarkdown>
                            </div>
                        </li>
                    );
                })}
            </ol>
            {items.length === 0 && <p className="text-sm text-neutral-600">{messages.home.noNews}</p>}
            {items.length > limit && (
                <button type="button" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}
                    className="mt-4 text-sm font-medium text-primary underline decoration-accent underline-offset-4 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent">
                    {expanded ? messages.home.recentNews : `${messages.home.olderNews} (${items.length - limit})`}
                </button>
            )}
        </motion.section>
    );
}
