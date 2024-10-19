import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { Logo } from '@/components/Logo'

export function Header() {
  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 text-2xl font-bold text-blue-600 lg:mt-0 lg:grow lg:basis-0">
          PROTOTYPAL
        </div>

        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button
            target="_blank"
            href="https://www.linkedin.com/in/farzad-qasim/"
          >
            Get in touch
          </Button>
        </div>
      </Container>
    </header>
  )
}
