// import { create } from 'zustand'

// import { primary } from '@/config/color'

// export enum SizeType {
//   small = 'small',
//   middle = 'middle',
//   large = 'large',
// }

// type Mode = 'light' | 'dark' | 'default'

// type ThemeStoreType = {
//   mode: Mode
//   setMode: (mode: Mode) => void
//   colorPrimary: string
//   changeColor: (color: string) => void
//   size: SizeType
//   changeSize: (size: SizeType) => void
// }
// const defaultColor = localStorage.getItem('colorPrimary') || primary
// // const defaultColor = localStorage.getItem('colorPrimary') || '#1677ff'
// export const useTheme = create<ThemeStoreType>((set) => ({
//   mode: 'default',
//   setMode(mode) {
//     set((state) => ({
//       ...state,
//       mode,
//     }))
//   },
//   colorPrimary: defaultColor,
//   changeColor(color) {
//     set((state) => ({
//       ...state,
//       colorPrimary: color,
//     }))
//   },
//   size: SizeType.middle,
//   changeSize(size) {
//     set((state) => ({
//       ...state,
//       size: size,
//     }))
//   },
// }))
