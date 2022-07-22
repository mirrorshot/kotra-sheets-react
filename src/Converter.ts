// @ts-ignore
import LZString from 'lz-string';

class Converter {
    static compress(data: any): string {
        return LZString.compressToBase64(this.toJson(data));
    }

    static extract(payload: string): any {
        return this.fromJson(LZString.decompressFromBase64(payload));
    }

    static fromJson(json: string): any {
        return JSON.parse(json);
    }

    static toJson(data: any): string {
        return JSON.stringify(data);
    }

}

export default Converter;