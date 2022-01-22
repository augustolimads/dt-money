import { useEffect, useState } from 'react'
import { DisplayComponent } from 'src/components/DisplayComponent'
import { InputTableComponent } from 'src/components/InputTableComponent'
import { LayoutComponent } from 'src/components/LayoutComponent'
import { useEntryData } from 'src/hooks/EntryData'

export const HomeTemplate = () => {
  const { entries, displayData } = useEntryData()

  return (
    <LayoutComponent>
      <div className="bg-slate-100 relative flex-1">
        <div className="grid gap-8 grid-cols-3 -mt-16 absolute w-full">
          <DisplayComponent type="Entradas" value={displayData.incomes} />
          <DisplayComponent type="Saídas" value={displayData.outcomes} />
          <DisplayComponent type="Total" hasGreenBg value={displayData.total} />
        </div>
        <div className="h-[10vh]"></div>
        <div className="overflow-y-scroll h-[70vh]">
          <InputTableComponent data={entries} />
        </div>
      </div>
    </LayoutComponent>
  )
}
