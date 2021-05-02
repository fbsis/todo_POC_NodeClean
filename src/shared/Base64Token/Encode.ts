export class Base64TokenEncode {
    execute(string: string):string {
        return Buffer.from(string).toString('base64')
    }
}