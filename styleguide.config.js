const path = require('path')
module.exports = {
    components: 'src/UI/*/*.{js,jsx,ts,tsx}',
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'src/UI/ThemeProvider.tsx')
    }
}
