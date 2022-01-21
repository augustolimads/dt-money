import { ModalFormProvider } from './ModalForm'

type Hookprops = {
  children: React.ReactNode
}

export const Hooks = ({ children }: Hookprops) => (
  <ModalFormProvider>{children}</ModalFormProvider>
)
