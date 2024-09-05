import { SignUp } from "@clerk/nextjs"

import { LoadingDots } from "@/app/components/loading-dots"

export default function SignUpPage() {
  return (
    <div className="relative flex h-dvh w-dvw items-center justify-center">
      <div className="absolute inset-0 flex h-dvh w-dvw items-center justify-center">
        <LoadingDots />
      </div>
      <SignUp />
    </div>
  )
}