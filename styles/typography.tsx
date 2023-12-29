export function H1({text}) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {text}
    </h1>
  )
}

export function H3({text}) {
  return (
  <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {text}
        </h3>

  )
}

export function MUTE({text}) {
  return (
    <p className="text-sm text-muted-foreground">{text}</p>
  )
}

export function P({text}) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">
      {text}
    </p>
  )
}
