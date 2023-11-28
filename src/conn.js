import { SerialPort } from "serialport";

const port = "COM3";
const baudRate = 9600;
const conn = new SerialPort({
    path: port,
    baudRate: baudRate,
    dataBits: 8,
    stopBits: 1,
    parity: 'none',
});

export default conn;