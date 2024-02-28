import { useState } from "react"

export default function BusManagementPage() {
  const [tabs, setTabs] = useState([
    { name: "Bus List", isActive: true },
    { name: "Add Bus", isActive: false }
  ])
  return (
    <div className="w-full">
      <section className="flex w-full">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`flex-1 ${
              tab.isActive
                ? "border-b-2 border-blue-500"
                : "border-b-2 border-transparent"
            }`}
          >
            <button
              className="w-full"
              onClick={() => {
                const newTabs = tabs.map((t, i) => {
                  if (index === i) {
                    return { ...t, isActive: true }
                  }
                  return { ...t, isActive: false }
                })
                setTabs(newTabs)
              }}
            >
              {tab.name}
            </button>
          </div>
        ))}
      </section>
      <div>{tabs[0].isActive ? <div>Bus List</div> : <div>Find Bus</div>}</div>
    </div>
  )
}
