language = "html"
run = ""

[languages]

[languages.javascript]
pattern = "**/{*.js,*.jsx,*.ts,*.tsx,*.mjs,*.cjs}"

[languages.javascript.languageServer]
start = "typescript-language-server --stdio"

[languages.html]
pattern = "**/*.html"

[languages.html.languageServer]
start = "vscode-html-language-server --stdio"

[languages.html.languageServer.initializationOptions]
provideFormatter = true

[languages.css]
pattern = "**/{*.less,*.scss,*.css}"

[languages.css.languageServer]
start = "vscode-css-language-server --stdio"
