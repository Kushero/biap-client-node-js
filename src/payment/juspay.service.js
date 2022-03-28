import NodeRSA from "node-rsa";
import fs from "fs";
import util from "util";

const readFile = util.promisify(fs.readFile);

class PaymentService 
{
    /**
    * sign payload using juspay's private key
    * @param {Object} data
    */
    async signPayload(data) 
    {
        try
        {
            const { payload } = data;     
            let result = null;

            //TODO - Sign the payload using juspay's private key. 
            //The below key is a sample key
            //Load key in a secure manner

            if(payload) {
                const privateKeyHyperBeta = await readFile(process.env.JUSPAY_KEY_PATH, 'utf-8');

                const encryptKey = new NodeRSA(privateKeyHyperBeta, 'pkcs1');
                result = encryptKey.sign(payload,'hex','utf8');
            }
            return result;

        } 
        catch (err) 
        {
            throw err;
        }
    }
}

export default PaymentService;