export class Base64TokenDecode {
    execute(string: string):string {
        return Buffer.from(string, 'base64').toString();
    }
}