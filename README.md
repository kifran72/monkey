# Monkeys

Welcome to your new Monkeys project and to the internet computer development community. By default, creating a new project adds this README and some template files to your project directory. You can edit these template files to customize your project and to include your own code to speed up the development cycle.

To get started, you might want to explore the project directory structure and the default configuration file. Working with this project in your development environment will not affect any production deployment or identity tokens.

first run this:

```bash
sudo apt install nodejs npm curl && DFX_VERSION=0.7.0-beta.3 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
```

If you want to start working on your project right away, you might want to try the following commands:

```bash
git clone https://github.com/kifran72/monkey && cd monkey
npm i && dfx start --background
dfx deploy
```

Front: http://127.0.0.1:8000/authorize?canisterId=yourCanisterID
