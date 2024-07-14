import { create } from "zustand"
import { devtools } from "zustand/middleware"

interface SidebarState {
  open: boolean
  setOpenClose: () => void
}

const useSideBar = create<SidebarState>()(
  devtools((set) => ({
    open: false,
    setOpenClose: () => set((state) => ({ open: !state.open })),
  }))
)

export default useSideBar
