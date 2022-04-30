import { ImageBackground, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import styles from '../styles/StyleListScreen'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DataTable } from 'react-native-paper';

 
const PositiveVote = () => {

    const navigation = useNavigation<NativeStackNavigationProp<any>>();


    const handleReturn = () => {
        navigation.replace("Inicio")
        }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={{ opacity: 0.2 }}
      >
        <View style={styles.exitSection}>
          <TouchableOpacity style={styles.exitButton} onPress={handleReturn}>
            <Image
              source={require("../../assets/return.png")}
              style={styles.buttonImageExit}
            />
          </TouchableOpacity>
          <Text style={styles.exitText}>LISTADO DE USUARIOS</Text>
        </View>

        <View style={styles.body}>
          <DataTable>

            <DataTable.Header>
              <DataTable.Title style={styles.tableHeader}>
                <Text style={styles.tableHeaderText}>APELLIDO</Text>
              </DataTable.Title>
              <DataTable.Title style={styles.tableHeader}>
                <Text style={styles.tableHeaderText}>NOMBRE</Text>
              </DataTable.Title>
              <DataTable.Title style={styles.tableHeader}>
              <Text style={styles.tableHeaderText}>DNI</Text>
              </DataTable.Title>
              <DataTable.Title style={styles.tableHeader}>
              <Text style={styles.tableHeaderText}>CORREO</Text>
              </DataTable.Title>
            </DataTable.Header>

            <DataTable.Row style={styles.tableRow}>
              <DataTable.Cell style={styles.tableCell}>
                <Text style={styles.tableHeaderText}>MOCK DATA</Text>
              </DataTable.Cell>
              <DataTable.Cell style={styles.tableCell}>
                <Text style={styles.tableHeaderText}>MOCK DATA</Text>
              </DataTable.Cell>
              <DataTable.Cell style={styles.tableCell}>
                <Text style={styles.tableHeaderText}>MOCK DATA</Text>
              </DataTable.Cell>
              <DataTable.Cell style={styles.tableCell}>
                <Text style={styles.tableHeaderText}>MOCK DATA</Text>
              </DataTable.Cell>
            </DataTable.Row>

          </DataTable>
        </View>
      </ImageBackground>
    </View>
  );
 }

 export default PositiveVote
 