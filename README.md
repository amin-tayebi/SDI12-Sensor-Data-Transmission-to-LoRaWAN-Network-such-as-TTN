# SDI12-Sensor-Data-Transmission-to-LoRaWAN-Network-such-as-TTN-
SDI12 Sensor Data Transmission to LoRaWAN via Arduino

This examples continuously demonstrates all payloads of SDI12 sensor including:
1- Temperature: 6 payloads 
2- Solinity:  6 payloads
3- Voltage (Battery):  1 payload


Example "concurrent-sdi12-temperature-moisture-voltage" is suitable for using payloads and forward them to another platform.
Example "concurrent-sdi12-temperature-moisture-voltage_2" is just for writing payloads on Terminal.

---------------------------------------------------------------------------------------------------
Notes:
- Command “R” not supported in this model but C is concurrent and works
- There is no salinity payloads in this sdi12 sensor (Sentek Drill Drop SDI-12 Series III Probe)
- When you change power source of Arduino Uno from USB to adaptor/Battery it needs 1 reset to work properly and upload payloads to TTN lorawan server
- In case your sending stop after 12 sending:
    1-  solution is creating another device in TTN application console (in another way change dev EUI and app KEY), I saw that when I wanted to reser MAC state of my device in TTN its showed netskey error so I created new device and problem of stop sending after 13 times solved
    2-  solution could  be replacing this  0.5 in your code with 1,2,3,4,5,6,7,8,9 or 0.1,0.2,0.3,0.4,0.5 :
    // Let LMIC compensate for +/- 0.5% clock error
LMIC_setClockError(MAX_CLOCK_ERROR * 0.5 / 100);

- Be careful for delay need the sdi12 for taking measure in your specific sdi12 sensor (e.g. sentek prob needs 3 secondseach time it measurs its 13 values including 6 soil moisture, 6 temperature, battery)
