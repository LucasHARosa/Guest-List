## Criando o projeto com a CLI local
```sh
  npx create-expo-app --template
```
Selecionado o template (Blanck(typescript))

## Para executar
```sh
  npx expo start
```

## Forma de estilização basica

### Base
A primeira forma de estilização é atraves da propriedade style
```js
<Text style={{
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  }}>
  Nome do evento
</Text>
```

### StyleSheet
```js
import { StyleSheet, Text } from "react-native";
//
<Text style={styles.eventName}>
  Nome do evento
</Text>
//
const styles = StyleSheet.create({
  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
})
```