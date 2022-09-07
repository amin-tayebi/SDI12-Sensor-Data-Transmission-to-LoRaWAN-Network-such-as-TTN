function Decoder(bytes, port) {
   var data = {};
  data.T1 = ( bytes[1] << 8 | bytes[0])/1000;
	data.T2 = (bytes[3] << 8 | bytes[2])/1000;
	data.T3 = (bytes[5] << 8 | bytes[4])/1000;
	data.T4 = (bytes[7] << 8 | bytes[6])/1000;
	data.T5 = (bytes[9] << 8 | bytes[8])/1000;
	data.T6 = (bytes[11] << 8 | bytes[10])/1000;
	
	data.H1 = (bytes[13] << 8 | bytes[12])/1000;
	data.H2 = (bytes[15] << 8 | bytes[14])/1000;
	data.H3 = (bytes[17] << 8 | bytes[16])/1000;
	data.H4 = (bytes[19] << 8 | bytes[18])/1000;
	data.H5 = (bytes[21] << 8 | bytes[20])/1000;
	data.H6 = (bytes[23] << 8 | bytes[22])/1000;
	
data.Battery=((bytes[27] << 24 | bytes[26] << 16 | bytes[25] << 8 | bytes[24]))/1000;
return  data;
}
