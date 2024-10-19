import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span className="sr-only">Prototypal - </span>Innovative Software
            Solutions for a Digital World.
          </h1>

          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              At Prototypal Ltd, we specialize in providing cutting-edge web and
              software development services that empower businesses in the UK
              and Ireland to innovate and scale. With over 20 years of
              experience, our solutions cater to modern digital needs, from
              consultancy to full-scale application development.
            </p>
            <p>
              Whether you're a startup looking to bring a new product to life or
              an established company aiming to optimize your digital presence,
              we offer a blend of real-time technologies, AI-powered tools, and
              user-focused design to help you achieve your goals. Let’s
              transform your ideas into reality.
            </p>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            Get your tickets
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Experience', '20+ years'],
              ['Clients', 'BBC, Sony, Unilever etc'],
              ['Location', 'UK / Thailand'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
