import { DisplayComponent } from 'src/components/DisplayComponent'
import { LayoutComponent } from 'src/components/LayoutComponent'

export const HomeTemplate = () => {
  return (
    <LayoutComponent>
      <main className="border-2">
        <div className="grid gap-8 grid-cols-3 -mt-16">
          <DisplayComponent type="Entradas" value={1} />
          <DisplayComponent type="Saídas" value={1} />
          <DisplayComponent type="Total" hasGreenBg value={1} />
        </div>
      </main>
    </LayoutComponent>
  )
}
