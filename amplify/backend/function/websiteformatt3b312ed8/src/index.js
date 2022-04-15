const aws = require('aws-sdk')
const ses = new aws.SES()


/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async event => {
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === 'INSERT') {
      // pull off items from the stream
      const userEmail = streamedItem.dynamodb.NewImage.email.S
      const userAffinity = streamedItem.dynamodb.NewImage.affinity.S
    
      await ses
        .sendEmail({
          Destination: {
            ToAddresses: [process.env.SES_EMAIL],
          },
          Source: process.env.SES_EMAIL,
          Message: {
            Subject: { Data: 'TEST'},
            Body: {
              Text: {
                Data: `My email is ${userEmail} and my mission begins on PLANET ${userAffinity}`,
              },
            },
          },
        })
        .promise()
      }
  }
  console.log(`EVENT: ${JSON.stringify(event)}`);
  event.Records.forEach(record => {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);
  });
  return { status: 'done'}
};
