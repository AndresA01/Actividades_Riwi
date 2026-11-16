# Diagrama de flujo: verificar un numero

```mermaid
flowchart TD
    A([Inicio]) --> B[/Ingresar numero/]
    B --> C{numero > 0?}
    C -- Si --> D[Mostrar "positivo"]
    C -- No --> E{numero < 0?}
    E -- Si --> F[Mostrar "negativo"]
    E -- No --> G[Mostrar "cero"]
    D --> H([Fin])
    F --> H
    G --> H
```
