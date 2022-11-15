import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  // transformerDirectives,
  // transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
    ['common-bg', 'bg-stone-100 text-stone-900'],
  ],
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        body: [
          {
            name: 'Raleway',
            weights: ['400', '500', '600', '700', '800'],
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
        display: [
          {
            name: 'Poppins',
            weights: ['400', '500', '600', '700', '800'],
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
      },
    }),
  ],
  theme: {
    colors: {
      primary: {
        l: '#000158',
        d: '#00014D',
      },
      secondary: '#E9D190',
    },
  },
  // transformers: [
  //   transformerDirectives(),
  //   transformerVariantGroup(),
  // ],
})
