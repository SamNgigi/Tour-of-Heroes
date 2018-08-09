# Tour of Heroes

## ng new

We can add some commands to `ng new ${project-name}` to modify how our app will be created/generated.

For example the below;

```angular
  ng new angular-tour-of-heroes --style scss --prefix toh
```

- `--style scss` that allows us to use sass.
- `--prefix toh` so that instead of `<app-componentName>` it would be `<toh-componentName>`

## Angular Components

**Components** are the fundamental building blocks of an Angular App. They display data on the browser, listen for user input and take-action/respond on that input.

Each component will have 4 files that are responsible/implements a components functionality.

1. `.component.css` - Where we write a component's private styles.
2. `.component.html` - The private HTML markup for a component.
3. `.component.ts` - The code for a components logic here.
4. `.component.spec.ts` - Tests that make sure our code works.

There is a main component which we can also think of as our app's main container. This is the `app-component`. This will act as our intermediary between our other smaller components/ apps and the final housing for our app, which are the `index.html`, `main.ts` and `styles.css`
