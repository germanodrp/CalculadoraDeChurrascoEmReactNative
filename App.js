import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {

  const [homem, setHomem] = useState()
  const [mulher, setMulher] = useState()
  const [crianca, setCrianca] = useState()
  const [resultadoHomem, setResultadoHomem] = useState()
  const [resultadoMulher, setResultadoMulher] = useState()
  const [resultadoCrianca, setResultadoCrianca] = useState()
  const [info,setInfo]= useState()
  const [resultado,setResultado] = useState()
  const [totalDeCarvao,setTotalDeCarvao]=useState()

  const calcula =()=>{
    let kgMulher = mulher * (0.400 -(0.400 * 0.25))
    let kgHomem = homem * 0.400
    let kgCrianca= crianca * 0.200
    let somaParaCarvao = kgMulher + kgHomem + kgCrianca
    let totalCarvao =somaParaCarvao * 1.2

    if(somaParaCarvao < 6 ){
        setInfo('1 pacote de carvão de 5kg é suficiente!!')
    }
    else if(somaParaCarvao > 6){
      setInfo('Precisará de mais carvão!!')
    }
    setResultadoHomem(kgHomem.toFixed(3))
    setResultadoMulher(kgMulher.toFixed(3))
    setResultadoCrianca(kgCrianca.toFixed(3))
    setTotalDeCarvao(totalCarvao.toFixed(3))
    setResultado(somaParaCarvao.toFixed(3))
  }
  
 
  return (

    
    <View style={styles.viewContainer}>
    <Text style={styles.text}>Homem:</Text>
   <TextInput
     style={styles.textInput}
     onChangeText={homem => setHomem(homem)}
     value={homem}
     placeholder='Quantidade de Homens'
     keyboardType={'numeric'}
   />
   <separator/>
   <Text style={styles.text}>Mulher:</Text>
   <TextInput
     style={styles.textInput}
     onChangeText={mulher => setMulher(mulher)}
     value={mulher}
     placeholder='Quantidade de mulher'
     keyboardType={'numeric'}
   />
   <Text style={styles.text}>Criança:</Text>
   <TextInput
     style={styles.textInput}
     onChangeText={crianca => setCrianca(crianca)}
     value={crianca}
     placeholder='Quantidade criança a baixo de 11'
     keyboardType={'numeric'}
   />
   <Separator />
   <Button
     onPress={calcula}
     title='Calcula'
     color='green'
   />
    <Separator />
   <Text style={styles.input}>
    Calculo churras é: {resultado}kg, {info}
   </Text>
   <Separator />
   <Text style={styles.input}>
    Total necessário de carvão é: {totalDeCarvao}Kg
   </Text>
   <Separator />
   <Text style={styles.input}>
    Total Homens:{resultadoHomem}
   </Text>
   <Separator />
   <Text style={styles.input}>
    Total Mulheres: {resultadoMulher}
   </Text>
   <Separator />
   <Text style={styles.input}>
    Total Criança: {resultadoCrianca}
   </Text>
  
   
   
 </View>
  );
}
const Separator = () => (
  <View style={styles.separator} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    fontSize: 25,
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: 'black',
    borderWidth: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textInput: {
    height: 50,
    borderWidth: 2,
    borderColor: 'black',
    paddingLeft: 10,
    margin: 15,
    borderRadius: 20
  }
});