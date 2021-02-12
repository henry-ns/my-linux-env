module.exports = {
  config: {
    updateChannel: 'stable',
    
    fontSize: 14,
    fontFamily: '"Fira Code", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
    fontWeight: 'normal',
    fontWeightBold: 'bold',
    
    lineHeight: 1.05,
    letterSpacing: 0,

    cursorColor: 'rgba(248,28,229,0.8)',
    cursorAccentColor: '#000',
    cursorShape: 'BLOCK',
    cursorBlink: false,

    foregroundColor: '#fff',
    backgroundColor: '#000',
    selectionColor: 'rgba(248,28,229,0.3)',
    borderColor: '#333',

    css: '',
    termCSS: '',
    padding: '12px 14px',

    showHamburgerMenu: 'true',
    showWindowControls: 'true',

    colors: {
      black: '#000000',
      red: '#C51E14',
      green: '#1DC121',
      yellow: '#C7C329',
      blue: '#0A2FC4',
      magenta: '#C839C5',
      cyan: '#20C5C6',
      white: '#C7C7C7',
      lightBlack: '#686868',
      lightRed: '#FD6F6B',
      lightGreen: '#67F86F',
      lightYellow: '#FFFA72',
      lightBlue: '#6A76FB',
      lightMagenta: '#FD7CFC',
      lightCyan: '#68FDFE',
      lightWhite: '#FFFFFF',
    },

    shell: '',
    shellArgs: ['--login'],
    
    env: {},
    bell: 'SOUND',

    copyOnSelect: false,
    defaultSSHApp: true,

    quickEdit: false,
    macOptionSelectionMode: 'vertical',
    webGLRenderer: true,

    // for advanced config flags please refer to https://hyper.is/#cfg
  },

  plugins: [
  // "hyper-nord"
  "hyperterm-palenight",
  "hyper-bloody"
  ],

  localPlugins: [],

  keymaps: {
    // Example
    // 'window:devtools': 'cmd+alt+o',
  },
};