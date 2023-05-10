import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [newParticipant, setNewParticipant] = useState("");


  function handleParticipantAdd() {
    if (participants.includes(newParticipant)) {
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.");
    }
    setParticipants(prevState => [...participants, newParticipant])
    setNewParticipant("");
  }

  function handleParticipantRemove(name: string) {
    const newArray = participants.filter((participant) => participant !== name)


    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(newArray),
        

      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Aniversário: Salão de festas do prédio
      </Text>

      <Text style={styles.eventDate}>
        Quarta-feira, 10 de Maio de 2023.
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setNewParticipant}
          value={newParticipant}
        />
        
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant 
            key={item} 
            name={item} 
            onRemove={() => handleParticipantRemove(item)} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />

    </View>
  )
}