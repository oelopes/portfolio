import { cn } from "@lib/utils";
import { formatDistanceToNow } from 'date-fns';
import { Button } from "./button";
import { CardStack } from "./card-stack";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./hover-card";

// Small utility to highlight the content of specific section of a testimonial content
const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    content: (
      <p>
        Eu tenho {formatDistanceToNow(new Date('2/3/1993')).split(' ')[1]} anos, sou casado com a{' '}
        <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link" className="p-0 text-slate-50 text-xl">@aguiar_analu.</Button>
            </HoverCardTrigger>
            <HoverCardContent className="bg-zinc-900 broder-zinc-700 text-slate-50">
              The React Framework – created and maintained by @vercel.
            </HoverCardContent>
          </HoverCard>
      </p>
    ),
  },
  {
    id: 1,
    content: (
      <p>
        Temos dois cachorros{' '}
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link" className="p-0 text-slate-50 text-xl">@2piratinhas</Button>
            </HoverCardTrigger>
            <HoverCardContent className="bg-zinc-900 broder-zinc-700 text-slate-50">
              The React Framework – created and maintained by @vercel.
            </HoverCardContent>
          </HoverCard>
          {' '}(Luffy e Jack)
      </p>
    ),
  },
];


export const CardStackWrapper = () => <CardStack items={CARDS} />

