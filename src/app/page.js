import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1 className='underline text-red-400'>Home Page</h1>
    </div>
  )
}
