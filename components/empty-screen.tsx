import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'What are middlewares in Express?',
    message: `What are "middlewares" in Express?`
  },
  {
    heading: 'What is reconciliation in React?',
    message: 'What is "reconciliation" in React?'
  },
  {
    heading: 'What is docker compose?',
    message: `What is "docker compose"?`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to 100xdocs AI Chatbot!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          This chat bot is a part of 100xdocs, use it to gather insights from
          and beyond {` `}
          <ExternalLink href="https://100xdocs.com">100xdocs</ExternalLink> .
        </p>
        <p className="leading-normal text-muted-foreground">
          You can start a conversation here or try the following examples:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
