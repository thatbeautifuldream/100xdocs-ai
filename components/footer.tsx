import React from 'react'

import { cn } from '@/lib/utils'
import { ExternalLink } from '@/components/external-link'

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'px-2 text-center text-xs leading-normal text-muted-foreground',
        className
      )}
      {...props}
    >
      Use this chat bot to gather insights from and beyond {` `}
      <ExternalLink href="https://100xdocs.com">100xdocs</ExternalLink>
    </p>
  )
}
