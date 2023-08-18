'use client'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { ScrollArea } from './ui/scroll-area'
import { useChat } from 'ai/react'

export interface ChatProps { }

export function Chat(props: ChatProps) {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  });
  return (
    <Card className='w-[440px]'>
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
      </CardHeader>
      <CardContent >
        <ScrollArea className='h-[600px] w-full pr-4 '>
          {messages.map(message => {
            return (
              <div key={message.id} className='flex gap-3 text-slate-600 text-sm mb-4'>
                {message.role === 'user' && (
                  <Avatar>
                    <AvatarFallback>VF</AvatarFallback>
                    <AvatarImage src='https://github.com/valkineles.png' />
                  </Avatar>
                )}
                {message.role === 'assistant' && (
                  <Avatar>
                    <AvatarFallback>RS</AvatarFallback>
                    <AvatarImage src='https://github.com/openai.png' />
                  </Avatar>
                )}
                <p className='leading-relaxed'>
                  <span className='block font-bold text-slate-700'>
                    {message.role === 'user' ? 'Usuário' : 'AI'}:
                  </span>
                  {message.content}
                </p>
              </div>
            )
          })}
        </ScrollArea>
      </CardContent>
      <form onSubmit={handleSubmit}>
        <CardFooter className='space-x-2'>
          <Input placeholder='qual sua duvida?'
            value={input}
            onChange={handleInputChange} />
          <Button type='submit'> Send </Button>
        </CardFooter>
      </form>
    </Card >
  );
}
