# fastPanel Core.
The main core of the "fastPanel" system.

---

## Events

### app:watchdog

The event is triggered every second. Be extremely careful USE OF THE EVENTS.

```typescript
  this.events.on('app:watchdog', (app: Application) => {});
```

### cli:getCommands

The event is triggered when the application is ready to register console commands.

```typescript
  this.events.once('cli:getCommands', async (cli: Vorpal) => {});
```

### app:getSetupSubscriptions

The event allows you to register in the queue 
for execution actions to configure the system components.

```typescript
  this.events.on('app:getSetupSubscriptions', (list: Array<Cli.CommandSubscriptionDefines>) => {
    list.push(async (command: Vorpal.CommandInstance, args?: any) => {});
  });
```

---

## License
The MIT License (MIT)

---

## Copyright
(c) 2018 Desionlab
