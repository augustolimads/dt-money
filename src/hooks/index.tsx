import { EntryDataProvider } from './EntryData'
import { ModalFormProvider } from './ModalForm'

type Hookprops = {
  children: React.ReactNode
}

export const Hooks = ({ children }: Hookprops) => (
  <EntryDataProvider>
    <ModalFormProvider>{children}</ModalFormProvider>
  </EntryDataProvider>
)
