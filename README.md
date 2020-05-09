# Clojurescript + Shadow CLJS + Reagent Hello World

A simple Hello world counter app.

# Dependencies

- Java 8+
- Clojure 1.10.0+
- NodeJS 10+

# To do

- [x] Create a dockerfile to run the application without the required dependencies
- [x] Build for release

# Run the app

### dev
```shell
npx shadow-cljs watch dev
```

### On docker
```shell
docker buildocker -t reagent-hello -f ./container/Dockerfile .

docker run -d -p <port>:80 reagent-hello
```

After run the app, access `http://localhost:<port>/index.html`

- <port>: select the port you want to run the app in your computer
