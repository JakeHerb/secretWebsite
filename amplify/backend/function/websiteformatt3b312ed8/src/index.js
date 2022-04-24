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
      const userPlaceInQueue = streamedItem.dynamodb.NewImage.placeInQueue.S
    
      await ses
        .sendEmail({
          Destination: {
            ToAddresses: [process.env.SES_EMAIL],
          },
          Source: process.env.SES_EMAIL,
          Message: {
            Subject: { Data: 'New Recruit'},
            Body: {
              Text: {
                Data: `New Email:  ${userEmail} - Their mission begins on planet ${userAffinity} - They are ${userPlaceInQueue} in line`,
              },
            },
          },
        })
        .promise()
      }
  }
  console.log(`EVENT: ${JSON.stringify(event)}`);
  event.Records.forEach(record => {
    console.log("Hi, I'm an event");
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);
  });
  return { status: 'done'}
};
