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
