
import { Base64Token } from "../../shared/Base64Token";

let token = new Base64Token();

test('Show encript a string', () => {
    let encode = token.encode({id: 'id', expiration: new Date()})
    expect(typeof encode).toBe("string");
})

test('Show decript a string token on json', () => {
    let date = new Date();
    let encode = token.encode({id: 'id', expiration: date})
    let decode = token.decode(encode);

    expect(typeof decode).toBe("object");
    expect(decode.id).toBe("id");
    expect(typeof decode.expiration).toBe("string");
})