# fastPanel Core.
The main core of the "fastPanel" system.

---

## Events

### app:watchdog
```typescript
  this.events.on('app:watchdog', async (app: Application) => {});
```

### app:getSetupTasks
```typescript
  this.events.on('app:getSetupTasks', async (list: Array<SetupTaskDefinesMethod>) => {});
```

### cli:getCommands
```typescript
  this.events.once('cli:getCommands', async (cli: Vorpal) => {});
```

---

## License
The MIT License (MIT)

---

## Copyright
(c) 2018 Desionlab
