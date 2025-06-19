import { Button } from '@/components/ui/button'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import React from 'react'

function page() {
  return (
    <div  className="flex justify-end items-center p-4 gap-4 h-16">
        <SignedOut>
          <SignInButton mode="modal">
            <Button >Sign In</Button>
          </SignInButton>

          <SignUpButton mode="modal">
            <Button variant={"secondary"}>Sign Up</Button>
          </SignUpButton>
        </SignedOut>
                  
          <SignedIn>
            <UserButton />
          </SignedIn>
      
    </div>
  )
}

export default page

