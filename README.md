# fastPanel Core.
The main core of the "fastPanel" system.

---

## Env

```
  # Defines the current environment. 
  # Can be: "develop", "staging", "production".
  NODE_ENV=develop

  # Defines a folder structure of the application.
  APP_PATH=App
  CONFIG_PATH=App/Config
  LOGGER_PATH=App/Logs
```

---

## Commands

### setup

Configure components.

```
  Options:
    --help       Output usage information.
    -e, --env    Save as current environment settings.
    -f, --force  Forced reconfiguration of components.
```

``` bash
  node cli.js setup
```

---

## Events

### app:watchdog

The event is triggered every second. Be extremely careful USE OF THE EVENTS.

``` typescript
  this.events.on('app:watchdog', (app: Application) => {});
```

### cli:getCommands

The event is triggered when the application is ready to register console commands.

``` typescript
  this.events.once('cli:getCommands', (cli: Caporal) => {});
```

---

## License
The MIT License (MIT)

---

## Copyright
(c) 2014 - 2019 Desionlab
