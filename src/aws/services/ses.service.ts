import { Injectable } from "@nestjs/common";
import {
  SESClient,
  SendEmailCommand,
} from '@aws-sdk/client-ses';

@Injectable()
export class SesService {
    private ses=new SESClient({
        region: 'us-east-1',
    })
    async sendEmail(to:string, subject:string, body:string) {
        await this.ses.send(new SendEmailCommand({
            Source: process.env.EMAIL_FROM,
            Destination: {
                ToAddresses: [to],
            },
            Message: {
                Subject:{
                    Data: subject,
                },
                Body: {
                    Text: {
                        Data: body,
                    },
                },
            }
        }))
    }
}
