import { Analytics } from '@vercel/analytics/next'
import './styles.css'

export const metadata = {
  description:
    'Explore my professional journey through an interactive terminal interface. Built with Next.js, Payload CMS, and shadcn.',
  title: 'Anis Boulila | Terminal Portfolio',
  applicationName: 'terminal portfolio',
  keywords: [
    'Anis',
    'Full-Stack Developer',
    'Next.js',
    'headless cms',
    'Payload CMS',
    'Terminal Portfolio',
    'Software Engineer Tunisia',
  ],
  authors: [{ name: 'Anis' }],
  creator: 'Anis Boulila',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
