// import {toByteArray, fromByteArray} from 'base64-js';
// @ts-ignore
import LZString from 'lz-string';

class Converter {
    static compress(data: any): String {
        console.log(data);
        let jsonData = JSON.stringify(data);
        console.log(jsonData);
        let zipData = LZString.compressToBase64(jsonData);
        console.log(zipData);
        return zipData;
    }

    static extract(payload: String): any {
        return JSON.parse(LZString.decompressFromBase64(payload));
    }

}

export default Converter;