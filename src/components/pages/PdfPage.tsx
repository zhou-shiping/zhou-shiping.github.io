'use client';

import { ArrowDownTrayIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { PdfPageConfig } from '@/types/page';
import { useMessages } from '@/lib/i18n/useMessages';

export default function PdfPage({ config }: { config: PdfPageConfig }) {
    const messages = useMessages();

    return (
        <section aria-labelledby="cv-title">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-8">
                <div>
                    <h1 id="cv-title" className="text-4xl font-serif font-bold text-primary mb-3">{config.title}</h1>
                    {config.description && (
                        <p className="text-neutral-600 max-w-2xl leading-relaxed">{config.description}</p>
                    )}
                </div>
                <div className="flex flex-wrap gap-3 shrink-0">
                    <a href={config.source} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-medium text-primary hover:bg-accent/10 focus-visible:outline-2 focus-visible:outline-accent">
                        <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
                        {messages.pdf.open}
                    </a>
                    <a href={config.source} download
                        className="inline-flex items-center gap-2 rounded-lg bg-accent/15 px-4 py-2.5 text-sm font-medium text-primary hover:bg-accent/25 focus-visible:outline-2 focus-visible:outline-accent">
                        <ArrowDownTrayIcon className="h-4 w-4" aria-hidden="true" />
                        {messages.pdf.download}
                    </a>
                </div>
            </div>
            <p className="mb-4 text-sm text-neutral-600">{messages.pdf.hint}</p>
            <iframe
                src={`${config.source}#view=FitH`}
                title={`${config.title} — PDF`}
                className="w-full h-[75vh] min-h-[480px] rounded-xl border border-neutral-200 bg-white"
            />
        </section>
    );
}
