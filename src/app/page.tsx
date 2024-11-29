"use client";
import { useRouter } from 'next/navigation';
import { Button } from '@/shared';
export default function RootPage() {
  const router = useRouter();

  return (
    <div>
      <Button label='회원가입' variant='primary' onClick={() => {router.push('/signup')}}></Button>   
    </div>
  )
}