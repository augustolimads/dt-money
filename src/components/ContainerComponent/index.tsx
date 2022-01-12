type ContainerProps = {
  children: React.ReactNode
}

export const ContainerComponent = ({ children }: ContainerProps) => {
  return <div className="container mx-auto">{children}</div>
}
