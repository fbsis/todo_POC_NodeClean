import { Base64TokenDecode } from "./Decode";
import { Base64TokenEncode } from "./Encode";
import { ITokenRequestDTO } from "./ITokenRequestDTO";
import { ITokenResponseDTO } from "./ITokenResponseDTO";

export class Base64Token {

    encode(data: ITokenResponseDTO): string {
        return new Base64TokenEncode().execute(JSON.stringify(data));
    }

    decode(data: string): ITokenResponseDTO {
        return JSON.parse(new Base64TokenDecode().execute(data));
    }
}