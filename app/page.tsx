'use client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import GeometricNetworkBackground from '@/components/userDid/GeometricNetworkBackground'
import { Github } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Home() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <GeometricNetworkBackground />
      <div className="w-auto">
        <Card className="w-[80vw] md:w-[30vw] bg-dark/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-3xl">Registro</CardTitle>
            <CardDescription>
              Entre para a melhor comunidade de devs do Brasil
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" variant={'outline'}>
              <Github />
              <p>Entre com GitHub</p>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
