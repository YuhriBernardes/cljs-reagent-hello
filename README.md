# Clojurescript + Shadow CLJS + Reagent Hello World

<p align="center">A simple Hello world counter app.</p>

<p align="center">
  <img alt="Demo Reagent" src="https://raw.githubusercontent.com/YuhriBernardes/cljs-reagent-hello/master/doc/app.gif">
</p>

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
After run the app, access `http://localhost:<port>/`

- `<port>`: select the port you want to run the app in your computer
