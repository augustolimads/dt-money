type HeaderProps = {
  children: React.ReactNode
}

export const HeaderComponent = ({ children }: HeaderProps) => {
  return <header className="bg-purple-900 h-64">{children}</header>
}
