console.log(process.env.PORT ?? 3000)

const { SHELL, HOMEBREW_PREFIX } = process.env;
// console.log(SHELL)
// console.log(HOMEBREW_PREFIX)

// console.table({ SHELL, HOMEBREW_PREFIX})

const characters = ['Flash', 'Superman', 'Batman']

const [ , , batman] = characters;

// console.log(batman)