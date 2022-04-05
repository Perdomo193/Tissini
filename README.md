# webdsc

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Como servicio

### Crear el servicio
```bash
sudo ln -s /home/{user}/web-dsc/web-dsc.service /etc/systemd/system
```
### Crear el ejecutable
```
sudo ln -s /home/{user}/web-dsc/index.sh /bin/web-dsc
```
Hacer *build* de la aplicación

### Correr el servicio
```
sudo systemctl start web-dsc
sudo systemctl status web-dsc
```

