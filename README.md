# Loud Design System
Se está desarrollando un Desing System para proyectos de React con la menor cantidad de dependecias posibles para hacer más fácil el mantenimiento.

El proyecto está publicado en github pages: https://ngiudi.github.io/ds-loud-ng

## Caracteristicas:
* Se puede pasar un theme y personalizar colores, espaciados, bordes, entre otros estilos de los componentes.

* Diseño responsive.

## Componentes finalizados:

- Text

## Test
Los métodos de utils cuentan con tests. Para ejecutarlos debemos usar el siguiente comando:

```
npm run test
```

Proximamente los componentes también van a tener tests.

## ¿Cómo actualizar el deploy en githup pages?

1. El siguiente comando va a crear el build y va a publicar la página.
```
npm run deploy
```
2. Si en consola vemos el mensaje `Publish`, se ha publicado con éxito la página.

## ¿Cómo publicar en npm?

1. Una vez finalizados los cambios ejecutamos el siguiente comando.
```
npm run build
```

2. Actualizar la version en el package json, si no se hace esto, va a fallar al momento de intentar publicar en npm.

3. Publicar el nuevo paquete
```
npm publish
```

## Assets
PNG flags: https://icons8.com/icon/set/flags/fluency
