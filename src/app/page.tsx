import { NEXT_PUBLIC_API_URL } from '@/constants'
import { HomeView } from '@/views'

export default function Home() {
  if (!NEXT_PUBLIC_API_URL) return null
  return <HomeView />
}
