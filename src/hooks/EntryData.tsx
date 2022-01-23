import React, { createContext, useContext, useState, useEffect } from 'react'

type EntryDataProps = {
  children: React.ReactNode
}

type entryProps = {
  id: string
  name: string
  price: string
  category: string
  date: string
  isIncome: boolean
}

type displayDataProps = {
  incomes: number
  outcomes: number
  total: number
}

type hookProps = {
  entries: entryProps[]
  registerEntry: (newData: entryProps) => void
  displayData: displayDataProps
}

const EntryDataContext = createContext({})

export const EntryDataProvider = ({ children }: EntryDataProps) => {
  const [entries, setEntries] = useState<entryProps[]>([])
  const [displayData, setDisplayData] = useState<displayDataProps>({
    incomes: 0,
    outcomes: 0,
    total: 0
  })

  const registerEntry = (newData: entryProps) => {
    setEntries([...entries, newData])
  }

  const getEntries = (entryType: 'income' | 'outcome') => {
    const entryOptions = {
      income: true,
      outcome: false
    }
    const filteredEntries = entries.filter(
      (entry) => entry.isIncome === entryOptions[entryType]
    )
    const getListPrices = filteredEntries.map((entry) => Number(entry.price))

    const getTotalPrices =
      getListPrices.length > 0
        ? getListPrices.reduce((prev: number, current: number) => {
            return prev + current
          })
        : 0

    console.log({ getTotalPrices })

    return getTotalPrices
  }

  useEffect(() => {
    setDisplayData({
      incomes: getEntries('income'),
      outcomes: getEntries('outcome'),
      total: getEntries('income') - getEntries('outcome')
    })
  }, [entries])

  return (
    <EntryDataContext.Provider value={{ entries, registerEntry, displayData }}>
      {children}
    </EntryDataContext.Provider>
  )
}

export const useEntryData = () => {
  const context = useContext(EntryDataContext) as hookProps
  return context
}
