import * as ReduxCollapsible from '@radix-ui/react-collapsible';

import { cn } from '@/shared/lib';

const CollapsibleRoot = ({ className, ...props }: ReduxCollapsible.CollapsibleProps) => (
  <ReduxCollapsible.Collapsible
    className={className}
    defaultOpen
    {...props}
  />
);

const CollapsibleContent = ({ className, ...props }: ReduxCollapsible.CollapsibleContentProps) => (
  <ReduxCollapsible.CollapsibleContent
    className={cn(
      `data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up
      overflow-hidden`,
      className,
    )}
    {...props}
  />
);

const CollapsibleTrigger = ({ className, ...props }: ReduxCollapsible.CollapsibleTriggerProps) => (
  <ReduxCollapsible.CollapsibleTrigger
    className={cn('w-full text-left font-medium', className)}
    {...props}
  />
);

export const Collapsible = Object.assign(CollapsibleRoot, {
  Content: CollapsibleContent,
  Trigger: CollapsibleTrigger,
});
