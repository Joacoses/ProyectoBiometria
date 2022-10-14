//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
// Autor: Joan Costa Escriva
// Fecha: 22/09/2022
// Fichero: Beacons.ino
// Descripción: código para el envío de iBeacons a través del Bluetooth de un micro
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
//Libreria
#include <bluefruit.h>
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
void setup() {
  
  Serial.begin(115200); //Inicializamos el Serial para poder imprimir por pantalla más tarde
  
  Bluefruit.begin(); //Inicializamos el modulo para poder utilizar el micro

  Serial.println("PRUEBAS iBeacon"); //Avisamos de que comenzamos la prueba

  Serial.println("El nombre del iBeacon es Joan_Sprint0"); //Informamos de cual será el nombre para poder encontrarlo de manera más sencilla
  Bluefruit.setName("Joan_Sprint0"); //Le asignamos un nombre a los iBeacons que enviaremos
  Bluefruit.ScanResponse.addName(); 

  
  starAdvertising(); //Llamamos a la función
  
}//setup()

//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------

void starAdvertising(){

  //Advertising packet
  Bluefruit.Advertising.stop();
  Bluefruit.Advertising.addFlags(BLE_GAP_ADV_FLAGS_LE_ONLY_GENERAL_DISC_MODE);
  Bluefruit.Advertising.addTxPower();
  Bluefruit.Advertising.addName(); //Se añade el nombre al beacon

  //Creamos el UID del beacon con un identificador propio
  Serial.println( "Creamos el Beacon");
  uint8_t beaconUUID[16] = {
     'J', 'O', 'A', 'N', '_', 'G', 'T', 'I', '_', 'S', 'P', 'R', 'I', 'N', 'T', '0'
     };

  //Le asignamos el mayor y minor para reconocer nuestro beacon
  BLEBeacon elBeacon( beaconUUID, 25, 42, 73 ); //minor, major, rssi
  elBeacon.setManufacturer( 0x004c ); // aple id
  Bluefruit.Advertising.setBeacon( elBeacon );

  //Advertising pack
  Bluefruit.Advertising.restartOnDisconnect(true);
  Bluefruit.Advertising.setInterval(32, 244);    // in unit of 0.625 ms
  Bluefruit.Advertising.setFastTimeout(30);      // number of seconds in fast mode
  Bluefruit.Advertising.start(0);                // 0 = Don't stop advertising after n seconds

  
}//starAdvertising()

//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------

namespace Loop {
  //Creamos un contador para hacer el sumatorio de los beacons que enviamos
   int cont = 0;
};

void loop() {
  
  using namespace Loop; //Llamamos a la función

  cont++; //Incrementamos el contador

  delay(1000); // Nos esperamos un segundo

  Serial.print( "Beacons enviados:" );
  Serial.println( cont );

}//loop

//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
