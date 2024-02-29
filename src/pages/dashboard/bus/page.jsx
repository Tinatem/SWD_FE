import { useState } from "react"

export default function BusManagementPage() {
  const [tabs, setTabs] = useState([
    { name: "Danh sách", isActive: true, icon: <>
1
    </> },
    { name: "Tìm tuyến xe", isActive: <>
    2
    </> }
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
