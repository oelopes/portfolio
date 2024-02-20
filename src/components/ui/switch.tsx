import * as SwitchPrimitives from "@radix-ui/react-switch"
import * as React from "react"
import { useEffect, useState } from "react"

import { cn } from "@lib/utils"

const onChangeLanguage = (checked: boolean) => {
  if(!checked) {
    return window.location.href="/br"
  }

  return window.location.href= "/en"
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    setIsChecked(() => window.location.pathname === '/br' ? false : true)
  }, [])

  return (
    <SwitchPrimitives.Root
      className={cn(
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 bg-primary",
        className
      )}
      {...props}
      ref={ref}
      checked={isChecked}
      onCheckedChange={checked => {
        onChangeLanguage(checked)
        setIsChecked(checked)
      }}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-br bg-cover data-[state=checked]:bg-en shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitives.Root>
  )
})
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
